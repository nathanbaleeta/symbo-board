from apps.account.api.language.language_endpoint import languageRouter

from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from django.contrib import admin


from django.urls import path
from django.conf.urls import url, include

# Swagger prerequisite imports
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


    path('', include('djoser.urls')),
    path('admin/', admin.site.urls),

    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),

    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    url(r'^api/', include(languageRouter.urls)),

    # Yet another Swagger generator
    path('swagger', schema_view.with_ui('swagger',
                                        cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc',
                                       cache_timeout=0), name='schema-redoc'),

    # Add security deterrent layer: Redirect to admin authentication page if no url matched
    url(r'^(.*)', include('djoser.urls')),







]
