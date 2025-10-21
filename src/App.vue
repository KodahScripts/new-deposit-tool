<template>
  <div class="left-col">
    <div class="top-section">
      <Selector option1="BMWT" option2="WCN" @selection="changeStore" />
      <UploadReportButton
        :id="`${selectedOutput}-report`"
        @file-data="loadData"
        @clear-data="clearData"
      />
    </div>
  </div>
  <div class="content">
    <div v-if="xlData != null" class="inner-content">
      <DepositCardList :allDeposits="reportData" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import Selector from './components/Selector.vue'
import UploadReportButton from './components/UploadReportButton.vue'
import DepositCardList from './components/DepositCardList.vue'

const currentStore = ref(null)
const selectedOutput = ref('UTA')
const xlData = ref(null)

const cleanData = computed(() => {
  return xlData.value
    .filter((row) => row[15] != 'DENIED' && row[15] != 'REFERRAL')
    .map((row, index) => {
      return {
        uid: index,
        chkdate: row[1],
        chk: row[4],
        chkAmt: row[5],
        totalAmt: row[6],
        merchant: row[7],
        chkName: row[8],
        user: row[20],
        ref: row[21],
      }
    })
})

const reportHeader = computed(() => {
  return cleanData.value[0]
})

const reportData = computed(() => {
  return cleanData.value.splice(1)
})

const changeStore = (storeAbbr: string) => {
  currentStore.value = storeAbbr
}

const loadData = (data) => {
  xlData.value = data
}

const clearData = () => {
  xlData.value = null
}
</script>
<style scoped>
.left-col {
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  width: 12rem;
  height: 98vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #fafcff;
  box-shadow: 1px 2px 7px #ededed;
}

.top-section {
  position: absolute;
  top: 0;
  left: 1rem;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.content {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  height: 98vh;
  width: 88%;
  overflow-y: scroll;
  border: 1px solid #ccc;
  border-radius: 1rem;
}

.inner-content {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 98%;
}

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
