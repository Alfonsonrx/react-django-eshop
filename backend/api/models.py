from django.contrib.postgres.fields import ArrayField
from django.db import models

from model_utils.models import SoftDeletableModel, TimeStampedModel

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

# Create your models here.
class Category(TimeStampedModel, SoftDeletableModel):
    name = models.CharField(max_length=32)
    def __str__(self) -> str:
        return self.name
class Product(TimeStampedModel, SoftDeletableModel):
    title = models.CharField(max_length=32)
    price = models.IntegerField()
    description = models.TextField(max_length=500)
    images = ArrayField(
        models.ImageField(upload_to=upload_to, blank=True, null=True),
        blank=True, null=True
    )
    image = models.ImageField(upload_to=upload_to, blank=True, null=True)
    
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    
    def __str__(self) -> str:
        return self.title