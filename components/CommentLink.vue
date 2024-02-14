<template>
    <div @click="scrollTo(id)" class="cursor-pointer">
        <slot></slot>
    </div>
</template>

<script setup>
defineProps({
    id: {
        type: String,
        required: true,
    },
})

const findLongestScrollableParent = (el) => {
    let parent = el.parentElement

    while (parent) {
        if (parent.scrollHeight > parent.clientHeight) {
            return parent
        }
        parent = parent.parentElement
    }

    return document.documentElement
}

const scrollTo = (id) => {
    const commentsEl = document.getElementById('comments')

    if (!commentsEl) {
        return
    }

    const parent = findLongestScrollableParent(commentsEl)

    if (!parent) {
        return
    }

    setTimeout(() => {
        parent.scrollTo({
            top: commentsEl?.offsetTop,
            behavior: 'smooth',
        });
        // parent.scrollTo({
        //     top: hashEl.offsetTop + hashEl.parentElement.offsetTop,
        //     behavior: 'smooth',
        // })
    }, 10);
}
</script>
