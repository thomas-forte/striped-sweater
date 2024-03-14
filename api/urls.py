from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register("links", views.LinkViewSet, basename="link")
router.register("groups", views.GroupViewSet, basename="group")
router.register("dashboard", views.DashboardViewSet, basename="dashboard")

urlpatterns = [
    path("", include(router.urls)),
]
