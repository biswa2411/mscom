
# users/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from products.models import Product
from django.core.validators import RegexValidator


class User(AbstractUser):
    role = models.CharField(max_length=100, blank=True, null=True ) 
    mobile_no = models.CharField(
        max_length=15,
        unique=True,
        validators=[
            RegexValidator(
                regex=r'^\+?\d{10,15}$',
                message="Enter a valid mobile number. It must include 10-15 digits, optionally starting with '+'."
            )
        ]
    )


    def __str__(self):
        return self.username



class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.address_line1}, {self.city}, {self.state}, {self.country}"


class CartItem(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cart_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} - {self.product} - Quantity: {self.quantity}"


class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user} - {self.product}"