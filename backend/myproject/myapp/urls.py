from django.urls import path
from .views import register_patient

urlpatterns = [
    path('register_patient/', register_patient, name='register_patient'),
]