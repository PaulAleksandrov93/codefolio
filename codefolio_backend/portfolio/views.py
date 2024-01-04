

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Technology, Project, Profile, Skill, Language, ProjectImage
from .serializers import (
    TechnologySerializer,
    ProjectSerializer,
    ProfileSerializer,
    SkillSerializer,
    LanguageSerializer,
    ProjectImageSerializer,
)

@api_view(['GET'])
def technology_list(request):
    technologies = Technology.objects.all()
    serializer = TechnologySerializer(technologies, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def technology_detail(request, pk):
    try:
        technology = Technology.objects.get(pk=pk)
    except Technology.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = TechnologySerializer(technology)
    return Response(serializer.data)

@api_view(['GET'])
def project_list(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def project_detail(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ProjectSerializer(project)
    return Response(serializer.data)

@api_view(['GET'])
def project_images(request, pk):
    try:
        project = Project.objects.get(pk=pk)
    except Project.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    images = ProjectImage.objects.filter(project=project)
    serializer = ProjectImageSerializer(images, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def profile_list(request):
    profiles = Profile.objects.all()
    serializer = ProfileSerializer(profiles, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def profile_detail(request, pk):
    try:
        profile = Profile.objects.get(pk=pk)
    except Profile.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = ProfileSerializer(profile)
    return Response(serializer.data)

@api_view(['GET'])
def skill_list(request):
    skills = Skill.objects.all()
    serializer = SkillSerializer(skills, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def skill_detail(request, pk):
    try:
        skill = Skill.objects.get(pk=pk)
    except Skill.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = SkillSerializer(skill)
    return Response(serializer.data)

@api_view(['GET'])
def language_list(request):
    languages = Language.objects.all()
    serializer = LanguageSerializer(languages, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def language_detail(request, pk):
    try:
        language = Language.objects.get(pk=pk)
    except Language.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = LanguageSerializer(language)
    return Response(serializer.data)