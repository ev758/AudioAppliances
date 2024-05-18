from django.urls import path
from . import views

urlpatterns = [
    path('api/<str:keyword>/', views.get_products)
]