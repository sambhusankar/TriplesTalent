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
def Welcome(request):
    return 'sanar'