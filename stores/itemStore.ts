import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios, { type AxiosResponse } from 'axios'

import type { IItem } from '~/interfaces/item'

export const useItemStore = defineStore('item', () => {
  const Base_Url: string = 'https://fakestoreapi.com/products/';

  const item = ref<null | IItem>(null);
  const isItemLoading = ref<boolean>(false);

  function getItem(id: string | string[]): Promise<void> {
    isItemLoading.value = true;

    return axios.get(`${Base_Url}${id}`)
      .then((response: AxiosResponse) => item.value = response.data)
      .catch((error: AxiosResponse) => {
        isItemLoading.value = false;
        console.log(error);
      })
      .finally(() => isItemLoading.value = false);
  };

  return {
    item,
    getItem,
    isItemLoading,
  };
})
