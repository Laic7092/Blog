import { createContentLoader } from 'vitepress'

interface Post {
    title: string
    url: string
    date: {
        time: number
        string: string
    }
    location: string
    tags: Array<string>
    excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/**/*.md', {
    excerpt: true,
    transform(raw): Post[] {
        return raw
            .filter(({ frontmatter }) => !frontmatter.hidden)
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title,
                url,
                excerpt: excerpt || "<p>点击上方链接查看</p>",
                tags: frontmatter.tags,
                location: frontmatter.location,
                date: formatDate(frontmatter.date)
            }))
            .sort((a, b) => b.date.time - a.date.time)
    }
})

function formatDate(raw: string): Post['date'] {
    const date = new Date(raw)
    date.setUTCHours(8)
    return {
        time: +date,
        string: date.toLocaleDateString('zh-CN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }
}