from django.db.models import Q
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

def product_filter(request, product_filters):
    if (request.method == 'GET'):
        product_list = product_filters.split("-")
        product = Q(keywords__contains=product_list[0])

        for x in range(1, len(product_list)):
            match product_list:
                case product_list if "sustainable" in product_list[x]:
                    product = product & Q(keywords__contains=product_list[x])
                    continue
                case product_list if "leather" in product_list[x]:
                    product = product & Q(keywords__contains=product_list[x])
                    continue
                case product_list if "dustproof" in product_list[x]:
                    product = product & Q(keywords__contains=product_list[x])
                    continue
                case product_list if "dust resistant" in product_list[x]:
                    product = product & Q(keywords__contains=product_list[x])
                    continue
                case product_list if "waterproof" in product_list[x]:
                    product = product & Q(keywords__contains=product_list[x])
                    continue
                case product_list if "water resistant" in product_list[x]:
                    product = product & Q(keywords__contains=product_list[x])
                    continue
                case product_list if "brand" in product_list[x]:
                    product = product & Q(keywords__contains=product_list[x])
                    continue
            
            product = product | Q(keywords__contains=product_list[x])
        
        products = Products.objects.filter(product)
        product_serializer = ProductSerializer(products, many=True)
        return JsonResponse(product_serializer.data, safe=False)