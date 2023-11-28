export const COMMON_API_URL = process.env.COMMON_API_URL || 'http://common-api.localhost/api/v1'
export const PAPER_API_URL = process.env.PAPER_API_URL || 'http://paper-api.localhost/api/v1'
export const IMAGES_URL = process.env.IMAGES_URL || 'http://images.localhost'

console.log('NODE_ENV', process.env)
console.log('COMMON_API_URL', COMMON_API_URL)
console.log('PAPER_API_URL', PAPER_API_URL)
console.log('IMAGES_URL', IMAGES_URL)
