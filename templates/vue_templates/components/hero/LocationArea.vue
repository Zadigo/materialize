<template>
    <ul class="collection with-header">
        <li class="collection-header">
            <h4>Location</h4>
        </li>
        <li v-for="collectionItem in collectionItems" :key="collectionItem" class="collection-item">{{ collectionItem }}</li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            collectionItems: ['Bwaloca', '59000, Lille']
        }
    }
}
</script>
