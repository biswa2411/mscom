import graphene
from graphene_django import DjangoObjectType
from orders.models import Order, OrderItem, ShippingInfo
from users.models import User
from products.models import Product
from users.models import Address



# Define GraphQL Types


class OrderType(DjangoObjectType):
    class Meta:
        model = Order
        fields = "__all__"

class OrderItemType(DjangoObjectType):
    class Meta:
        model = OrderItem
        fields = "__all__"

class ShippingInfoType(DjangoObjectType):
    class Meta:
        model = ShippingInfo
        fields = "__all__"


# Define Mutations


class UpsertOrder(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        user_id = graphene.ID(required=True)
        address_id = graphene.ID(required=True)
        total_amount = graphene.Decimal(required=True)
        status = graphene.String(required=True)

    order = graphene.Field(OrderType)
    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, user_id, address_id, total_amount, status, id=None):
        errors = []
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            errors.append("User does not exist.")
            return UpsertOrder(success=False, errors=errors)

        try:
            address = Address.objects.get(pk=address_id)
        except Address.DoesNotExist:
            errors.append("Address does not exist.")
            return UpsertOrder(success=False, errors=errors)

        if id:
            try:
                order = Order.objects.get(pk=id)
                order.user = user
                order.address = address
                order.total_amount = total_amount
                order.status = status
                message = "Order updated successfully."
            except Order.DoesNotExist:
                errors.append("Order does not exist.")
                return UpsertOrder(success=False, errors=errors)
        else:
            order = Order(
                user=user,
                address=address,
                total_amount=total_amount,
                status=status
            )
            message = "Order created successfully."

        try:
            order.full_clean()
            order.save()
        except Exception as e:
            errors.extend(e.messages)
            return UpsertOrder(success=False, errors=errors)

        return UpsertOrder(order=order, success=True, message=message, errors=None)

class DeleteOrder(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, id):
        errors = []
        try:
            order = Order.objects.get(pk=id)
            order.delete()
            return DeleteOrder(success=True, message="Order deleted successfully.", errors=None)
        except Order.DoesNotExist:
            errors.append("Order does not exist.")
            return DeleteOrder(success=False, errors=errors)

class UpsertOrderItem(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        order_id = graphene.ID(required=True)
        product_id = graphene.ID(required=True)
        quantity = graphene.Int(required=True)
        price = graphene.Decimal(required=True)

    order_item = graphene.Field(OrderItemType)
    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, order_id, product_id, quantity, price, id=None):
        errors = []
        try:
            order = Order.objects.get(pk=order_id)
        except Order.DoesNotExist:
            errors.append("Order does not exist.")
            return UpsertOrderItem(success=False, errors=errors)

        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            errors.append("Product does not exist.")
            return UpsertOrderItem(success=False, errors=errors)

        if id:
            try:
                order_item = OrderItem.objects.get(pk=id)
                order_item.order = order
                order_item.product = product
                order_item.quantity = quantity
                order_item.price = price
                message = "Order item updated successfully."
            except OrderItem.DoesNotExist:
                errors.append("Order item does not exist.")
                return UpsertOrderItem(success=False, errors=errors)
        else:
            order_item = OrderItem(
                order=order,
                product=product,
                quantity=quantity,
                price=price
            )
            message = "Order item created successfully."

        try:
            order_item.full_clean()
            order_item.save()
        except Exception as e:
            errors.extend(e.messages)
            return UpsertOrderItem(success=False, errors=errors)

        return UpsertOrderItem(order_item=order_item, success=True, message=message, errors=None)

class DeleteOrderItem(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, id):
        errors = []
        try:
            order_item = OrderItem.objects.get(pk=id)
            order_item.delete()
            return DeleteOrderItem(success=True, message="Order item deleted successfully.", errors=None)
        except OrderItem.DoesNotExist:
            errors.append("Order item does not exist.")
            return DeleteOrderItem(success=False, errors=errors)

class UpsertShippingInfo(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        order_id = graphene.ID(required=True)
        carrier = graphene.String(required=True)
        tracking_number = graphene.String(required=True)
        status = graphene.String(required=True)

    shipping_info = graphene.Field(ShippingInfoType)
    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, order_id, carrier, tracking_number, status, id=None):
        errors = []
        try:
            order = Order.objects.get(pk=order_id)
        except Order.DoesNotExist:
            errors.append("Order does not exist.")
            return UpsertShippingInfo(success=False, errors=errors)

        if id:
            try:
                shipping_info = ShippingInfo.objects.get(pk=id)
                shipping_info.order = order
                shipping_info.carrier = carrier
                shipping_info.tracking_number = tracking_number
                shipping_info.status = status
                message = "Shipping info updated successfully."
            except ShippingInfo.DoesNotExist:
                errors.append("Shipping info does not exist.")
                return UpsertShippingInfo(success=False, errors=errors)
        else:
            shipping_info = ShippingInfo(
                order=order,
                carrier=carrier,
                tracking_number=tracking_number,
                status=status
            )
            message = "Shipping info created successfully."

        try:
            shipping_info.full_clean()
            shipping_info.save()
        except Exception as e:
            errors.extend(e.messages)
            return UpsertShippingInfo(success=False, errors=errors)

        return UpsertShippingInfo(shipping_info=shipping_info, success=True, message=message, errors=None)

class DeleteShippingInfo(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, id):
        errors = []
        try:
            shipping_info = ShippingInfo.objects.get(pk=id)
            shipping_info.delete()
            return DeleteShippingInfo(success=True, message="Shipping info deleted successfully.", errors=None)
        except ShippingInfo.DoesNotExist:
            errors.append("Shipping info does not exist.")
            return DeleteShippingInfo(success=False, errors=errors)






# Define Queries

class OrderQuery(graphene.ObjectType):
    get_all_orders = graphene.List(OrderType)
    get_orders_by_user_id = graphene.List(OrderType, user_id=graphene.ID(required=True))
    get_order_by_id = graphene.Field(OrderType, id=graphene.ID(required=True))

    def resolve_get_all_orders(self, info):
        return Order.objects.all()

    def resolve_get_orders_by_user_id(self, info, user_id):
        try:
            return Order.objects.filter(user__id=user_id)
        except Order.DoesNotExist:
            return None

    def resolve_get_order_by_id(self, info, id):
        try:
            return Order.objects.get(pk=id)
        except Order.DoesNotExist:
            return None

class OrderItemQuery(graphene.ObjectType):
    get_all_order_items = graphene.List(OrderItemType)
    get_order_items_by_order_id = graphene.List(OrderItemType, order_id=graphene.ID(required=True))
    get_order_item_by_id = graphene.Field(OrderItemType, id=graphene.ID(required=True))

    def resolve_get_all_order_items(self, info):
        return OrderItem.objects.all()

    def resolve_get_order_items_by_order_id(self, info, order_id):
        try:
            return OrderItem.objects.filter(order__id=order_id)
        except OrderItem.DoesNotExist:
            return None

    def resolve_get_order_item_by_id(self, info, id):
        try:
            return OrderItem.objects.get(pk=id)
        except OrderItem.DoesNotExist:
            return None

class ShippingInfoQuery(graphene.ObjectType):
    get_all_shipping_info = graphene.List(ShippingInfoType)
    get_shipping_info_by_order_id = graphene.List(ShippingInfoType, order_id=graphene.ID(required=True))
    get_shipping_info_by_id = graphene.Field(ShippingInfoType, id=graphene.ID(required=True))

    def resolve_get_all_shipping_info(self, info):
        return ShippingInfo.objects.all()

    def resolve_get_shipping_info_by_order_id(self, info, order_id):
        try:
            return ShippingInfo.objects.filter(order__id=order_id)
        except ShippingInfo.DoesNotExist:
            return None

    def resolve_get_shipping_info_by_id(self, info, id):
        try:
            return ShippingInfo.objects.get(pk=id)
        except ShippingInfo.DoesNotExist:
            return None




# Combine Queries and Mutations into a Schema


class OrdersMutations( graphene.ObjectType):
    upsert_order = UpsertOrder.Field()
    delete_order = DeleteOrder.Field()
    upsert_order_item = UpsertOrderItem.Field()
    delete_order_item = DeleteOrderItem.Field()
    upsert_shipping_info = UpsertShippingInfo.Field()
    delete_shipping_info = DeleteShippingInfo.Field()

class OrdersQueries(
    OrderQuery, 
    OrderItemQuery, 
    ShippingInfoQuery, 
    graphene.ObjectType
):
    pass