from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')), # takes care of all files starting with ''
    #<-----atmaa routes start ---->
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/', include('accounts.urls')), # new
    path('',include('home.urls')),
    #<-----atmaa routes end ----->
    #path('', TemplateView.as_view(template_name='index.html')),
]
