from rest_framework import serializers
from . import models

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Client
        fields = '__all__'

class FreelancerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Freelancer
        fields = '__all__'