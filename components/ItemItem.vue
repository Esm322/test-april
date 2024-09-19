<template>
  <li class="main-content__item">
    <a class="main-content__item-link">
      <img :src="props.image" :alt="props.title" class="main-content__item-img">
      <div class="main-content__item-wrapper">
        <h3 class="main-content__item-title">
          {{ props.title }}
        </h3>
        <p class="main-content__item-price">
          {{ numberFormat(props.price) }}
        </p>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
  import { numberFormat } from '~/helpers/numberFormat';

  const props = defineProps<{
    id: number,
    image: string,
    price: number,
    title: string,
  }>();
</script>
