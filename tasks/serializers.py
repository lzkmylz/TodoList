from rest_framework import serializers

from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = (
        'id', 
        'start_date', 
        'expire_date',
        'level',
        'title',
        'description'
      )
    