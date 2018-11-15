from django.db import models

# Create your models here.
class Task(models.Model):
  '''
  Task data structure:
  1 task id
  2 task start date
  3 task expire date
  4 task level (0: normal, 1: important, 2: urgent)
  5 task title
  6 task descript
  '''
  start_date = models.DateTimeField(auto_now_add=True)
  expire_date = models.DateTimeField(auto_now_add=True)
  level = models.IntegerField()
  title = models.CharField(max_length=255)
  description = models.CharField(max_length=255)