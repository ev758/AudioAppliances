from django.urls import path
from . import views

urlpatterns = [
    path('', views.audio_appliances),
    path('api/<str:keyword>/', views.get_products),
    path('api/product/<str:product>/', views.get_product),
    path('api/filter/<str:product_filters>/', views.product_filter)
]