# Generated by Django 2.1.5 on 2019-02-11 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='menu',
            name='category',
            field=models.CharField(choices=[('SW', '샌드위치'), ('TP', '토핑'), ('SM', '사이드'), ('DR', '음료')], default='SW', max_length=2),
        ),
    ]
