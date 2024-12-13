import graphene
from .users.schema import UserMutations, UserQueries
from .payments.schema import PaymentsQueries, PaymentsMutations
from .orders.schema import OrdersMutations, OrdersQueries

class SuperQueries(UserQueries, PaymentsQueries, OrdersQueries):
   pass
    
class SuperMutations(UserMutations, PaymentsMutations, OrdersMutations):
   pass
    

schema = graphene.Schema(query=SuperQueries, mutation=SuperMutations)
