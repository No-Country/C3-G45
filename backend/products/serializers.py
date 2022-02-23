from rest_framework import serializers
from .models import Tour, Product, Event, Order, Ticket, Product_Order


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            "id",
            "name_product",
            "get_absolute_url",
            "description",
            "price",
            "stock",
            "get_image",
            "get_thumbnail"
        )

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = (
            "id",
            "name_ticket",
            "get_absolute_url",
            "description",
            "price",
            "stock",
            "get_image",
            "get_thumbnail"
        )


class EventSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True)
    tickets = TicketSerializer(many=True)

    class Meta:
        model = Event
        fields = (
            "id",
            "name_event",
            "description",           
            "status_event",
            "get_image",
            "get_thumbnail",
            "date_event",
            "city",
            "location",
            "get_absolute_url",
            "products",
            "tickets",
        )
""" 
class Product_OrderSerializer(serializers.ModelSerializer):
    products= ProductSerializer()

    class Meta:
        model=Product_Order 
        fields=(
            "id",
            "products",
        )
 """


class OrderSerializer(serializers.ModelSerializer):
    product_order= serializers.CharField()
    event_order=serializers.CharField()
    quantity_product=serializers.IntegerField()
    quantity_event=serializers.IntegerField()
    order_status=serializers.HiddenField(default="PENDING")
    
    class Meta:
        model=Order 
        fields=(
            'product_order',
            'event_order',
            'quantity_product', 
            'quantity_event',
            'order_status',
        )

