
import { ObserveVisibility } from 'vue-observe-visibility'

export default defineNuxtPlugin((app) => {
    app.vueApp.directive('observe-visibility', {
        beforeMount: (el: any, binding: any, vnode: any) => {
            vnode.context = binding.instance
            ObserveVisibility.bind(el, binding, vnode)
        },
        update: ObserveVisibility.update,
        unmounted: ObserveVisibility.unbind,
    } as any);
});
