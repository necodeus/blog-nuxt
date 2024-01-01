<template>
    <BlogPostAuthorLoading
        v-if="!Object.keys(profile).length"
        ref="target"
        :descriptionBelow="descriptionBelow"
    />
    <BlogPostAuthor
        v-else
        ref="target"
        :profile="profile"
        :descriptionBelow="descriptionBelow"
    />
</template>

<script lang="ts">
export default {
    props: {
        profile: {
            type: Object,
            required: true,
            default: () => {},
        },
    },
    data() {
        return {
            descriptionBelow: false,
        };
    },
    methods: {
        isMobile(width = 900) {
            return window.innerWidth <= width
        },
    },
    async mounted() {
        window.addEventListener("resize", () => {
            this.descriptionBelow = this.isMobile(900);
        });

        this.descriptionBelow = this.isMobile(900);
    },
};
</script>
