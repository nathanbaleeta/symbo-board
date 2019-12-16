from apps.account.api.language.language_endpoint import languageRouter
from django.urls import path, include

from django.conf.urls import url, include
from rest_framework import routers


urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    url(r'^api/', include(languageRouter.urls)),

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),


    # Add security deterrent layer: Redirect to authentication page if no url matched
    url(r'^(.*)', include('djoser.urls')),




]
