from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('home_page.urls')), 
    path('api/', include('hearts_collector.urls'))
]
