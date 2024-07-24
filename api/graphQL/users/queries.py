import graphene
from graphene_django import DjangoObjectType
from users.models import User

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




