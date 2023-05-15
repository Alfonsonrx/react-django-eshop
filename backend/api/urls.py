from django.urls import path
from .views import *

app_name = 'api'
urlpatterns = [
    path('v1/categories/', Category_APIView.as_view()), 
    path('v1/categories/<int:pk>/', Category_APIView_Detail.as_view()),
    path('v1/product/', Product_APIView.as_view()), 
    path('v1/product/<int:pk>/', Product_APIView_Detail.as_view()),
]