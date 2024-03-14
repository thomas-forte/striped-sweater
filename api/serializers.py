from rest_framework import serializers
from .models import Link, Group


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = [
            "id",
            "text",
            "description",
            "icon",
            "href",
            "group",
        ]


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = [
            "id",
            "text",
            "icon",
        ]


class DashboardLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = [
            "id",
            "text",
            "description",
            "icon",
            "href",
        ]


class DashboardSerializer(serializers.ModelSerializer):
    links = DashboardLinkSerializer(many=True)

    class Meta:
        model = Group
        fields = [
            "id",
            "text",
            "icon",
            "links",
        ]
        read_only_fields = [
            "id",
            "text",
            "icon",
            "links",
        ]

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass
