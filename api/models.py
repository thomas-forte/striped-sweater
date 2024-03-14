from django.db import models


class Group(models.Model):
    text = models.CharField(max_length=50)
    icon = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.text


class Link(models.Model):
    text = models.CharField(max_length=50)
    description = models.CharField(max_length=140)
    icon = models.CharField(max_length=50)
    href = models.TextField()
    group = models.ForeignKey(Group, on_delete=models.PROTECT, null=True, related_name="links")

    def __str__(self) -> str:
        return self.text
