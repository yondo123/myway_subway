from django.db import models

class Menu(models.Model):

    SANDWICH = 'SW'
    TOPPING = 'TP'
    SIDE_MENU = 'SM'
    DRINK = 'DR'

    MENU_CATEGORIES = (
        (SANDWICH, '샌드위치'),
        (TOPPING, '토핑'),
        (SIDE_MENU, '사이드'),
        (DRINK, '음료'),
    )

    title = models.CharField(max_length=30, default='서브웨이')
    image = models.ImageField(upload_to='images/')
    introduction = models.TextField(default='설명 없음')
    category = models.CharField(
        max_length=2,
        choices=MENU_CATEGORIES,
        default=SANDWICH,
    )
    
    def __str__(self):
        return self.title