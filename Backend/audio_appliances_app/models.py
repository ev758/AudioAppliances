from django.db import models

class Products(models.Model):
    product_id = models.IntegerField(primary_key=True)
    product_name = models.CharField(max_length=100)
    brand = models.CharField(max_length=30)
    product_description = models.TextField()
    product_type = models.CharField(max_length=20)
    product_link = models.TextField()
    image_name = models.CharField(max_length=30)
    image_path = models.TextField()
    keywords = models.TextField()

    class Meta:
        managed = False
        db_table = 'products'