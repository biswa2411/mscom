import graphene
from graphene_django import DjangoObjectType
from graphql_auth import mutations
from users.models import User, Address, Favorite, CartItem
from products.models import Product
from django.core.mail import send_mail
from django.template.loader import render_to_string
from ..utils.auth import get_authenticated_user
from django.contrib.auth import get_user_model
import jwt
from django.conf import settings
from datetime import datetime, timedelta
from django.utils.html import strip_tags
from graphql_auth.models import UserStatus


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = "__all__"

class AddressType(DjangoObjectType):
    class Meta:
        model = Address
        fields = "__all__"

class FavoriteType(DjangoObjectType):
    class Meta:
        model = Favorite
        fields = '__all__'

class CartItemType(DjangoObjectType):
    class Meta:
        model = CartItem
        fields = "__all__"

# Define Mutations

class UpsertAddress(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        user_id = graphene.ID(required=True)
        address_line1 = graphene.String(required=True)
        address_line2 = graphene.String()
        city = graphene.String(required=True)
        state = graphene.String(required=True)
        postal_code = graphene.String(required=True)
        country = graphene.String(required=True)

    address = graphene.Field(AddressType)
    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, user_id, address_line1, city, state, postal_code, country, address_line2=None, id=None):
        errors = []
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            errors.append("User does not exist.")
            return UpsertAddress(success=False, errors=errors)

        if id:
            try:
                address = Address.objects.get(pk=id)
                if address.user != user:
                    raise Exception("You do not have permission to update this address.")
            except Address.DoesNotExist:
                errors.append("Address does not exist.")
                return UpsertAddress(success=False, errors=errors)
            except Exception as e:
                errors.append(str(e))
                return UpsertAddress(success=False, errors=errors)

            address.address_line1 = address_line1
            address.address_line2 = address_line2
            address.city = city
            address.state = state
            address.postal_code = postal_code
            address.country = country
            message = "Address updated successfully."
        else:
            address = Address(
                user=user,
                address_line1=address_line1,
                address_line2=address_line2,
                city=city,
                state=state,
                postal_code=postal_code,
                country=country
            )
            message = "Address created successfully."

        try:
            address.full_clean()
            address.save()
        except Exception as e:
            errors.extend(e.messages)
            return UpsertAddress(success=False, errors=errors)

        return UpsertAddress(address=address, success=True, message=message, errors=None)

class DeleteAddress(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        user_id = graphene.ID(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, id, user_id):
        errors = []
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            errors.append("User does not exist.")
            return DeleteAddress(success=False, errors=errors)

        try:
            address = Address.objects.get(pk=id)
            if address.user != user:
                errors.append("You do not have permission to delete this address.")
                return DeleteAddress(success=False, errors=errors)
            address.delete()
            return DeleteAddress(success=True, message="Address deleted successfully.", errors=None)
        except Address.DoesNotExist:
            errors.append("Address does not exist.")
            return DeleteAddress(success=False, errors=errors)

# class UpsertCartItem(graphene.Mutation):
#     class Arguments:
#         id = graphene.ID()
#         user_id = graphene.ID(required=True)
#         product_id = graphene.ID(required=True)
#         quantity = graphene.Int(required=True)

#     cart_item = graphene.Field(CartItemType)
#     success = graphene.Boolean()
#     message = graphene.String()
#     errors = graphene.List(graphene.String)

#     def mutate(self, info, user_id, product_id, quantity, id=None):
#         errors = []
#         try:
#             user = User.objects.get(pk=user_id)
#         except User.DoesNotExist:
#             errors.append("User does not exist.")
#             return UpsertCartItem(success=False, errors=errors)

#         try:
#             product = Product.objects.get(pk=product_id)
#         except Product.DoesNotExist:
#             errors.append("Product does not exist.")
#             return UpsertCartItem(success=False, errors=errors)

#         if id:
#             try:
#                 cart_item = CartItem.objects.get(pk=id)
#                 if cart_item.user != user:
#                     raise Exception("You do not have permission to update this cart item.")
#             except CartItem.DoesNotExist:
#                 errors.append("Cart item does not exist.")
#                 return UpsertCartItem(success=False, errors=errors)
#             except Exception as e:
#                 errors.append(str(e))
#                 return UpsertCartItem(success=False, errors=errors)

#             cart_item.product = product
#             cart_item.quantity = quantity
#             message = "Cart item updated successfully."
#         else:
#             cart_item = CartItem(user=user, product=product, quantity=quantity)
#             message = "Cart item created successfully."

#         try:
#             cart_item.full_clean()
#             cart_item.save()
#         except Exception as e:
#             errors.extend(e.messages)
#             return UpsertCartItem(success=False, errors=errors)

#         return UpsertCartItem(cart_item=cart_item, success=True, message=message, errors=None)

# class DeleteCartItem(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        user_id = graphene.ID(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, id, user_id):
        errors = []
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            errors.append("User does not exist.")
            return DeleteCartItem(success=False, errors=errors)

        try:
            cart_item = CartItem.objects.get(pk=id)
            if cart_item.user != user:
                errors.append("You do not have permission to delete this cart item.")
                return DeleteCartItem(success=False, errors=errors)
            cart_item.delete()
            return DeleteCartItem(success=True, message="Cart item deleted successfully.", errors=None)
        except CartItem.DoesNotExist:
            errors.append("Cart item does not exist.")
            return DeleteCartItem(success=False, errors=errors)

class UpsertFavorite(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        user_id = graphene.ID(required=True)
        product_id = graphene.ID(required=True)

    favorite = graphene.Field(FavoriteType)
    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, user_id, product_id, id=None):
        errors = []
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            errors.append("User does not exist.")
            return UpsertFavorite(success=False, errors=errors)

        try:
            product = Product.objects.get(pk=product_id)
        except Product.DoesNotExist:
            errors.append("Product does not exist.")
            return UpsertFavorite(success=False, errors=errors)

        if id:
            try:
                favorite = Favorite.objects.get(pk=id)
                if favorite.user != user:
                    raise Exception("You do not have permission to update this favorite.")
            except Favorite.DoesNotExist:
                errors.append("Favorite does not exist.")
                return UpsertFavorite(success=False, errors=errors)
            except Exception as e:
                errors.append(str(e))
                return UpsertFavorite(success=False, errors=errors)

            favorite.product = product
            message = "Favorite updated successfully."
        else:
            favorite = Favorite(user=user, product=product)
            message = "Favorite created successfully."

        try:
            favorite.full_clean()
            favorite.save()
        except Exception as e:
            errors.extend(e.messages)
            return UpsertFavorite(success=False, errors=errors)

        return UpsertFavorite(favorite=favorite, success=True, message=message, errors=None)

class DeleteFavorite(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)
        user_id = graphene.ID(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, id, user_id):
        errors = []
        try:
            user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            errors.append("User does not exist.")
            return DeleteFavorite(success=False, errors=errors)

        try:
            favorite = Favorite.objects.get(pk=id)
            if favorite.user != user:
                errors.append("You do not have permission to delete this favorite.")
                return DeleteFavorite(success=False, errors=errors)
            favorite.delete()
            return DeleteFavorite(success=True, message="Favorite deleted successfully.", errors=None)
        except Favorite.DoesNotExist:
            errors.append("Favorite does not exist.")
            return DeleteFavorite(success=False, errors=errors)
              
class ContactUs(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)
        email = graphene.String(required=True)
        subject = graphene.String(required=True)
        message = graphene.String(required=True)

    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)

    def mutate(self, info, name, email, subject, message):
        errors = []
        auth_result = get_authenticated_user(info)
        if auth_result["error"]:
            return ContactUs(success=False, message=None, errors=[auth_result["error"]])

        try:
            # Validate email format (optional, for additional security)
            
            if not email or "@" not in email:
                errors.append("Invalid email address")
                ContactUs(success=False, errors=errors)

            # Render the email template with dynamic content
            email_subject = f"Contact Us: {subject}"
            email_body = render_to_string(
                 'contact_us_email.html',  # Path to your template
                {
                    'name': name,
                    'email': email,
                    'subject': subject,
                    'message': message
                }
            )

            # Send the email (replace 'your_email@example.com' with your actual email)
            send_mail(
                subject=email_subject,
                message='',  # The plain-text version can be left empty if you're sending HTML
                from_email=email,  # Sender's email address
                recipient_list=["biswa@yopmail.com"],  # Replace with your email
                html_message=email_body,  # Send the rendered HTML as the email body
                fail_silently=False,
            )

            return ContactUs(success=True, message="Email sent successfully", errors=None)

        except Exception as e:
            errors.append(str(e))
            return ContactUs(success=False, message=None, errors=errors)


# Define Queries

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





# Function to generate the verification token using django-graphql-jwt
def generate_verification_token(user):
    payload = {
        "user_id": user.id,
        "exp": datetime.utcnow() + timedelta(hours=24),  # Token valid for 24 hours
        "type": "email_verification",
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm="HS256")
    return token

class CustomRegister(mutations.Register):
    # Arguments for the mutation
    class Arguments:
        email = graphene.String(required=True)
        username = graphene.String(required=True)
        password1 = graphene.String(required=True)
        password2 = graphene.String(required=True)
        mobile = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name=graphene.String(required=True)
        role = graphene.String()
        
   
    success = graphene.Boolean()
    message = graphene.String()
    errors = graphene.List(graphene.String)
    

    def mutate(self, info, email, username, password1, password2, mobile, first_name, last_name, role=None):
        try:
           
            # Validate that the passwords match
            if password1 != password2:
                raise Exception("Password1 and Password2 must match")
            
            # Validate mobile number length
            if len(mobile) < 10 or len(mobile) > 15:
                raise Exception("Mobile number must be between 10 and 15 digits")

            User = get_user_model()
            if User.objects.filter(mobile_no=mobile).exists():
                raise Exception("Mobile number already exists")
            
            if User.objects.filter(email=email).exists():
                raise Exception("Email already exists! please singin or provide a new email")
           
            if User.objects.filter(username=username).exists():
                raise Exception("Username already exists")
            
            # Assign a default role if none is provided
            if not role:
                role = "user"

            # Optionally validate role (if predefined roles are needed)
            valid_roles = ["admin", "user", "editor"]
            if role not in valid_roles:
                raise Exception(f"Invalid role. Choose from: {', '.join(valid_roles)}")

            # Create the user without using the super() mutate call
            user = User.objects.create_user(
                email=email,
                username=username,
                first_name=first_name,
                last_name=last_name,
                password=password1,
                mobile_no = mobile,
                role = role,
                is_active = False 
            )

           
           
            
             # Send verification email
            token = generate_verification_token(user)
            verification_link = f"http://localhost:3000/auth/verify?t={token}"
            subject = "Verify Your Email Address"
            message = render_to_string('email_verification.html', {
                'user': user,
                'verification_link': verification_link,
            })
            plain_message = strip_tags(message)
            send_mail(
                subject=subject,
                message=plain_message,  # Plain text version
                from_email='no-reply@yourdomain.com',
                recipient_list=[email],
                html_message=message,  # HTML version
                fail_silently=False,
            )


            return CustomRegister(
                success=True,
                message=f"User registered successfully!. A verification mail is sent to {email} "
            )

        except Exception as e:
            # Return an error response if an exception occurs
            
            return CustomRegister(
                success=False,
                message=str(e)
            )

    
class VerifyAccount(graphene.Mutation):
    class Arguments:
        token = graphene.String(required=True)

    success = graphene.Boolean()
    message = graphene.String()

    def mutate(self, info, token):
        try:
            # Decode the JWT token
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=["HS256"])

            if payload["type"] != "email_verification":
                raise Exception("Invalid token type.")

            # Get the user by ID
            user_id = payload["user_id"]
            User = get_user_model()
            user = User.objects.get(pk=user_id)

            if user.is_active:
                user_status = UserStatus.objects.get(user=user)
                if user_status.verified:
                    return VerifyAccount(
                        success=False, message="Account is already verified."
                    )

            # Activate the user's account
            user.is_active = True
            user.save()
            
            user_status = user.status  # django-graphql-auth automatically links this
            if user_status:
                user_status.verified = True
                user_status.save()

            return VerifyAccount(
                success=True, message="Email verified successfully!"
            )

        except jwt.ExpiredSignatureError:
            return VerifyAccount(success=False, message="The token has expired.")
        except jwt.InvalidTokenError:
            return VerifyAccount(success=False, message="Invalid token.")
        except Exception as e:
            return VerifyAccount(success=False, message=str(e))
            
class ResendActivationEmail(graphene.Mutation):
    class Arguments:
        email = graphene.String(required=True)

    success = graphene.Boolean()
    message = graphene.String()

    def mutate(self, info, email):
        try:
            User = get_user_model()
            user = User.objects.filter(email=email).first()
            
            if not user:
                return ResendActivationEmail(success=False, message="User does not exist.")

            if user.is_active:
                return ResendActivationEmail(success=False, message="Account is already active.")
            
            token = generate_verification_token(user)
            verification_link = f"http://localhost:3000/auth/verify?t={token}"
            subject = "Verify Your Email Address"
            message = render_to_string('email_verification.html', {
                'user': user,
                'verification_link': verification_link,
            })
            plain_message = strip_tags(message)
            send_mail(
                subject=subject,
                message=plain_message,  # Plain text version
                from_email='no-reply@yourdomain.com',
                recipient_list=[email],
                html_message=message,  # HTML version
                fail_silently=False,
            )
            
            return ResendActivationEmail(success=True, message="Activation email sent successfully.")
        except Exception as e:
            return ResendActivationEmail(success=False, message=str(e))
        
            
class AuthMutation(graphene.ObjectType):
    register =CustomRegister.Field()
    
    verify_account = VerifyAccount.Field()
    resend_activation_email = ResendActivationEmail.Field()
    
    update_account = mutations.UpdateAccount.Field()
    
    password_change = mutations.PasswordChange.Field()
    send_password_reset_email = mutations.SendPasswordResetEmail.Field()
    password_reset = mutations.PasswordReset.Field()
    
    delete_account = mutations.DeleteAccount.Field()
    
    token_auth = mutations.ObtainJSONWebToken.Field()  #login
    verify_token = mutations.VerifyToken.Field()
    refresh_token = mutations.RefreshToken.Field()
    revoke_token = mutations.RevokeToken.Field()


class UserMutations(AuthMutation, graphene.ObjectType):
    upsert_address = UpsertAddress.Field()
    delete_address = DeleteAddress.Field()
    # upsert_cart_item = UpsertCartItem.Field()
    # delete_cart_item = DeleteCartItem.Field()
    upsert_favorite = UpsertFavorite.Field()
    delete_favorite = DeleteFavorite.Field()
    contact_us = ContactUs.Field()

class UserQueries(UserQuery, AddressQuery, CartItemQuery, FavoriteQuery, graphene.ObjectType):
    pass


