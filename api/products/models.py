from django.db import models
class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField( null=True)
    size = models.CharField(blank=True, max_length=100)
    number_of_person = models.IntegerField(blank=True)
    description = models.TextField(blank=True)
    image=models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.ForeignKey('Category', null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.name
    
    

