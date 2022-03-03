from django.urls import path
from django.contrib.auth import views as auth_view




urlpatterns = [
    path('',auth_view.LoginView.as_view(template_name='Detection/login.html'),name='users-login'),
    # path('logout/',auth_view.LogoutView.as_view(template_name='users/logout.html'),name='users-logout'),

]