from django.urls import path
from . import views

urlpatterns = [
    path('detect-eyes/', views.eye_detection_view, name='detect_eyes')
    # Add more URLs as needed for other functionalities
]
