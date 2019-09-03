<template>
    <div id="details" class="hide">
        <p>{{ user.username }}</p>
        <p>{{ user.created_on }}</p>
    </div>
</template>

<script>
export default {
    props: ['user']
}
</script>