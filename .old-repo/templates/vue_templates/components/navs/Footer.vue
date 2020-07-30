<template>
    <footer class="page-footer red darken-1">
        <!-- <div class="container">
            <div class="row">
                <div class="col s12 m4 l4">
                    <h5>Entreprise</h5>
                    <p><a href="#!" target="_blank">Diffuser une offre</a></p>
                    <p><a href="#!" target="_blank">Lancer sa boîte</a></p>
                </div>

                <div class="col s12 m4 l4">
                    <h5>Candidat</h5>
                    <p><a href="#!" target="_blank">Candidater à une offre</a></p>
                    <p><a href="#!" target="_blank">Chercher des offres</a></p>
                </div>
            </div>
        </div> -->
        <div class="footer-copyright">
            {{ getCurrentYear }} @ Bwaloca
        </div>
    </footer>
</template>

<script>
export default {
    computed: {
        getCurrentYear() {
            var currentDate = new Date()
            return currentDate.getFullYear()
        }
    }
}
</script>

