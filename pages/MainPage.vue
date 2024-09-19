<template>
  <main class="main">
    <section class="main-content">
      <div class="container main-content__container">
        <div class="main-content__wrapper-inputs">
          <BaseInputView/>

          <BaseInputSearch/>
        </div>

        <BaseSpinnerLoading
          v-if="isItemsLoading"
        />

        <ItemList
          v-else
          :data="convertedData"
        />

        <BasePagination/>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { storeToRefs } from 'pinia';

import { useItemsStore } from '~/stores/itemsStore';

const store = useItemsStore();
const { convertedData, isItemsLoading } = storeToRefs(store);

onMounted(() => {
  store.getItemsData()
})
</script>
