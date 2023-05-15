from django.http import Http404
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import viewsets

from .models import Product, Category, ProductImage
from .serializers import ProductSerializer, PostProductSerializer, CategorySerializer

# Create your views here

# from rest_framework import permissions
from rest_framework.parsers import MultiPartParser,FormParser

class Product_APIView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, format=None):
        products = Product.objects.all().order_by('-created')
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        if 'images' in request.data:
            images = request.data.pop('images')
        else:
            images = []
        
        productSerializer = PostProductSerializer(data=request.data)
        if productSerializer.is_valid():
            productSerializer.save()
            p_id = productSerializer.data['id']
            prod_obj = Product.objects.get(pk=p_id)
            for each_image in images:
                image_obj = ProductImage()
                image_obj.product = prod_obj
                image_obj.image = each_image
                image_obj.save()
            return Response(productSerializer.data, status=status.HTTP_201_CREATED)
        return Response(productSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class Product_APIView_Detail(APIView):
    def get_object(self, pk):
        try:
            return Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        product = self.get_object(pk)
        if product.is_removed:
            raise Http404
        serializer = ProductSerializer(product)  
        return Response(serializer.data)
    def delete(self, request, pk, format=None):
        product = self.get_object(pk)
        if self.request.user == product.user:
            product.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        elif self.request.user.is_staff:
            product.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"detail":"Not authorized"}, status=status.HTTP_401_UNAUTHORIZED)

class Category_APIView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        category = Category.objects.all().order_by('-created')
        serializer = CategorySerializer(category, many=True)
        return Response(serializer.data)
    def post(self, request, format=None):
        serializer = CategorySerializer(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class Category_APIView_Detail(APIView):
    def get_object(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        category = self.get_object(pk)
        if category.is_removed:
            raise Http404
        serializer = CategorySerializer(category)  
        return Response(serializer.data)
    def delete(self, request, pk, format=None):
        category = self.get_object(pk)
        if self.request.user == category.user:
            category.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        elif self.request.user.is_staff:
            category.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response({"detail":"Not authorized"}, status=status.HTTP_401_UNAUTHORIZED)
