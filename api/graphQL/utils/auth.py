# utils/auth.py

from graphql_jwt.shortcuts import get_user_by_token 

def get_authenticated_user(info):
    try:
        # Extract the token from the Authorization header
        auth_header = info.context.META.get("HTTP_AUTHORIZATION", "")
        if not auth_header.startswith("Bearer "):
            return {"user": None, "error": "Invalid Authorization header format"}

        token = auth_header.split(" ")[1]  # Extract the token
        user = get_user_by_token(token)  # Validate and get the user

        if not user:
            return {"user": None, "error": "Invalid or expired token"}

        return {"user": user, "error": None}

    except Exception as e:
        return {"user": None, "error": f"Authentication failed: {str(e)}"}
