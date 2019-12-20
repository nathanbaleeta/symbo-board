from symboboard.settings.base import *


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '1-88lzkged_-+418vdood5wqp2v9*7!k(+&j6)pc6&5fir-3@3'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# ENVIRONMENT CONFIGURATION SETTINGS
LOCAL_DEV = True
PRODUCTION = False


# For testing use 'AllowAny' option

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
    )
}


if LOCAL_DEV:
    ROOT_URLCONF = 'symboboard.urls_dev'
elif PRODUCTION:
    ROOT_URLCONF = 'symboboard.urls_prod'


# Database
# https://docs.djangoproject.com/en/2.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
