from symboboard.settings.base import *


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

SECRET_KEY = os.environ['SECRET_KEY']


# SECURITY WARNING: update this when you have the production host
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']


# ENVIRONMENT CONFIGURATION SETTINGS
LOCAL_DEV = False
PRODUCTION = True


# Setting globally the permission policy: for production use 'IsAuthenticated'
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    )
}


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME', 'invalid_database_name'),
        'USER': os.getenv('DB_USER', 'invalid_database_user'),
        'PASSWORD': os.getenv('DB_PASS', 'invalid_database_password'),
        'HOST': os.getenv('DB_HOST', 'invalid_database_host'),
        'PORT': os.getenv('DB_PORT', 'invalid_database_port'),
    }
}


if LOCAL_DEV:
    ROOT_URLCONF = 'symboboard.urls_dev'
elif PRODUCTION:
    ROOT_URLCONF = 'symboboard.urls_prod'
