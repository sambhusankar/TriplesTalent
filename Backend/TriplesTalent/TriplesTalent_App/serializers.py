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
    # posted_by = ClientSerializer()  # Keep nested read-only for GET requests
    posted_by = serializers.PrimaryKeyRelatedField(queryset=models.Client.objects.all())
    assigned_with = serializers.PrimaryKeyRelatedField(
        queryset=models.Freelancer.objects.all(),
        many=True,
        required=False
    )
    class Meta:
        model = models.Project
        fields = '__all__'

