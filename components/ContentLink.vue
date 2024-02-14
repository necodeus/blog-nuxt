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
    const hashEl = document.getElementById(id)

    if (!hashEl) {
        console.warn(`Element with id "${id}" not found`)
        return
    }

    const parent = findLongestScrollableParent(hashEl)

    if (!parent) {
        console.warn(`No scrollable parent found for element with id "${id}"`)
        return
    }

    setTimeout(() => {
        parent.scrollTo({
            top: hashEl.offsetTop + hashEl.parentElement.offsetTop,
            behavior: 'smooth',
        })
    }, 10);
}
</script>
