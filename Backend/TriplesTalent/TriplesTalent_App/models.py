from django.db import models

class Freelancer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, default = '')
    password = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10, blank = True, null = True)
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='Assets/profile_pics/', blank=True, null=True)
    skills = models.JSONField(default=list, blank=True, null = True) 

class Manager(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10, blank = True, null = True)
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='Assets/profile_pics/', blank=True, null=True)
     
class Client(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, default = '')
    password = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10, blank = True, null = True)
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='Assets/profile_pics/', blank=True, null=True)
    company = models.CharField(max_length=20, blank=True) 
    companyType = models.CharField(max_length = 20, blank = True)

class TechTeam(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, default = '')
    password = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=10, blank = True, null = True)
    email = models.EmailField(unique=True)
    profile_picture = models.ImageField(upload_to='Assets/profile_pics/', blank=True, null=True) 
    assigned_work = models.JSONField(default = list, blank = True, null = True)


class Project(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True, null = True, blank = True)
    deadline = models.TextField()
    posted_by = models.ForeignKey(Client, on_delete=models.CASCADE, related_name='projects_posted')
    assigned_with = models.ManyToManyField(Freelancer, related_name='assigned_with', null =  True, blank = True)
    skills_required = models.JSONField(default=list, null = True)
    status = models.CharField(max_length=50, choices=[
         ('open', 'Open'),
         ('assigned', 'Assigned'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('completed', 'Completed'),
         ('in_progress', 'In Progress'),
         ('completed', 'Completed'),
         ('closed', 'Closed')
     ])

    def __str__(self):
        return self.title
    
class Task(models.Model):
    STATUS_CHOICES = (
        ('assigned', 'Assigned'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected'),
        ('completed', 'Completed'),
    )
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='tasks')
    title = models.CharField(max_length=255)
    description = models.TextField()
    assigned_to = models.ForeignKey(Freelancer, on_delete=models.SET_NULL, null=True, related_name='tasks')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='assigned')
    deadline = models.DateField()

class Pricing(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE, related_name='pricing')
    total_cost = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.CharField(max_length=20, choices=(('unpaid', 'Unpaid'), ('paid', 'Paid')), default='unpaid')
    invoice_number = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return f"Pricing for {self.project.title} - {self.total_cost}"

# Approval Model
class Approval(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='approvals')
    freelancer = models.ForeignKey(Freelancer, on_delete=models.CASCADE, related_name='approvals')
    approved_by_client = models.BooleanField(default=False)
    approved_by_manager = models.BooleanField(default=False)

    # def __str__(self):
    #     return f"Approval for {self.project.title} - {self.freelancer.Freelancer.username}"
