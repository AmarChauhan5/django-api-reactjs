from django.http import HttpResponse
from .models import User
from .serializers import UserSerializer
from .mypagination import MyPagination
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from rest_framework.filters import SearchFilter,OrderingFilter
import requests

class UserList(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    pagination_class= MyPagination
    filter_backends = [SearchFilter,OrderingFilter]
    ordering_fields = ['age']
    search_fields = ['$first_name']

class UserRUD(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# def put_data(request):
#     r = requests.get("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json")
#     # print("R :",r)
#     data = r.json()
#     print(len(data[100:]))
#     # print(data[50].get('last_name'))
#     # print(data[50].get('company_name'))
#     # print(data[50].get('city'))
#     # print(data[50].get('state'))
#     # print(data[50].get('zip'))
#     # print(data[50].get('email'))
#     # print(data[50].get('web'))
#     # print(data[50].get('age'))
#     for details in data[20:]:
#         print("Data :",details.get('first_name')) 
#         reg = User(
#             first_name=details.get('first_name'),
#         last_name=details.get('last_name'),
#         company_name= details.get('company_name'),
#         city= details.get('city'),
#         state= details.get('state'),
#         zip=details.get('zip'),
#         email= details.get('email'),
#         web= details.get('web'),
#         age= details.get('age')
#         )
#         reg.save()
#     print("Data Saved")
#     return HttpResponse("Data Saved")
