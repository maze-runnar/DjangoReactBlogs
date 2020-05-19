from django.contrib import admin
from django.urls import path, include
from rest_framework_swagger.views import get_swagger_view 
from django.views.generic import TemplateView
schema_view = get_swagger_view(title="Aossie Scholar")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('articles.api.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
	path('', schema_view),
	path('accounts/', include('rest_framework.urls'))
]
