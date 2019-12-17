

from django.contrib import admin
from apps.account.models.user import User


class UserAdmin(admin.ModelAdmin):
    pass


admin.site.register(User, UserAdmin)
