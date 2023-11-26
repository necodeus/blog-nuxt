export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('observe-visibility', {
        mounted(el, binding) {
            if (typeof IntersectionObserver === 'undefined') {
                console.error('IntersectionObserver API is not available in your browser.')
                return
            }

            const observer = new IntersectionObserver((entries: any, observer: any): any => {
                const isVisible = entries.some((entry: any) => entry.isIntersecting)
                binding.value(isVisible, (text: any) => {
                    observer.disconnect()
                })
            }, {
                threshold: binding.arg || 0
            } as any);

            observer.observe(el);

            el._vue_visibilityObserver = observer;
        },
        unmounted(el) {
            if (el._vue_visibilityObserver) {
                el._vue_visibilityObserver.disconnect();
            }
        }
    });
});