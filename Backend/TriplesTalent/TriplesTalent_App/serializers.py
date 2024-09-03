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

class ManagerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Manager
        fields = '__all__'

class TechTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TechTeam
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    posted_by = ClientSerializer()
    assigned_with = FreelancerSerializer()
    class Meta:
        model = models.Project
        fields = '__all__'

