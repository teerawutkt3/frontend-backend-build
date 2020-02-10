<template>
  <span :class="'fa fa-'+icon"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'button'
    }
  }
};
</script>

<style>
</style>
