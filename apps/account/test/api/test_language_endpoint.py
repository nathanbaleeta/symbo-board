from rest_framework.test import APITestCase, APIClient, APIRequestFactory
from rest_framework.status import HTTP_200_OK, HTTP_403_FORBIDDEN, HTTP_201_CREATED, HTTP_301_MOVED_PERMANENTLY, \
    HTTP_204_NO_CONTENT
from apps.account.test.config import BACKEND_URL

from apps.account.models.language import Language

ENDPOINT_URL = BACKEND_URL + 'languages/'

client = APIClient()
factory = APIRequestFactory()


class LanguageEndpointTest(APITestCase):
    def setUp(self):
        super(LanguageEndpointTest, self).setUp()
        Language.objects.all().delete()

    def test_api_language_creation(self):
        data = {'locale': 'English - Great Britain',
                'language': 'English (en-GB)'}
        # Create a JSON POST request
        request = factory.post(
            ENDPOINT_URL, data, format='json')
