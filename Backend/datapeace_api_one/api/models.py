from django.db import models

# {
#     "id": 1,
#     "first_name": "James",
#     "last_name": "Butt",
#     "company_name": "Benton, John B Jr",
#     "city": "New Orleans",
#     "state": "LA",
#     "zip": 70116,
#     "email": "jbutt@gmail.com",
#     "web": "http://www.bentonjohnbjr.com",
#     "age": 70
#   },

# Create your models here.
class User(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    company_name =models.CharField(max_length=150)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=100)
    zip = models.IntegerField()
    email = models.EmailField(max_length=100)
    web = models.CharField(max_length=100)
    age = models.IntegerField()

