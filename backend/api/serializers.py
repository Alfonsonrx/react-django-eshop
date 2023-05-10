from rest_framework import serializers
from .models import Product, Category

class ProductSerializer(serializers.ModelSerializer):
    
    images = serializers.ListField(child=serializers.ImageField())
    image = serializers.ImageField()
    
    class Meta:
        model = Product
        fields = ['id','title', 'price', 'description', 'images', 'image', 'category']

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = ['id', 'name']