<template>
  <div>
    <event-data-child @send-message="sendMessage" />
  </div>
</template>

<script>
import EventDataChild from "../child/EventDataChild.vue";

export default {
  components: { EventDataChild },
  methods: {
    sendMessage(data) {
      console.log(data);
    },
  },
};
</script>

<style scoped></style>
