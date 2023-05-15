from django.contrib import admin
from .models import Product, Category, ProductImage

# Register your models here.
admin.site.register([Category, Product, ProductImage])
