from django.shortcuts import render
from .utils import detect_eyes

def eye_detection_view(request):
    image_path = 'C:\Users\ashar\Desktop\Aankhe\frontend\src\images\image.jpg'

    # calling detect eye to get coordinates
    eyes_coordinates = detect_eyes(image_path)

    # rendering 
    context = {'eyes_coordinates': eyes_coordinates}

    return render(request, 'eye_detection.html', context)