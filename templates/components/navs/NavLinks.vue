<template>
<ul :id="navId" :class="navClass">
    <li v-for="link in links" :key="link.id">
        <a :href="link.href">{{ link.name }}</a>
    </li>
</ul>
</template>

<script>
export default {
    props: ['links', 'navClass', 'navId']
}
</script>
