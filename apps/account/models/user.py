from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid


from django.urls import reverse


class User(AbstractUser):
    """
    Person with an account on the system
    """

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(max_length=255, unique=True)
    first_name = models.CharField(max_length=30)  # Make firstname mandatory
    last_name = models.CharField(max_length=30)  # Make lastname mandatory

    # Use this setting to leverage djoser auth User model and simply extend it
    REQUIRED_FIELDS = ['first_name', 'last_name']
    USERNAME_FIELD = 'email'

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"
        db_table = 'users'

    def get_absolute_url(self):
        return reverse('user-detail', args=[str(self.id)])

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    # def __str__(self):
    #    return '%s' % (self.display_name)
