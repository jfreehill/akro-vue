<template>
	<div class="display-button-bar">
    <button type="button" class="icon-minus" @click="count--" :disabled="count < 2">-</button>
    <button type="button" @click="count = 3">3</button>
    <button type="button" @click="count = 4">4</button>
    <button type="button" @click="count = 5">5</button>
    <button type="button" class="icon-plus" @click="count++" :disabled="count > 7">+</button>
  </div>
</template>

<script>
export default {
  name: 'CountControl',
  data () {
    return {
      count: this.counter
    }
  },
  props: {
    counter: {
      required: true
    }
  },
  watch: {
    count: function (val) {
      this.$emit('update:count', val)
    }
  }
}
</script>