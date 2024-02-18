export default defineNuxtRouteMiddleware(async (to, from) => {
    const nuxtApp = useNuxtApp()

    const { data, pending } = useFetch<any>(`/api/_page?path=${to.path}`)

    nuxtApp.$requestData = data
    nuxtApp.$requestDataPending = pending
})
