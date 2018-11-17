# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='isFinish',
            field=models.CharField(default='0', max_length=255),
            preserve_default=False,
        ),
    ]
