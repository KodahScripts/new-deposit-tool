<template>
  <div class="table-row">
    <div class="table-cell">{{ rowData.chkDate }}</div>
    <div v-if="hasOptions" class="table-cell">Options</div>
    <div v-else class="table-cell"></div>
  </div>
</template>
<script setup lang="ts">
  import ReportRowUTA from '../utils/constants.ts' 
  
  interface Props {
    rowData: ReportRowUTA,
    hasOptions?: boolean
  }
  
  const props = withDefaults(defineProps<Props>(), {
    hasOptions: true
  })
</script>
<style scoped>
.table-row {
  display: flex;
  justify-content: space-between;
}

.table-cell {
  text-align: center;
  align-items: center;
  width: 100%;
}
</style>
