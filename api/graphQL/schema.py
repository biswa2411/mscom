import graphene

class SuperQuery(graphene.ObjectType):
    ABC = graphene.String(default_value="sasasas!")
    
class SuperMutations(graphene.ObjectType):
    ABC = graphene.String(default_value="sasasas!") 
    

schema = graphene.Schema(query=SuperMutations, mutation=SuperMutations)
