from . import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

app_name = 'store'

urlpatterns = [
    path('', views.home, name='home'),
    path('artwork/', views.artwork, name='artwork'),
    path('memorabilia/', views.memorabilia, name='memorabilia'),
    path('scale_models/', views.scale_models, name='scale_models'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)