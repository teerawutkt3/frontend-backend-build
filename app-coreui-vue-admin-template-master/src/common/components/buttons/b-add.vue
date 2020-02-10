<template>
  <Button color="success" :type="type" :id="this.id" :click="this.click" >Add</Button>
</template>

<script>
  import Button from "./button";
  export default {
    props: {
      click: {
        type: Function,
        default: () => {}
      },
      id: {
        type: String,
        default: "save"
      },
      type: {
        type: String,
        default: "button"
      }
    },
    components: {
      Button
    }
  };
</script>

<style>
</style>
