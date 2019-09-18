<template>
    <div class="col s12 m5 l5">
        <h5>{{ candidature.id_candidat.prenom }} {{ candidature.id_candidat.nom }}</h5>
        <hr>            
    </div>
</template>

<script>
export default {
    props: ['candidature']
}
</script>
