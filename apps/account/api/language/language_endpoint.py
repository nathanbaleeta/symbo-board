from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

from apps.account.models.language import Language


# Serializers define the API representation.
class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        #fields = ['id', 'locale', 'language']
        fields = '__all__'


# ViewSets define the view behavior.
class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer


# Routers provide an easy way of automatically determining the URL conf.
languageRouter = routers.DefaultRouter()
languageRouter.register(r'languages', LanguageViewSet)
