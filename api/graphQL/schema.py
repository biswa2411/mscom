import graphene
from .users.queries import UserQuery
from .users.mutations import AuthMutation

class SuperQueries(UserQuery):
   pass
    
class SuperMutations(AuthMutation):
   pass
    

schema = graphene.Schema(query=SuperQueries, mutation=SuperMutations)
