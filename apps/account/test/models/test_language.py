from django.test import TestCase


from apps.account.models.language import Language


class LanguageTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        Language.objects.create(
            locale='English - Great Britain', language='English (en-GB)')

    def tearDown(self):
        Language.objects.all().delete()

    def test_locale_label(self):
        language = Language.objects.all().first()
        field_label = language._meta.get_field('locale').verbose_name
        self.assertEquals(field_label, 'locale')

    def test_language_label(self):
        language = Language.objects.all().first()
        field_label = language._meta.get_field('language').verbose_name
        self.assertEquals(field_label, 'language')

    def test_locale_max_length(self):
        language = Language.objects.first()
        max_length = language._meta.get_field('locale').max_length
        self.assertEquals(max_length, 100)

    def test_language_max_length(self):
        language = Language.objects.first()
        max_length = language._meta.get_field('language').max_length
        self.assertEquals(max_length, 100)

    # def test_string_representation_of_language_is_language_name(self):
    def test_object_name_is_locale_comma_language(self):
        language = Language.objects.first()
        expected_object_name = f'{language.locale}, {language.language}'
        self.assertEquals(expected_object_name, str(language))

    def test_get_absolute_url(self):
        language = Language.objects.first()
        # This will also fail if the urlconf is not defined.
        self.assertEquals(language.get_absolute_url(),
                          f'/api/languages/{language.id}/')
