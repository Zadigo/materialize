<template>
    <div class="section section-icons grey lighten-4 center">
        <div class="container">
            <div class="row">
                <div v-for="card in cards" :key="card.key" class="col s12 m4 l4">
                    <div class="card-panel">
                        <i class="material-icons large red-text">
                            {{ card.icon }}
                        </i>
                        <h4>{{ card.title }}</h4>
                        <p>{{ card.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    "id": 1,
                    "icon": "room",
                    "title": "title",
                    "content": "content"
                }
            ]
        }
    }
}
</script>
