from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # takes care of all files starting with ''
    path('api/', include('api.urls')),
]
