from django.shortcuts import render
from . import models
from .serializers import ClientSerializer
from rest_framework import viewsets
# Create your views here.
class ClientView(viewsets.ModelViewSet):
    queryset = models.Client.objects.all()
    serializer_class = ClientSerializer

def Welcome(request):
    return 'sanar'