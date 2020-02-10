<template>
  <b-button :size="size" :type="type" :id="id" :variant="color" @click="click">
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  props: {
    click: {
      type: Function,
      default: () => {}
    },
    color: String,
    id: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'sm'
    },
    type: {
      type: String,
      default: 'button'
    }
  }
};
</script>

<style>
</style>