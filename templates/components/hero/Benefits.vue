<template>
<section class="section grey lighten-4 center scrollspy" id="apropos">
    <div class="container">
        <div class="row">
            <div v-for="card in cards" :key="card.icon" class="col s12 m4 l4">
                <div class="card-panel">
                    <i class="material-icons large red-text">{{ card.icon }}</i>
                    <h4>{{ card.title }}</h4>
                    <p>{{ card.content }}</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    icon: 'room',
                    title: 'Simplicité',
                    content: 'Trouvez tous les produits locaux que vous aimez en un seul endroit'
                },
                {
                    icon: 'store',
                    title: 'Rapidité',
                    content: 'Nous vous livrons le plus rapidement possible dans la métropole Lilloise'
                },
                {
                    icon: 'airplanemode_active',
                    title: 'Economie',
                    content: 'Gagnez du temps et achetez à moindre coût sur notre plateforme'
                }
            ]
        }
    }
}
</script>
