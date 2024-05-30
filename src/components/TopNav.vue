<script setup lang="ts">
import useAppStore from '@/stores/modules/app'

const appStore = useAppStore()
const route = useRoute()
const { t } = useI18n()

const topNavList = [
  {
    id: 1,
    name: t('topNav.home'),
    path: '/',
  },
  {
    id: 2,
    name: t('topNav.chessPlayer'),
    path: '/chessPlayer',
  },
  {
    id: 3,
    name: t('topNav.chessMatch'),
    path: '/chessMatch',
  },
]
const display = computed(() => {
  if (route.meta.level && route.meta.level !== 2)
    return true
  return false
})

// 暗黑模式
const mode = computed(() => {
  return appStore.mode === 'dark'
})
function swithMode() {
  toggleDark()
  appStore.swithMode(appStore.mode === 'dark' ? 'light' : 'dark')
}
</script>

<template>
  <transition name="fade" mode="out-in" class="mt-10 duration-200">
    <div
      v-show="display"
      class="flex-center-center fixed left-50% h-60 w-1700 rounded-8 bg-white py-20 shadow-lg -translate-x-1/2 .dark:bg-black"
    >
      <div
        v-for="item in topNavList" :key="item.id" class="relative mx-10 cursor-pointer text-22"
        :class="route.path === item.path ? 'text-blue-5' : ''" @click="$router.push(item.path)"
      >
        {{ item.name }}
      </div>

      <div class="absolute right-20 top-20">
        <n-switch v-model:value="mode" size="large" @update:value="swithMode">
          <template #checked-icon>
            <div class="i-carbon:light h-1em w-1em" />
          </template>
          <template #unchecked-icon>
            <div class="i-carbon:moon h-1em w-1em" />
          </template>
        </n-switch>
      </div>
    </div>
  </transition>
</template>
