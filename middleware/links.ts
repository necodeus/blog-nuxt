const findLongestScrollableParent = (el: any) => {
    let parent = el.parentElement
    while (parent) {
        if (parent.scrollHeight > parent.clientHeight) {
            return parent
        }
        parent = parent.parentElement
    }
    return document.documentElement
}

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path.startsWith('/api/')) {
        return
    }

    // TODO: Taka obsługa hashów nie wygląda zbyt dobrze.
    // Do poprawy w przyszłości.
    if (to.hash !== from.hash && to.hash !== '') {
        if (to.hash === '#comments') {
            const commentsEl = document.getElementById('comments')

            if (!commentsEl) {
                return
            }

            const parent = findLongestScrollableParent(commentsEl)

            setTimeout(() => {
                parent.scrollTo({
                    top: commentsEl?.offsetTop,
                    behavior: 'smooth',
                });
            }, 10);
        }
    }

    if (to.hash !== from.hash) {
        return
    }

    const { data } = await useFetch(`/api/pages?url=${to.path}`) as any

    if (!data.value.page) {
        throw createError({
            statusCode: 500,
            message: 'Coś poszło nie tak!',
        })
    }

    to.meta.content_type = data.value.page.content_type

    switch (data.value.page.content_type) {
        case 'POST':
            to.meta.content_id = data.value.page.content_id
            return
        case 'REDIRECTION':
            to.meta.content_id = data.value.page.content_id
            const { data: r2 } = await useFetch(`/api/redirections/${to.meta.content_id}`) as any
            const { data: { redirection } } = unref(r2)

            const { link, code, is_external } = redirection

            return navigateTo(link, {
                redirectCode: code,
                external: is_external,
            })
        default:
            throw createError({
                statusCode: 404,
                message: 'Ta strona prowadzi do nikąd!'
            })
    }
})
