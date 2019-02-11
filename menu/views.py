from django.shortcuts import render
from django.views import View
from .models import Menu

class MenuView(View):

    template_name = 'menu/home.html'

    def get(self, request, *args, **kwargs):
        menus = Menu.objects.all()
        context = {'menus': menus}
        return render(request, self.template_name, context)