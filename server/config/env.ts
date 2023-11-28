export const COMMON_API_URL = process.env.NUXT_PUBLIC_COMMON_API_URL || 'http://common-api.localhost/api/v1'
export const PAPER_API_URL = process.env.NUXT_PUBLIC_PAPER_API_URL || 'http://paper-api.localhost/api/v1'
export const IMAGES_URL = process.env.NUXT_PUBLIC_IMAGES_URL || 'http://images.localhost'

console.log('API', {
    COMMON_API_URL,
    PAPER_API_URL,
    IMAGES_URL,
})
