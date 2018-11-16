from rest_framework import serializers

from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
        'id', 
        'startDate', 
        'expireDate',
        'level',
        'title',
        'description'
      )