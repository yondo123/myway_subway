from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def results(request):
    return render(request, 'results.html')