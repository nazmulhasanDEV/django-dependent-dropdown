from django.db import models

class Country(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return f'Country Name: {self.name}'

class State(models.Model):
    name = models.CharField(max_length=50)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)

    def __str__(self):
        return f'State name: {self.name} Country: {self.country}'


# chain dropdown
class CompanyOwner(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'Owner: {self.name}'

class Car(models.Model):
    name = models.CharField(max_length=40)
    owner = models.ForeignKey(CompanyOwner, on_delete=models.CASCADE)

    def __str__(self):
        return f'Country: {self.name}'

class Model(models.Model):
    mode_name = models.CharField(max_length=40)
    car       = models.ForeignKey(Car, on_delete=models.CASCADE)

    def __str__(self):
        return f'Car Model: {self.mode_name}'

