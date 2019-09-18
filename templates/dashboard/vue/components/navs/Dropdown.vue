<template>
    <div class="dropdown-content" id="dropdown-notifications">
        <div class="settings-group">
            <div v-for="a in c" :key="a" class="setting">
                {{ a.c }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        settingPress: function() {
            this.$emit('press', {})
        }
    }
}
</script>
