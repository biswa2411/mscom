import graphene
from graphene_django import DjangoObjectType
from users.models import CartItem
from products.models import Product
from ..utils.auth import get_authenticated_user


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = "__all__"

class CartItemType(DjangoObjectType):
    class Meta:
        model = CartItem
        fields = "__all__"

# Define Mutations

class CreateProductAndCartItem(graphene.Mutation):
    product = graphene.Field(ProductType)
    cart_item = graphene.Field(CartItemType)

    class Arguments:
        name = graphene.String(required=True)
        price = graphene.Float(required=True)
        size = graphene.String(required=False)
        number_of_person = graphene.Int(required=False)
        description = graphene.String(required=False)
        image = graphene.String(required=False)
        category_id = graphene.Int(required=False)
        quantity = graphene.Int(required=True)
        id = graphene.ID()

    def mutate(self, info, name, price,  quantity, size=None, number_of_person=None, description=None, image=None, category_id=None, id=None):
        user_data = get_authenticated_user(info)
        user= user_data["user"]
        error = user_data["error"]
        if error:
            return CreateProductAndCartItem(success=False, message=None, errors=[error])
        # Create Product
        product, created = Product.objects.get_or_create(
            pk=id,
            name=name,
            price=price,
            size=size or "",
            number_of_person=number_of_person or 0,
            description=description or "",
            image=image or "",
            category_id=category_id,
        )

        message = "Order created successfully." if created else "Order updated successfully."
        # Create CartItem
        if created:
            CartItem.objects.create(
                user=user,
                product=product,
                quantity=quantity,
            )

        return CreateProductAndCartItem(success=True, message=message, errors=[error])


class CartItemQuery(graphene.ObjectType):
    get_cart_items_by_user_id = graphene.List(CartItemType)
    get_cart_item_by_id = graphene.Field(CartItemType, id=graphene.ID(required=True))

    def resolve_get_cart_items_by_user_id(self, info):
        try:
            user_data = get_authenticated_user(info)
            user = user_data["user"]
            error = user_data["error"]
            if error:
                return CartItemQuery(success=False, errors=[error])

            items = CartItem.objects.filter(user=user)
            return CartItemQuery(success=True, items=items, message="Cart items fetched successfully.")

        except CartItem.DoesNotExist:
            return CartItemQuery(success=True, items=[], message="No cart items found for this user.")

    def resolve_get_cart_item_by_id(self, info, id):
        try:
            user = info.context.user  # Get the authenticated user

            # Ensure the cart item belongs to the authenticated user
            cart_item = CartItem.objects.get(pk=id, user=user)
            return CartItemQuery(success=True, cart_item=cart_item, message="Cart item found successfully.")

        except CartItem.DoesNotExist:
            return CartItemQuery(success=False, errors=["Cart item not found or does not belong to the authenticated user."])




class UserMutations( graphene.ObjectType):
    create_product_and_cart_item = CreateProductAndCartItem.Field()

class UserQueries(CartItemQuery):
    pass


