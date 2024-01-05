from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail

@api_view(['POST'])
def contact_form(request):
    if request.method == 'POST':
        name = request.data.get('name', '')
        email = request.data.get('email', '')
        user_message = request.data.get('userMessage', '')

        # Отправка сообщения на вашу электронную почту
        send_mail(
            'Новое сообщение от пользователя',
            f'Имя: {name}\nEmail: {email}\nСообщение: {user_message}',
            'aleksandrov.pavel93@mail.ru',
            ['aleksandrov.pavel93@mail.ru'],
            fail_silently=False,
        )

        return Response({'message': 'Спасибо! Ваше сообщение отправлено.'}, status=status.HTTP_200_OK)
    else:
        return Response({'message': 'Недопустимый метод запроса.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)