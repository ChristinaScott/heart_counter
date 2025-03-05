from django.urls import path
from . import views

urlpatterns = [
    path('hearts/', views.get_hearts, name='get_hearts'),
    path('increment-hearts/', views.increment_hearts, name='increment_hearts'),
]