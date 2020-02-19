<template>
    <div class="col s12 m8 l8 offset-m3 offset-l3">
        <div class="card-panel z-depth-0">
            <div class="col s12 m8 l8">
                <input 
                    v-model="searchTerms" 
                    type="search" name="search" id="search"
                >
            </div>

            <div class="col s12 m4 l4">
                <button
                    @click="startSearch()" 
                    type="submit" class="btn red" id="btn_rechercher">
                        Rechercher
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTerms: ''
        }
    },

    methods: {
        startSearch: function() {
            this.$emit('startSearch', this.$data.searchTerms)
        }
    }
}
</script>
