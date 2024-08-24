from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.Freelancer)
admin.site.register(models.Client)
admin.site.register(models.Manager)
admin.site.register(models.TechTeam)
admin.site.register(models.Project)