from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from TriplesTalent_App import views
from rest_framework import routers


route = routers.DefaultRouter()
route.register(r"Client", views.ClientView, basename = 'cientview')
route.register(r"Freelancer", views.FreelancerView, basename = 'freelancerview')
route.register(r"Manager", views.ManagerView, basename = 'managerview')
route.register(r"TechTeam", views.TechTeamView, basename = 'techteamview')
route.register(r"Project", views.ProjectView, basename = "projectview")
urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', include('TriplesTalent_App.urls')),
    path('api/', include(route.urls))

]+static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
