

from rest_framework import serializers
from .models import Technology, Project, Profile, Skill, Language

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    skills = serializers.StringRelatedField(many=True)
    languages = serializers.StringRelatedField(many=True)

    class Meta:
        model = Profile
        fields = '__all__'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'