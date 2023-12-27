

from django.urls import path
from .views import (
    technology_list,
    technology_detail,
    project_list,
    project_detail,
    profile_list,
    profile_detail,
    skill_list,
    skill_detail,
    language_list,
    language_detail,
)

urlpatterns = [
    path('technologies/', technology_list, name='technology-list'),
    path('technologies/<int:pk>/', technology_detail, name='technology-detail'),
    
    path('projects/', project_list, name='project-list'),
    path('projects/<int:pk>/', project_detail, name='project-detail'),
    
    path('profiles/', profile_list, name='profile-list'),
    path('profiles/<int:pk>/', profile_detail, name='profile-detail'),
    
    path('skills/', skill_list, name='skill-list'),
    path('skills/<int:pk>/', skill_detail, name='skill-detail'),
    
    path('languages/', language_list, name='language-list'),
    path('languages/<int:pk>/', language_detail, name='language-detail'),
]