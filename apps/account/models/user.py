from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

from django.urls import reverse


class User(AbstractUser):
    """
    Person with an account on the system
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    online = models.BooleanField(null=False, blank=False, default=False)

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        db_table = 'users'

    def get_absolute_url(self):
        return reverse('user-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.username}, {self.email}'

    # def __str__(self):
    #    return '%s' % (self.display_name)
