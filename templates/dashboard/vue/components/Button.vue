<template>
    <button class="btn white black-text rounded spaced" :id="id">{{ label }}</button>
</template>

<style lang="scss" scoped>
    .btn {
        &.rounded {
            border-radius: 35px;
        }

        &.spaced {
            @each $margin in 'right', 'bottom' {
                margin-#{$margin}: 3rem;
            }
        }
    }
</style>