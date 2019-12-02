from django.db import models
from django_extensions.db.models import TimeStampedModel
import uuid


class Language(TimeStampedModel):
    """
    A collection of information on languages used on the platform
    along with other identifiers such as locale etc
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    locale = models.CharField(max_length=100)
    display_name = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        verbose_name = "Language"
        verbose_name_plural = "Languages"
        db_table = 'language'
