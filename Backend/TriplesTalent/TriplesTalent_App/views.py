from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets
# Create your views here.
class ClientView(viewsets.ModelViewSet):
    queryset = models.Client.objects.all()
    serializer_class = serializers.ClientSerializer
class FreelancerView(viewsets.ModelViewSet):
    queryset = models.Freelancer.objects.all()
    serializer_class = serializers.FreelancerSerializer

class ManagerView(viewsets.ModelViewSet):
    queryset = models.Manager.objects.all()
    serializer_class = serializers.ManagerSerializer

class TechTeamView(viewsets.ModelViewSet):
    queryset = models.TechTeam.objects.all()
    serializer_class = serializers.TechTeamSerializer

class ProjectView(viewsets.ModelViewSet):
    queryset = models.Project.objects.all()
    serializer_class = serializers.ProjectSerializer
