<template>
  <ul class="main-content__list list-reset"
    :class="[
      { 'main-content__list--tiled': viewValue === 'tiled' },
      { 'main-content__list--horizontal': viewValue === 'horizontal' }
    ]"
  >
    <ItemItem
      v-for="item in convertedData" :key="item.id"
      :id="item.id"
      :image="item.image"
      :price="item.price"
      :title="item.title"
    />
  </ul>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';

  import { useItemsStore } from '~/stores/itemsStore';

  const store = useItemsStore();
  const { convertedData, viewValue } = storeToRefs(store);
</script>
