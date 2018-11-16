from django.conf.urls import include, url
from rest_framework import routers

from .views import TaskViewSet

router = routers.DefaultRouter()
router.register('tasks', TaskViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]