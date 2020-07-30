<template>
    <div class="card-panel">
        <CheckBox :inputs="inputs" />
    </div>
</template>

<script>
import CheckBox from '@/components/shop/CheckBox.vue'

export default {
    components: {
        CheckBox
    },
    data() {
        return {
            inputs: [
                {
                    name: "active",
                    id: "active",
                    title: "Active"
                },
                {
                    name: "inactive",
                    id: "inactive",
                    title: "Inactive"
                }
            ]
        }
    }
}
</script>