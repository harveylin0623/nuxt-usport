export const useMenuList = () => {
  const { t } = useI18n()

  const menuPcList = ref([
    {
      title: t('seo.pageTitle.news'),
      url: '/news',
      external: false,
      target: '_self'
    },
    {
      title: t('seo.pageTitle.faq'),
      url: '/faqPc',
      external: false,
      target: '_self'
    },
    {
      title: t('seo.pageTitle.privacy'),
      url: '/privacy',
      external: false,
      target: '_self'
    },
    {
      title: t('seo.pageTitle.buyer-apply'),
      url: 'https://lihi.cc/O4tVR',
      external: true,
      target: '_blank'
    }
  ])

  const menuMobileList = ref([
    {
      title: t('seo.pageTitle.news'),
      url: '/news',
      external: false,
      target: '_self'
    },
    {
      title: t('seo.pageTitle.faq'),
      url: '/faqMobile',
      external: false,
      target: '_self'
    },
    {
      title: t('seo.pageTitle.privacy'),
      url: '/privacy',
      external: false,
      target: '_self'
    },
    {
      title: t('seo.pageTitle.buyer-apply'),
      url: 'https://lihi.cc/O4tVR',
      external: true,
      target: '_blank'
    }
  ])

  return { menuPcList, menuMobileList }
}
