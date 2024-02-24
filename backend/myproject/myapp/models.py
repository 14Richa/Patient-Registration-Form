from django.db import models

class Patient(models.Model):
    name = models.CharField(max_length=100)
    birthdate = models.DateField(verbose_name="Date of Birth", default="1900-01-01")
    GENDER_CHOICES = [
    ('Unspecified', 'Prefer not to say'),
    ('Male', 'Male'),
    ('Female', 'Female'),
    ]
    gender = models.CharField(max_length=12, choices=GENDER_CHOICES, default='Unspecified', verbose_name="Gender")
    
    

    def __str__(self):
        return self.name