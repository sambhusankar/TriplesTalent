# Generated by Django 5.0.6 on 2024-08-29 16:32

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TriplesTalent_App', '0006_project_skills_required_alter_project_updated_at'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='assigned_with',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='assigned_with', to='TriplesTalent_App.freelancer'),
        ),
    ]
