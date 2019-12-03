from rest_framework.test import APITestCase


from django.contrib.auth.models import User
from apps.account.test.config import BACKEND_URL
from rest_framework.test import APIClient

client = APIClient()


class GeneralApiTest(APITestCase):
    def setUp(self):
        login_test_user_in(self)

    def test_logout(self):
        self.client.logout()

    def test_should_prevent_unauthenticated_users_to_access_api(self):
        response = self.client.get(BACKEND_URL)
        self.assertEqual(response.status_code, 401)

    # def test_should_allow_authenticated_users_to_view_api(self):
    #    login_test_user_in(self)
    #    response = self.client.get(BACKEND_URL)
    #    self.assertEqual(response.status_code, 200)


def login_test_user_in(test_case):
    User.objects.create_superuser(
        username='test', email='some@email.com', password='test')
    client.login(username='test', password='test')
