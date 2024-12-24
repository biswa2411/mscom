from django.contrib import admin

# Register your models here.
from .models import Payment, PaymentMethod



admin.site.register(PaymentMethod)
admin.site.register(Payment)