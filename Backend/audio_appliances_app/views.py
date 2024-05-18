from django.http.response import JsonResponse
from audio_appliances_app.models import Products
from audio_appliances_app.serializers import ProductSerializer

def get_products(request, keyword):
    if (request.method == 'GET'):
        #gets QuerySet by keyword
        products = Products.objects.filter(keywords__contains=keyword)
        
        product_serializer = ProductSerializer(products, many=True)
        return JsonResponse(product_serializer.data, safe=False)