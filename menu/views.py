from django.shortcuts import render
from django.views import View

class MenuView(View):
    template_name = 'menu/home.html'

    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)