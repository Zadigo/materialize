<template>
    <div class="col s12 l4">
        <div class="card z-depth-0">
            <div class="card-content" id="side_right">
                <!-- {% include "products/product/breadcrumbs.html" %} -->
                <h4>{{ product.name }}</h4>

                <!-- PRICE -->
                <div class="price-section">
                    <h5 v-if="product.markeddown" id="price">
                        {{ markedDownPrice }}€ <span><strike>{{ product.price }}</strike></span>
                    </h5>
                    <h5 v-else id="price">
                        {{ product.price }}
                    </h5>
                </div>

                <!-- Description -->
                <p>{{ product.description }}</p>

                <!-- SIZES -->
                <!-- <div class="sizes">
                    <h5>Tailles</h5>
                    <div class="size" date-size="XS">XS</div>
                    <div class="size" date-size="S">S</div>
                    <div class="size" date-size="L">L</div>
                    <div class="size" date-size="M">M</div>
                </div> -->

                <!-- COLORS -->
                <!-- <h6>
                    {% trans 'Couleur(s) :' %}
                    {% for color in colors %}
                        {{ color }}
                    {% endfor %}
                </h6> -->


                <!-- <select class="" name="product_color">
                    <option>Red</option>
                    <option>Blue</option>
                    <option>White</option>
                    <option>Grey</option>
                </select> -->

                <!-- Quantity -->
                <Quantity/>

                <button 
                    @click="addToBasket()"
                    class="btn-large" id="btn_ajouter_panier">
                        Ajouter au panier
                </button>
                
                <!-- Liked -->
                <i @click="hasLiked()" v-if="liked" class="fas fa-heart" id="heart"></i>
                <i @click="hasLiked()" v-else class="far fa-heart" id="heart"></i>
            </div>
        </div>
    </div>
</template>

<script>
import Quantity from './product/Quantity.vue'

export default {
    props: ['product'],

    components: {
        Quantity
    },

    data() {
        return {
            basket: [],
            liked: false
        }
    },

    computed: {
        // Calculates the marked down price
        markedDownPrice() {
            var product = this.$props.product
            var newPrice = product.price * (1 - (product.markeddown_pct / 100))
            return newPrice.toString()
        }
    },

    methods: {
        addToBasket: function() {
            var productToAdd = {
                id: this.$props.product.id,
                reference: this.$props.product.reference
            }

            // Show message
            M.toast({html: 'Ajouté au panier'})
            
            // Push product reference to Tag Manager's datalayer
            // dataLayer.push({productName: '{{ product.product_name }}', actionName: 'AjouterPanier'})

            this.$data.basket.push(productToAdd)
        },

        hasLiked: function() {
            this.$data.liked = !this.$data.liked
        }
    }
}
</script>

