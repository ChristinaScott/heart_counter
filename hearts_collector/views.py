from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import HeartCount

@require_http_methods(["GET"])
def get_hearts(request):
    print("get_hearts view called")  # Add this line
    heart_count, created = HeartCount.objects.get_or_create(pk=1)
    print(f"Heart count: {heart_count.count}") # add this line
    return JsonResponse({'totalHearts': heart_count.count})

@require_http_methods(["POST"])
def increment_hearts(request):
    heart_count, created = HeartCount.objects.get_or_create(pk=1)
    heart_count.count += 1
    heart_count.save()
    return JsonResponse({'totalHearts': heart_count.count})