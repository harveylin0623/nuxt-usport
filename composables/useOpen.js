export const useOpen = () => {
  const openNewsItem = (newItem) => {
    if (newItem.link_type === 'app') { return }

    const { link_type, book_id, hyperlink_url, title, release_starts_at, category_id } = newItem
    const router = useRouter()

    if (link_type === 'hyperlink') {
      window.open(hyperlink_url)
    } else if (link_type === 'book') {
      router.push({ path: `/new/${book_id}`, query: { title, release_starts_at, category_id } })
    }
  }

  return { openNewsItem }
}
