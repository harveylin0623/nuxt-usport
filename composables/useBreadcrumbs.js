export const useBreadcrumbs = () => {
  const { t } = useI18n()

  const newsBreadcrumbs = ref([
    { path: '/', title: t('seo.pageTitle.home') },
    { path: '/news', title: t('seo.pageTitle.news') }
  ])

  const privacyBreadcrumbs = ref([
    { path: '/', title: t('seo.pageTitle.home') },
    { path: '/privacy', title: t('seo.pageTitle.privacy') }
  ])

  return { newsBreadcrumbs, privacyBreadcrumbs }
}
