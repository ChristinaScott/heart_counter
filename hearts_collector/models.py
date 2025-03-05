from django.db import models

# Create your models here.
from django.db import models

class HeartCount(models.Model):
    count = models.IntegerField(default=0)

    def __str__(self):
        return f"Heart Count: {self.count}"