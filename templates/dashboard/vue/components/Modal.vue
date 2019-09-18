<template>
  <div :id="id" class="modal">
    <div class="modal-content">
        {{ modal_content }}
    </div>
</div>
</template>

<script>
export default {
    props: ['id', 'modal_content']
}
</script>
