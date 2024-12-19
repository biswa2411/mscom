from django.contrib import admin

# Register your models here.
from .models import OrderPromotion,Promotion



admin.site.register(OrderPromotion)
admin.site.register(Promotion)