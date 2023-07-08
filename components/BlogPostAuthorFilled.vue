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
        :descriptionBelodsaadsw="descriptionBelow"
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
        setProperMode(width = 900) {
            if (window.innerWidth <= width) {
                this.descriptionBelow = true;
            } else {
                this.descriptionBelow = false;
            }
        },
    },
    async mounted() {
        window.addEventListener("resize", () => {
            this.setProperMode(900);
        });

        this.setProperMode(900);
    },
};
</script>
