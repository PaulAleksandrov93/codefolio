

from django.db import models

class Technology(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    technologies = models.ManyToManyField(Technology)
    image = models.ImageField(upload_to='project_images/')
    repository_link = models.URLField()
    live_link = models.URLField()

    STATUS_CHOICES = [
        ('developing', 'В разработке'),
        ('completed', 'Завершен'),
        ('paused', 'Приостановлен'),
    ]

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='developing',
    )

    def __str__(self):
        return self.title

class Profile(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField()
    bio = models.TextField(blank=True, null=True)
    resume_link = models.URLField(blank=True, null=True)
    linkedin_profile = models.URLField(blank=True, null=True, verbose_name="LinkedIn профиль")
    github_profile = models.URLField(blank=True, null=True, verbose_name="GitHub профиль")
    twitter_profile = models.URLField(blank=True, null=True, verbose_name="Twitter профиль")
    telegram_username = models.CharField(max_length=50, blank=True, null=True, verbose_name="Telegram")
    skills = models.ManyToManyField('Skill', blank=True, verbose_name="Навыки")
    languages = models.ManyToManyField('Language', blank=True, verbose_name="Языки программирования")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class Skill(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Language(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name