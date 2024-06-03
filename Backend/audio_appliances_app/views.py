from django.http.response import JsonResponse
from audio_appliances_app.models import Products
from audio_appliances_app.serializers import ProductSerializer

def get_products(request, keyword):
    if (request.method == 'GET'):
        #gets QuerySet by keyword
        products = Products.objects.filter(keywords__contains=keyword)
        
        product_serializer = ProductSerializer(products, many=True)
        return JsonResponse(product_serializer.data, safe=False)

def get_product(request, product):
    if (request.method == 'GET'):
        #gets an object by product name
        product = Products.objects.get(product_name__exact=product)

        product_serializer = ProductSerializer(product)
        return JsonResponse(product_serializer.data, safe=False)