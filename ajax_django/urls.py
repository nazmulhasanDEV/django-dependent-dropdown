from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^index/$', views.index, name='index'),

    url(r'^base/$', views.base, name='base'),

    url(r'^home/$', views.home, name='home'),

    url(r'^json/response/$', views.json_response, name='jsonResponse'),

#     chain dropdown url
    url(r'^chain/base/$', views.chain_base, name='chainDropdown'),
    url(r'^chain/index/$', views.chain_index, name='chainIndex'),

]
