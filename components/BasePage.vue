<template>
  <li class="main-content__page"
    v-for="number in props.pagesCount" :key="number"
  >
    <a href="#" class="main-content__page-link number"
      :class="{ 'number--active': page === number }"
      @click.prevent="emits('paginate', number)"
    >
      {{ number }}
    </a>
  </li>
</template>

<script setup lang="ts">
  const props = defineProps<{
    pagesCount: number,
    page: number,
  }>();

  const emits = defineEmits<{
    (event: 'paginate', value: number): number,
  }>();
</script>
