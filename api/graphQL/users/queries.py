import graphene
from graphene_django import DjangoObjectType
from users.models import User, Favorite, CartItem, Address
from .mutations import FavoriteType, AddressType, CartItemType

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = "__all__"
        
        
        
        
        
        
class UserQueryResult(graphene.ObjectType):
    user = graphene.Field(UserType)
    status = graphene.Boolean()
    message = graphene.String()

class UserListQueryResult(graphene.ObjectType):
    users = graphene.List(UserType)
    status = graphene.Boolean()
    message = graphene.String()

class UserQuery(graphene.ObjectType):

    all_user = graphene.Field(UserListQueryResult)
    get_user_by_email = graphene.Field(UserListQueryResult, email=graphene.String())
    user_by_id = graphene.Field(UserQueryResult, id=graphene.ID())

    def resolve_all_user(root, info):
        users = User.objects.all()
        return UserListQueryResult(users=users, status=True, message="All users fetched successfully.")

    def resolve_get_user_by_email(root, info, email):
        users = User.objects.filter(email=email)
        if users:
            return UserListQueryResult(users=users, status=True, message="Users with the specified email fetched successfully.")
        return UserListQueryResult(users=[], status=False, message="No users found with the specified email.")

    def resolve_user_by_id(root, info, id):
        try:
            user = User.objects.get(id=id)
            return UserQueryResult(user=user, status=True, message="User found successfully.")
        except User.DoesNotExist:
            return UserQueryResult(user=None, status=False, message="User not found.")

class AddressQuery(graphene.ObjectType):
    get_all_addresses = graphene.List(AddressType)
    get_addresses_by_user_id = graphene.List(AddressType, user_id=graphene.ID(required=True))
    get_address_by_id = graphene.Field(AddressType, id=graphene.ID(required=True))

    def resolve_get_all_addresses(self, info):
        return Address.objects.all()

    def resolve_get_addresses_by_user_id(self, info, user_id):
        try:
            return Address.objects.filter(user__id=user_id)
        except Address.DoesNotExist:
            return None

    def resolve_get_address_by_id(self, info, id):
        try:
            return Address.objects.get(pk=id)
        except Address.DoesNotExist:
            return None


class CartItemQuery(graphene.ObjectType):
    get_all_cart_items = graphene.List(CartItemType)
    get_cart_items_by_user_id = graphene.List(CartItemType, user_id=graphene.ID(required=True))
    get_cart_item_by_id = graphene.Field(CartItemType, id=graphene.ID(required=True))

    def resolve_get_all_cart_items(self, info):
        return CartItem.objects.all()

    def resolve_get_cart_items_by_user_id(self, info, user_id):
        try:
            return CartItem.objects.filter(user__id=user_id)
        except CartItem.DoesNotExist:
            return None

    def resolve_get_cart_item_by_id(self, info, id):
        try:
            return CartItem.objects.get(pk=id)
        except CartItem.DoesNotExist:
            return None
        
        
class FavoriteQuery(graphene.ObjectType):
    get_all_favorites = graphene.List(FavoriteType)
    get_favorites_by_user_id = graphene.List(FavoriteType, user_id=graphene.ID(required=True))
    get_favorite_by_id = graphene.Field(FavoriteType, id=graphene.ID(required=True))

    def resolve_get_all_favorites(self, info):
        return Favorite.objects.all()

    def resolve_get_favorites_by_user_id(self, info, user_id):
        try:
            return Favorite.objects.filter(user__id=user_id)
        except Favorite.DoesNotExist:
            return None

    def resolve_get_favorite_by_id(self, info, id):
        try:
            return Favorite.objects.get(pk=id)
        except Favorite.DoesNotExist:
            return None







