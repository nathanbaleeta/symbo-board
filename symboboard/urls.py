from django.contrib import admin
from django.urls import path, include

from django.conf.urls import url, include
from rest_framework import routers

#from apps.account.api.user.user_endpoint import userRouter


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    #url(r'^api/', include(userRouter.urls)),

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    # Add security layer: Redirect to authentication page if no url matched
    url(r'^(.*)', include('djoser.urls')),


]
