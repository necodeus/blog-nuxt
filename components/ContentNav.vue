<template>
    <ul class="content-nav" v-if="items.length">
        <li v-for="(item, i) in items" :key="i">
            <ContentLink :id="item.id">{{ item.title }}</ContentLink>
        </li>
    </ul>
</template>

<script setup>
defineProps({
    items: {
        type: Array,
        required: true,
        default: () => [],
    },
})
</script>

<style scoped>
.content-nav {
    background-color: #eee;
    border-radius: 7px;
    color: gray;
    padding: 20px 30px;
    font-size: 18px;
    line-height: 35px;
}

.content-nav li:not(:last-child) {
    margin-bottom: 10px;
}

.content-nav li {
    list-style: none;
    counter-increment: item;
    position: relative;
}

.content-nav li > *::before {
    content: counter(item) '. ';
}

.content-nav li > * {
    display: block;
}
</style>
