# Generated by Django 3.2 on 2022-02-18 10:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='events', to='products.status'),
        ),
    ]