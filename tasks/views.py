from django.shortcuts import render
from rest_framework import viewsets, permissions

from .models import Task
from .serializers import TaskSerializer
# Create your views here.

class TaskViewSet(viewsets.ModelViewSet):
  queryset = Task.objects.all()
  permission_classes = [permissions.AllowAny, ]
  serializer_class = TaskSerializer