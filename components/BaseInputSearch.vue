<template>
  <label class="main-content__search-label">
    <input type="text" placeholder="Искать" name="search" class="main-content__search-input"
      v-model="searchValue"
    >
  </label>
</template>

<script setup lang="ts">
  import { onUnmounted } from 'vue';

  import { storeToRefs } from 'pinia';

  import { useItemsStore } from '~/stores/itemsStore';

  const store = useItemsStore();
  const { searchValue } = storeToRefs(store);

  onUnmounted(() => {
    searchValue.value = '';
  })
</script>
