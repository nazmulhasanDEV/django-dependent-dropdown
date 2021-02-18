from django.shortcuts import render, redirect, get_object_or_404
from django.http import JsonResponse
from time import time
from .models import *
from django.http import JsonResponse
import json

def index(request):

    text = request.GET.get('button_txt')
    txt = request.POST.get('txt')
    print(txt)
    if request.is_ajax():
        t = time()
        res = f'I have got you {txt}'
        return JsonResponse({'dataa':"t", 'res':"res"}, status=200)


    return render(request, 'index.html')


def base(request):

    return render(request, 'select_drop/base.html')

def home(request):

    val = request.GET.get('val')

    cntry_name = Country.objects.all()
    # specific_cntry_name = Country
    state_name = list(State.objects.filter(country=val).values())

    print(val)
    print(state_name)

    if request.is_ajax():
        return JsonResponse({"data":val, "state_name":state_name})

    context = {
        'country': cntry_name,
    }
    return  render(request, 'select_drop/home.html', context)

def json_response(request):
    country = list(Country.objects.all())
    return JsonResponse({'data':country})


# chain dropdown
def chain_base(request):
    return render(request, 'chaining_dropdown/base.html')

def chain_index(request):

    owner_model = CompanyOwner.objects.all()

    owner_name = request.GET.get('owner_name')
    selected_car = request.GET.get('selected_car')

    car_by_owner = list(Car.objects.filter(owner=owner_name).values())

    car_by_model = list(Model.objects.filter(car=selected_car).values())

    if request.is_ajax():
        return JsonResponse({'car_by_owners':car_by_owner, 'car_by_model':car_by_model})

    context = {
        'owner_model': owner_model,
    }

    return render(request, 'chaining_dropdown/index.html', context)
