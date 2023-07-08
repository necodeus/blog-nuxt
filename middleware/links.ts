export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path.startsWith('/api/')) {
        return;
    }

    const { data: link } = await $fetch(`/api/links?url=${to.path}`).catch(() => { return { data: null } }) as any
    to.meta.link = link

    const contentType = link?.data?.content_type;

    if (!link?.data) {
        throw createError({ statusCode: 404, message: 'Ta strona prowadzi do nikąd!' })
    }

    const responseCode = link?.data?.response_code;
    const responseLocation = link?.data?.response_location;

    if (contentType === 'INTERNAL_REDIRECTION') {
        return navigateTo(responseLocation, { redirectCode: responseCode });
    }

    if (contentType === 'EXTERNAL_REDIRECTION') {
        return navigateTo(responseLocation, { redirectCode: responseCode, external: true });
    }
})
