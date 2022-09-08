from django.contrib import admin
from django.urls import path, include
from home import views
from django.views.generic import TemplateView
from home.views import index


urlpatterns = [ 
    path('',index.as_view(), name="home"),
    path('login',views.loginUser, name="login"),
    path('logout',views.logoutUser, name="logout"),
    # path('', TemplateView.as_view(template_name='index.html')),
]