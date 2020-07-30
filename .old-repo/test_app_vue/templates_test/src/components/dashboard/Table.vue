<template>
<div class="row">
    <div class="col s12 m12 l12">
        <div class="card-panel">
            <table class="centered">
                <thead>
                    <th>#</th>
                    <th>Offres</th>
                    <th>Activer</th>
                    <th>Actions</th>
                </thead>

                <tr v-for="item in items" v-bind:key="item.id">
                    <td><a :href="item.href">{{ item.id }}</a></td>
                    <td>{{ item.name }}</td>
                    <td>
                        <div class="switch">
                            <label>
                                <input 
                                    @change="changeActive(item.id)"
                                    type="checkbox" 
                                    id="switch-activer-desactiver" 
                                    :checked="item.active"
                                >
                                    <span class="lever"></span>
                            </label>
                        </div>
                    </td>

                    <td>
                        <a href=""><i class="material-icons">create</i></a>
                        <a href=""><i class="material-icons">file_copy</i></a>
                        <a href=""><i class="material-icons">delete</i></a>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['items'],

    methods: {
        changeActive: function(id) {
            var toastHTML = '\
                <span>I am toast content</span>\
                <button onClick="alert()" class="btn-flat toast-action">Undo</button>'
            M.toast({html: toastHTML});
            this.$emit('changeActive', id)
        }
    }
}
</script>

