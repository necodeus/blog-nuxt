export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp()

    if (process.server) {
        const { data, pending } = await useFetch<any>(`/api/_page?path=${to.path}`)

        nuxtApp.$requestData = data
        nuxtApp.$requestDataPending = pending
    } else {
        const { data, pending } = useFetch<any>(`/api/_page?path=${to.path}`)

        nuxtApp.$requestData = data
        nuxtApp.$requestDataPending = pending
    }
})
