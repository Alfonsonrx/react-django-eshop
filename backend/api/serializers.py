from rest_framework import serializers
from .models import Product, ProductImage, Category

class PostProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id','title', 'price', 'description', 'category']
class ProductSerializer(serializers.ModelSerializer):
    images = serializers.StringRelatedField(many=True)
    category = serializers.SerializerMethodField()
    
    def get_category(self, product):
        category = product.category_model()
        if category:
            return CategorySerializer(category).data
        return category
    class Meta:
        model = Product
        fields = ['id','title', 'price', 'description', 'category', 'images']
class ProductImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ProductImage
        fields = ['id','product', 'image']

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Category
        fields = ['id', 'name']