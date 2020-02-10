<template>
  <Button color="warning" :type="type" :id="this.id" :click="this.click" >Edit</Button>
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
