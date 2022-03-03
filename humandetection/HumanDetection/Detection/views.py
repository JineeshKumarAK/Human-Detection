from django.shortcuts import render

# Create your views here.

def display(request):
    return render(request, 'Detection/index.html')
def home(request):
    return render(request, 'Detection/home.html')
