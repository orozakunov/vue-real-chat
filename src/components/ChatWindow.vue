<script setup>
import getCollection from "../composables/getCollection";

const { documents } = getCollection("messages");
</script>

<template>
  <div class="chat-window">
    <div v-if="documents" class="messages">
      <div v-for="doc in documents" :key="doc.id">
        <span class="created-at">{{ doc.createdAt?.toDate() }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
    <div v-else>Some problem</div>
  </div>
</template>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
