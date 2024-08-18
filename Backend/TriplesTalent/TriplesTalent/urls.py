from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from TriplesTalent_App import views
from rest_framework import routers


route = routers.DefaultRouter()
route.register("", views.ClientView, basename = 'cientview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('TriplesTalent_App.urls')),
    path('api/', include(route.urls))

]+static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
