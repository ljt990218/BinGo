<script setup lang="ts">
import { getBinGoNews } from '@/api/index'

definePage({
  name: 'home',
  meta: {
    level: 1,
  },
})

const newsNav = [
  {
    id: 1,
    name: '标题',
  },
  {
    id: 2,
    name: '日期',
  },
  {
    id: 3,
    name: '媒体',
  },
]
const binGoNews = ref([])
function getBinGoNewsFun() {
  getBinGoNews().then((res: any) => {
    if (res.code === 0)
      binGoNews.value = res.data
  })
}
getBinGoNewsFun()

function openUrl(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="pt-100 text-20">
    <n-grid x-gap="12" y-gap="12" :cols="2">
      <n-gi class="min-h-200 border border-color-#ccc rounded-8 pb-4 shadow-md">
        <!-- newsNav -->
        <div class="flex-start-center rounded-t-8 bg-blue-5 pl-10 text-white">
          <div class="flex-1">
            {{ newsNav[0].name }}
          </div>
          <div class="w-150">
            {{ newsNav[1].name }}
          </div>
          <div class="w-150">
            {{ newsNav[2].name }}
          </div>
        </div>
        <!-- news -->
        <div
          v-for=" item in binGoNews" :key="item.title"
          class="flex-start-center mt-4 cursor-pointer pl-10 hover:text-blue-400"
          @click="openUrl(item.url)"
        >
          <span class="flex-1">
            {{ item.title }}
          </span>
          <span class="w-150">
            {{ item.date }}
          </span>
          <span class="w-150">
            {{ item.website }}
          </span>
        </div>
      </n-gi>
      <n-gi>
        <div class="h-300 border border-color-#eee" />
      </n-gi>
      <n-gi class="border border-color-#eee">
        <div class="h-300" />
      </n-gi>
      <n-gi class="border border-color-#eee">
        <div class="h-300" />
      </n-gi>
    </n-grid>
  </div>
</template>
