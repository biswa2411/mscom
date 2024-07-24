
import graphene
from graphene_django import DjangoObjectType
from graphql_auth import mutations



class AuthMutation(graphene.ObjectType):
    register = mutations.Register.Field()
    verify_account = mutations.VerifyAccount.Field()
    token_auth = mutations.ObtainJSONWebToken.Field()
    send_password_reset_email = mutations.SendPasswordResetEmail.Field()
    
    
class UserInput(graphene.InputObjectType):
    id = graphene.ID()
    name = graphene.String()
    owner = graphene.String()
    email = graphene.String()
    phone = graphene.String()
    website = graphene.String()
    year_founded = graphene.Int()
    industry = graphene.String()
    zip_code = graphene.String()
    state = graphene.String()
    city = graphene.String()
    country = graphene.String()
    about = graphene.String()
    is_active = graphene.Boolean()
