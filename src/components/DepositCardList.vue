<template>
  <div v-for="deposit in allDeposits">
    <DepositCard :depositData="deposit" />
  </div>
</template>
<script setup lang="ts">
import DepositCard from './DepositCard.vue'
import ReportRowUTA from '../utils/constants.ts'

const props = defineProps<{
  allDeposits: Array<ReportRowUTA>
}>()
</script>
