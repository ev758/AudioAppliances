from django.urls import path
from . import views

urlpatterns = [
    path('api/<str:keyword>/', views.get_products),
    path('api/product/<str:product>/', views.get_product)
]