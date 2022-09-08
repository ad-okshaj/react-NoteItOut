from django.contrib import admin
from django.urls import path, include
from home import views
from django.views.generic import TemplateView
from home.views import index
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import cache_control


urlpatterns = [ 
    path('',cache_control(no_cache=True, must_revalidate=True, no_store=True)
(index.as_view()), name="home"),
    path('login',cache_control(no_cache=True, must_revalidate=True, no_store=True)(views.loginUser), name="login"),
    path('logout',cache_control(no_cache=True, must_revalidate=True, no_store=True)(views.logoutUser), name="logout"),
    #path('', login_required(TemplateView.as_view(template_name='index.html'))),
]