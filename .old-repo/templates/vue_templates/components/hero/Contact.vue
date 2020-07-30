<template>
<section class="section section-contact scrollspy" id="contact">
    <div class="container">
        <div class="row">
            <div class="col s12 m6">
                <div class="card-panel red darken-1 white-text center">
                    <i class="material-icons medium">email</i>
                    <h5>Nous contacter</h5>
                    <p>
                        Vous pouvez vous pré-inscrire en utilisant notre formulaire
                        et <strong>bénéficier d'un avantage</strong> lors du lancement officiel
                        ou nous envoyer un simple message.
                    </p>
                </div>
                
                <!-- LOCATION -->
                <LocationArea/>
            </div>

            <div class="col s12 m6">
                <!-- CONTACT FORM -->
                <ContactForm/>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import ContactForm from './ContactForm.vue'
import LocationArea from './LocationArea.vue'

export default {
    components: {
        ContactForm,
        LocationArea
    }
}
</script>

