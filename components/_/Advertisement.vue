<script>
import { h } from 'vue'

export default {
    data () {
        return {
            show: true,
            key: Math.random(),
        }
    },
    watch: {
        '$route' (to, from) {
            if (this.$el && !this.$el.isConnected) {
                return
            }

            if (to.fullPath === from.fullPath) {
                return
            }

            if (to.path !== from.path) {
                if (this.isServer) {
                    return
                }
                this.show = false
                this.$nextTick(this.showAd)
            }
        }
    },
    mounted () {
        this.showAd()
    },
    methods: {
        showAd () {
            this.show = true

            setTimeout(() => {
                if (this.$el.innerHTML) {
                    return
                }

                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({})
                } catch (error) {
                    console.error(error)
                }
            }, 50)
        }
    },
    render () {
        return h(
            'ins',
            {
                class: ['adsbygoogle'],
                style: {
                    display: 'block',
                },
                'data-ad-client': 'ca-google',
                'data-ad-slot': null,
                'data-ad-format': 'auto',
                'data-ad-region': this.show ? 'page-' + Math.random() : null,
                'data-ad-layout': null,
                'data-ad-layout-key': null,
                'data-page-url': null,
                'data-analytics-uacct': null,
                'data-analytics-domain-name': null,
                'data-adtest': 'on',
                'data-adsbygoogle-status': this.show ? null : '',
                'data-full-width-responsive': false,
                // 'aria-label': 'advertisement',
                innerHTML: this.show ? '' : ' ',
                key: Math.random(),
            },
        )
    }
}
</script>