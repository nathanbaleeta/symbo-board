from django.contrib import admin
from django.conf import settings

from django.urls import path, include
from django.conf.urls import url, include

# Swagger prerequisite imports
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from apps.account.api.language.language_endpoint import languageRouter

schema_view = get_schema_view(
    openapi.Info(
        title="Symbo Board API",
        default_version='v1',
        description="Test description",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="nbaleeta@gmail.com"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    path('admin/', admin.site.urls),

    url(r'^api/', include(languageRouter.urls)),

    # Yet another Swagger generator
    url(r'^swagger/$', schema_view.with_ui('swagger',
                                           cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc',
                                         cache_timeout=0), name='schema-redoc'),


    # Add security deterrent layer: Redirect to admin authentication page if no url matched
    url(r'^(.*)', admin.site.urls),





]
