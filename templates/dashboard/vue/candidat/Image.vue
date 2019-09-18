<template>
    <div class="col s12 m7 l7">
        <img :src="candidat.url" alt="avatar_candidat" class="responsive-img">
    </div>
</template>

<script>
export default {
    props: ['candidat']
}
</script>
