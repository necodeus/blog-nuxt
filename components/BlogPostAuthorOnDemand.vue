<template>
    <BlogPostAuthorLoading
        v-if="!loadProfile || !Object.keys(profile).length"
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
        loadProfile: {
            type: Boolean,
            required: false,
        },
    },
    data() {
        return {
            profile: {},
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
        const data = await fetch(`/api/profiles/3/details`).then((res) => res.json());

        this.profile = data || {} as any;

        window.addEventListener("resize", () => {
            this.setProperMode(900);
        });

        this.setProperMode(900);
    },
};
</script>
