from django.contrib import admin
from django.urls import path, include
from home import views
#from django.views.generic import TemplateView


urlpatterns = [ 
    path('',views.index, name="home"),
    path('login',views.loginUser, name="login"),
    path('logout',views.logoutUser, name="logout"),
    #path('notes', TemplateView.as_view(template_name='index.html')),
]
