<template>
  <ul class="main-content__pagination-list list-reset">
    <li class="main-content__page">
      <a class="main-content__page-link previos"
        :class="{ 'deactivate': page === 1 }"
        @click.prevent="previosPage"
      >
        <
      </a>
    </li>

    <BasePage
      :pages-count="pagesCount"
      :page="page"
      @paginate="paginate"
    />

    <li class="main-content__page">
      <a class="main-content__page-link next"
        :class="{ 'deactivate': page === pagesCount }"
        @click.prevent="nextPage"
      >
        >
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import { watch } from 'vue';

  import { storeToRefs } from 'pinia';

  import { useItemsStore } from '~/stores/itemsStore';

  const store = useItemsStore();
  const { itemsPerPage, page, offset, pagesCount } = storeToRefs(store);

  const previosPage = (): number => page.value -= 1;
  const nextPage = (): number => page.value += 1;
  const paginate = (pageNumber: number): number => page.value = pageNumber;

  watch(page, (newValue: number): void => {
    if (newValue) {
      offset.value = (newValue - 1) * itemsPerPage.value;
    }
  })
</script>
