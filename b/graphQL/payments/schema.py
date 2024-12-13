import graphene
from graphene_django import DjangoObjectType
from graphql_auth import mutations


from payment.models import Payment, PaymentMethod
from orders.models import Order

class PaymentType(DjangoObjectType):
    class Meta:
        model = Payment
        fields = "__all__"

class PaymentMethodType(DjangoObjectType):
    class Meta:
        model = PaymentMethod
        fields = "__all__"
        
        
        
        
 # Define Mutations
 
        
class UpsertPayment(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        order_id = graphene.ID(required=True)
        amount = graphene.Decimal(required=True)
        payment_method_id = graphene.ID(required=True)
        status = graphene.String(required=True)

    payment = graphene.Field(PaymentType)
    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, order_id, amount, payment_method_id, status, id=None):
        errors = []
        try:
            order = Order.objects.get(pk=order_id)
        except Order.DoesNotExist:
            errors.append("Order does not exist.")
            return UpsertPayment(success=False, errors=errors)

        try:
            payment_method = PaymentMethod.objects.get(pk=payment_method_id)
        except PaymentMethod.DoesNotExist:
            errors.append("Payment method does not exist.")
            return UpsertPayment(success=False, errors=errors)

        if id:
            try:
                payment = Payment.objects.get(pk=id)
                payment.order = order
                payment.amount = amount
                payment.payment_method = payment_method
                payment.status = status
                message = "Payment updated successfully."
            except Payment.DoesNotExist:
                errors.append("Payment does not exist.")
                return UpsertPayment(success=False, errors=errors)
        else:
            payment = Payment(
                order=order,
                amount=amount,
                payment_method=payment_method,
                status=status
            )
            message = "Payment created successfully."

        try:
            payment.full_clean()
            payment.save()
        except Exception as e:
            errors.extend(e.messages)
            return UpsertPayment(success=False, errors=errors)

        return UpsertPayment(payment=payment, success=True, message=message, errors=None)

class DeletePayment(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, id):
        errors = []
        try:
            payment = Payment.objects.get(pk=id)
            payment.delete()
            return DeletePayment(success=True, message="Payment deleted successfully.", errors=None)
        except Payment.DoesNotExist:
            errors.append("Payment does not exist.")
            return DeletePayment(success=False, errors=errors)

class UpsertPaymentMethod(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        name = graphene.String(required=True)

    payment_method = graphene.Field(PaymentMethodType)
    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, name, id=None):
        errors = []
        if id:
            try:
                payment_method = PaymentMethod.objects.get(pk=id)
                payment_method.name = name
                message = "Payment method updated successfully."
            except PaymentMethod.DoesNotExist:
                errors.append("Payment method does not exist.")
                return UpsertPaymentMethod(success=False, errors=errors)
        else:
            payment_method = PaymentMethod(name=name)
            message = "Payment method created successfully."

        try:
            payment_method.full_clean()
            payment_method.save()
        except Exception as e:
            errors.extend(e.messages)
            return UpsertPaymentMethod(success=False, errors=errors)

        return UpsertPaymentMethod(payment_method=payment_method, success=True, message=message, errors=None)

class DeletePaymentMethod(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, id):
        errors = []
        try:
            payment_method = PaymentMethod.objects.get(pk=id)
            payment_method.delete()
            return DeletePaymentMethod(success=True, message="Payment method deleted successfully.", errors=None)
        except PaymentMethod.DoesNotExist:
            errors.append("Payment method does not exist.")
            return DeletePaymentMethod(success=False, errors=errors)

# Define Queries


class PaymentQuery(graphene.ObjectType):
    get_all_payments = graphene.List(PaymentType)
    get_payments_by_order_id = graphene.List(PaymentType, order_id=graphene.ID(required=True))
    get_payment_by_id = graphene.Field(PaymentType, id=graphene.ID(required=True))

    def resolve_get_all_payments(self, info):
        return Payment.objects.all()

    def resolve_get_payments_by_order_id(self, info, order_id):
        try:
            return Payment.objects.filter(order__id=order_id)
        except Payment.DoesNotExist:
            return None

    def resolve_get_payment_by_id(self, info, id):
        try:
            return Payment.objects.get(pk=id)
        except Payment.DoesNotExist:
            return None

class PaymentMethodQuery(graphene.ObjectType):
    get_all_payment_methods = graphene.List(PaymentMethodType)
    get_payment_method_by_id = graphene.Field(PaymentMethodType, id=graphene.ID(required=True))

    def resolve_get_all_payment_methods(self, info):
        return PaymentMethod.objects.all()

    def resolve_get_payment_method_by_id(self, info, id):
        try:
            return PaymentMethod.objects.get(pk=id)
        except PaymentMethod.DoesNotExist:
            return None


# Combine Queries and Mutations into a Schema

class PaymentsQueries( PaymentQuery, PaymentMethodQuery, graphene.ObjectType):
    pass


class PaymentsMutations( graphene.ObjectType):
    upsert_payment = UpsertPayment.Field()
    delete_payment = DeletePayment.Field()
    upsert_payment_method = UpsertPaymentMethod.Field()
    delete_payment_method = DeletePaymentMethod.Field()