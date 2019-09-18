<template>
  <p>
      <label>
          <input type="checkbox" :name="name" :id="id">
          <span v-text="label"></span>
      </label>
  </p>
</template>

<script>
export default {
    props: ['checkItems'],
}
</script>
