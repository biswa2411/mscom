from django.db import models
from users.models import User
from products.models import Product

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        # Ensures that each user can only have one review for each product
        unique_together = ['product', 'user']

    def __str__(self):
        return f"{self.user} - {self.product} - Rating: {self.rating}"
