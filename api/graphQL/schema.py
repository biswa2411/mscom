import graphene
from .users.schema import UserMutations, UserQueries

class SuperQueries(UserQueries):
   pass
    
class SuperMutations(UserMutations):
   pass
    

schema = graphene.Schema(query=SuperQueries, mutation=SuperMutations)
