<script setup lang="ts">
import { ref } from 'vue'
import ToggleSwitch from './components/ToggleSwitch.vue'

const currentStore = ref("BMWT")

const switchStore = () => {
  currentStore.value === 'BMWT' ? currentStore.value = 'WCN' : currentStore.value = 'BMWT'
}
</script>

<template>
  <div>Store: {{ currentStore }}</div>
  <ToggleSwitch @change="switchStore" />
 </template>
