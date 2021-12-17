
from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',views.UserList.as_view()),
    path('api/<int:pk>',views.UserRUD.as_view()),
    # path('save/',views.put_data),
]
