from django.contrib import admin
from .models import User,Address,CartItem,Favorite
from django.apps import apps

# Register your models here.
admin.site.register(User)
admin.site.register(Address)
admin.site.register(CartItem)
admin.site.register(Favorite)


app = apps.get_app_config('graphql_auth')

for User, model in app.models.items():
    admin.site.register(model)
