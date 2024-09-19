<template>
  <div>
    <label class="main-content__viewchange-label">
      <input type="radio" value="tiled" name="viewchange" class="main-content__viewchange-input"
        v-model="store.setView"
      >
      <span class="main-content__viewchange-text">
        Плиточный
      </span>
    </label>

    <label class="main-content__viewchange-label">
      <input type="radio" value="horizontal" name="viewchange" class="main-content__viewchange-input"
        v-model="store.setView"
      >
      <span class="main-content__viewchange-text">
        Горизонтальный
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
  import { useItemsStore } from '~/stores/itemsStore';

  const store = useItemsStore();
</script>
