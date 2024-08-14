from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10, unique=True)
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='Assets/profile_pics/', blank=True, null=True)
    skills = models.JSONField(default=list, blank=True) 


    def __str__(self):
        return self.username

class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    deadline = models.DateField()
    posted_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects_posted')
    status = models.CharField(max_length=50, choices=[
        ('open', 'Open'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
        ('closed', 'Closed')
    ])

    def __str__(self):
        return self.title
