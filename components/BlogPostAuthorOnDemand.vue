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
const delay = (time: number | undefined) => new Promise(resolve => setTimeout(resolve, time));

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
        // const data = await (async () => {
        //     await delay(1000);
        //     return {
        //         name: "Dawid Smulewicz",
        //         description: "Forever ready to embrace the new, to confront the unfamiliar, I continue to sail the infinite seas of technology, steadfast in my pursuit of becoming more than I was yesterday.",
        //         image_uri: "https://avatars.githubusercontent.com/u/8481324?s=460&u=182e690c3d4efc71154ebb683e228c391459a3f3&v=4",
        //     }
        // })()

        this.profile = data || {} as any;

        window.addEventListener("resize", () => {
            this.setProperMode(900);
        });

        this.setProperMode(900);
    },
};
</script>
