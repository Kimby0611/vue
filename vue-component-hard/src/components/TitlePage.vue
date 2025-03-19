<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ count }}</p>
    <p v-if="boooo === true">true입니다</p>
    <p v-else-if="boooo === false">false입니다</p>
    <p>{{ arra }}</p>
    <p>{{ objc }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    count: Number,
    boooo: {
      type: Boolean,
      default: undefined,
    },
    arra: Array,
    objc: Object,
  },
};
</script>
