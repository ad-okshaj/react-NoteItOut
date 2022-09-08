from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import logout, authenticate, login
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.decorators.cache import cache_control
from django.views.decorators.cache import never_cache
from django.contrib.auth.decorators import login_required

# password for test user is Harry$$$***000
# Create your views here.

# def index(request):
#     print(request.user)
#     if request.user.is_anonymous:
#         return redirect("/login") 

class index(LoginRequiredMixin, TemplateView):
    login_url = 'login'
    redirect_field_name = 'login'
    template_name = "index.html"
        

@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def loginUser(request):
    if request.user.is_authenticated:
        return redirect("/")
    username = request.POST.get('username') 
    password = request.POST.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return redirect("/")
    else:
        return render(request, 'login.html')

@cache_control(no_cache=True, must_revalidate=True, no_store=True)
def logoutUser(request):
    logout(request)
    return redirect("/login")