<template>
  <div class="table">
    <div class="table-head">
      <TableRow :rowData="reportHeader" :hasOptions="false" />
    </div>
    <div class="table-body">
      <div v-for="row in reportData">
        <TableRow :rowData="row" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import TableRowUTA from './TableRowUTA.vue'
import ReportRowUTA from '../utils/constants.ts'
interface Props {
  reportHeader: ReportRowUTA
  reportData: Array<ReportRowUTA>
}
const props = defineProps<Props>()
</script>
<style scoped>
.table {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.table-head {
  font-weight: bold;
  padding: 8px;
}
</style>
