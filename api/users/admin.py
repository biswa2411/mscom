from django.contrib import admin
from .models import User,Address,CartItem,Favorite
from django.contrib.auth.admin import UserAdmin
from django.apps import apps


class CustomUserAdmin(UserAdmin):
    # Custom method to display the full name
    def full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}".strip()

    # Set the method as an admin column
    full_name.short_description = 'Full Name'

    # Fields to display in the admin list view
    list_display = ('username', 'email', 'full_name', 'mobile_no', 'is_staff', 'is_active')

    # Fields to filter the list by
    list_filter = ('is_staff', 'is_active', 'role')

    # Fields to search for in the search bar
    search_fields = ('username', 'email', 'mobile_no')

    # Fieldsets for the admin detail view
    fieldsets = UserAdmin.fieldsets + (
        (None, {'fields': ('mobile_no', 'role')}),
    )

    # Fields for the create user form in the admin
    add_fieldsets = UserAdmin.add_fieldsets + (
        (None, {'fields': ('mobile_no', 'role')}),
    )

# Register your models here.
admin.site.register(User,CustomUserAdmin)
admin.site.register(Address)
admin.site.register(CartItem)
admin.site.register(Favorite)


app = apps.get_app_config('graphql_auth')

for User, model in app.models.items():
    admin.site.register(model)
