export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path.startsWith('/api/')) {
        return;
    }

    // przydałoby się wysyłać zapytanie po listę wpisów (w zakładce "inne artykuły")

    // może robić to na etapie głównego komponentu aplikacji?
    const { data: r1 } = await useFetch(`/api/pages?url=${to.path}`) as any

    const { data: { page } } = unref(r1)

    if (!page) {
        throw createError({
            statusCode: 500,
            message: 'Coś poszło nie tak!'
        })
    }

    switch (page.content_type) {
        case 'POST':
            to.meta.content_id = page.content_id
            return;
        case 'REDIRECTION':
            const { data: r2 } = await useFetch(`/api/redirections/${page.content_id}`) as any
            const { data: { redirection } } = unref(r2)

            const { link, code, is_external } = redirection

            return navigateTo(link, {
                redirectCode: code,
                external: is_external,
            });
    }

    throw createError({
        statusCode: 404,
        message: 'Ta strona prowadzi do nikąd!'
    })
})
