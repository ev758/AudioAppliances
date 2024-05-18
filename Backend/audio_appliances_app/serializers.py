from rest_framework import serializers
from audio_appliances_app.models import Products

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['product_id', 'product_name', 'brand', 'product_description', 'product_link']