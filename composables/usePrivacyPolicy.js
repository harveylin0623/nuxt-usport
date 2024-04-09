export const usePrivacyPolicy = () => {
  const { t } = useI18n()

  const privacyPolicy = ref({
    article_1: {
      title: t('privacy.1.title'),
      content: [
        t('privacy.1.content.1'),
        t('privacy.1.content.2'),
        t('privacy.1.content.3'),
        t('privacy.1.content.4')
      ]
    },
    article_2: {
      title: t('privacy.2.title'),
      content: [
        {
          details_title: t('privacy.2.content.1.title'),
          details_content: t('privacy.2.content.1.content')
        },
        {
          details_title: t('privacy.2.content.2.title'),
          details_content: t('privacy.2.content.2.content')
        },
        {
          details_title: t('privacy.2.content.3.title'),
          details_content: t('privacy.2.content.3.content')
        },
        {
          details_title: t('privacy.2.content.4.title'),
          details_content: t('privacy.2.content.4.content')
        },
        {
          details_title: t('privacy.2.content.5.title'),
          details_content: t('privacy.2.content.5.content')
        }
      ]
    },
    article_3: {
      title: t('privacy.3.title'),
      content: [
        t('privacy.3.content.1'),
        t('privacy.3.content.2'),
        t('privacy.3.content.3'),
        t('privacy.3.content.4'),
        t('privacy.3.content.5')
      ]
    },
    article_4: {
      title: t('privacy.4.title'),
      content: [
        t('privacy.4.content.1'),
        t('privacy.4.content.2'),
        t('privacy.4.content.3'),
        t('privacy.4.content.4'),
        t('privacy.4.content.5'),
        t('privacy.4.content.6')
      ]
    },
    article_5: {
      title: t('privacy.5.title'),
      content: [
        {
          details_title: t('privacy.5.content.1')
        },
        {
          details_title: t('privacy.5.content.2')
        },
        {
          details_title: t('privacy.5.content.3.title'),
          details_content: [
            t('privacy.5.content.3.content.a'),
            t('privacy.5.content.3.content.b'),
            t('privacy.5.content.3.content.c'),
            t('privacy.5.content.3.content.d'),
            t('privacy.5.content.3.content.e')
          ]
        }
      ]
    },
    article_6: {
      title: t('privacy.6.title'),
      content: [
        t('privacy.6.content.1'),
        t('privacy.6.content.2'),
        t('privacy.6.content.3'),
        t('privacy.6.content.4'),
        t('privacy.6.content.5')
      ]
    }

  })

  return { privacyPolicy }
}
