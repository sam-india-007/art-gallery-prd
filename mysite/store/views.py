from django.shortcuts import render

def home (request): 
    print(request.POST)
    return render(request, 'store/home.html')

def artwork (request):
    return render(request, 'store/artwork.html')

def memorabilia (request):
    return render(request, 'store/memorabilia.html')

def scale_models (request):
    return render(request, 'store/scale_models.html')