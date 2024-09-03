from django.shortcuts import render
from . import models
from . import serializers
from rest_framework import viewsets
from django.http import JsonResponse
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
    
    http_method_names = ['get', 'post', 'put', 'head', 'options']

    def get(self, request, *args, **kwargs):
        return JsonResponse({'message': 'GET method'})

    def post(self, request, *args, **kwargs):
        return JsonResponse({'message': 'POST method'})

    def put(self, request, *args, **kwargs):
        return JsonResponse({'message': 'PUT method'})
    def options(self, request, *args, **kwargs):
        response = JsonResponse({'message': 'OPTIONS method'})
        response["Access-Control-Allow-Origin"] = "https://example.com"
        response["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
        response["Access-Control-Allow-Headers"] = "Content-Type, Authorization, X-Custom-Header"
        return response
