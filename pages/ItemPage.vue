<template>
  <main class="main">
    <section class="main-item">
      <div class="container main-item__container">
        <BaseSpinnerLoading
          v-if="isItemLoading"
        />

        <div class="main-item__wrapper"
          v-else
        >
          <img :src="item?.image" :alt="item?.title" class="main-item__img">
          <div class="main-item__wrapper-about">
            <h2 class="main-item__title">
              {{ item?.title }}
            </h2>
            <p class="main-item__desc">
              {{ item?.description }}
            </p>
            <p class="main-item__price">
              {{ numberFormat(item?.price) }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { onMounted, computed } from 'vue';

  import { useRoute } from 'vue-router';

  import { storeToRefs } from 'pinia';

  import { useItemStore } from '~/stores/itemStore';

  import { numberFormat } from '~/helpers/numberFormat';

  const route = useRoute();

  const store = useItemStore();
  const { item, isItemLoading } = storeToRefs(store);

  onMounted(() => {
    store.getItem(route.params.id);
  })
</script>
