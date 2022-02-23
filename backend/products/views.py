from django.http import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView

from .models import Product, Event, Tour, Ticket, Order
from .serializers import ProductSerializer, EventSerializer, TicketSerializer, OrderSerializer

class EventsList(APIView):
    def get(self, request, format=None):
        events =Event.objects.all()[0:4]
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)
        

class ProductsList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()[0:4]
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

class TicketsList(APIView):
    def get(self, request, format=None):
        tickets = Ticket.objects.all()[0:4]
        serializer = TicketSerializer(tickets, many=True)
        return Response(serializer.data)

class OrderCreateListView(GenericAPIView):
    serializer_class= OrderSerializer
    queryset= Order.objects.all()

    def get(self, request):
        orders= Order.objects.all()
        serializer=self.serializer_class(instance=orders, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        data = request.data

        serializer = self.serializer_class(data)

        if serializer.is_valid():
            serializer.save()

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

class OrderDetailView(GenericAPIView):

    def get(self, request, order_id):
        pass

    def put (self, request, order_id):
        pass

    def delete (self, request, order_id):
        pass