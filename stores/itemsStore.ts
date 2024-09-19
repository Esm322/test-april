import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios, { type AxiosResponse } from 'axios'

import { deepest } from '~/helpers/takeDeep';

import type { IItem } from '~/interfaces/item'

export const useItemsStore = defineStore('client', () => {
  const data = ref<IItem[]>([]);
  const itemsPerPage = ref<number>(5);
  const page = ref<number>(1);
  const offset = ref<number>(0);
  const viewValue = ref('tiled');
  const searchValue = ref('');

  const setView = computed<string>({
    get: (): string => viewValue.value,
    set: (value: string): string => viewValue.value = value
  });

  const filteredData = computed<IItem[]>(() => {
    let copyData: IItem[] = data.value;

    if (searchValue.value) {
      copyData = copyData.filter((item: IItem) => {
        return deepest(item).some((val: string) => {
          return val.toLowerCase().includes(searchValue.value.toLocaleLowerCase());
        });
      });
    };

    return copyData;
  })

  const convertedData = computed<IItem[]>(() => {
    return filteredData.value ? filteredData.value.slice(offset.value, offset.value + itemsPerPage.value) : [];
  });

  const pagesCount = computed<number>(() => {
    return filteredData.value ? Math.trunc(filteredData.value.length / itemsPerPage.value) : 0;
  });

  function getItemsData(): Promise<void> {
    return axios.get('https://fakestoreapi.com/products')
      .then((response: AxiosResponse): void => data.value = response.data)
      .catch((error: AxiosResponse) => console.log(error))
  };

  return {
    getItemsData,
    convertedData,
    itemsPerPage,
    page,
    offset,
    pagesCount,
    data,
    viewValue,
    setView,
    searchValue,
  };
})
