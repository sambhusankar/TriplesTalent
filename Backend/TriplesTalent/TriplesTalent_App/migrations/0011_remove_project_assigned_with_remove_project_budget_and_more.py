# Generated by Django 5.0.6 on 2024-09-10 15:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('TriplesTalent_App', '0010_alter_project_skills_required'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='assigned_with',
        ),
        migrations.RemoveField(
            model_name='project',
            name='budget',
        ),
        migrations.RemoveField(
            model_name='project',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='project',
            name='deadline',
        ),
        migrations.RemoveField(
            model_name='project',
            name='posted_by',
        ),
        migrations.RemoveField(
            model_name='project',
            name='skills_required',
        ),
        migrations.RemoveField(
            model_name='project',
            name='status',
        ),
        migrations.RemoveField(
            model_name='project',
            name='updated_at',
        ),
    ]
