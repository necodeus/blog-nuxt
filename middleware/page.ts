export default defineNuxtRouteMiddleware(async (to, from) => {
    const { data, pending } = await useFetch<any>(`/api/_page?path=${to.path}`)

    if (!data.value?.page.id) {
        throw createError({
            statusCode: 404,
            statusMessage: 'PAGE NOT FOUND',
        })
    }

    const $store = useNuxtApp()

    $store.$requestData = data.value
    $store.$requestDataPending = pending.value
})
