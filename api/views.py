from rest_framework import viewsets
from rest_framework.response import Response
from .models import Link, Group
from .serializers import LinkSerializer, GroupSerializer, DashboardSerializer


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class DashboardViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Group.objects.all()
        serializer = DashboardSerializer(queryset, many=True)
        return Response(serializer.data)
