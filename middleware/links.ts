export default defineNuxtRouteMiddleware(async (to, from) => {
    if (to.path.startsWith('/api/')) {
        return;
    }

    const { data } = await $fetch(`/api/links?url=${to.path}`).catch(() => { return { data: null } }) as any
    const link = data.links[0] ?? null

    to.meta.link = link

    const contentType = link?.contentType;

    if (!link.contentId) {
        throw createError({ statusCode: 404, message: 'Ta strona prowadzi do nikąd!' })
    }

    const responseCode = link?.httpResStatusCode;
    const responseLocation = link?.extraData?.responseLocation;

    if (contentType === 'INTERNAL_REDIRECTION') {
        return navigateTo(responseLocation, { redirectCode: responseCode });
    }

    if (contentType === 'EXTERNAL_REDIRECTION') {
        return navigateTo(responseLocation, { redirectCode: responseCode, external: true });
    }
})
