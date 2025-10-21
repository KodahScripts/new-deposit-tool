<template>
  <div class="card">
    <div class="left-col">
      <div class="row">
        <div class="customer-info">{{ depositData.chkName }}</div>
      </div>
      <div class="row"></div>
      <div class="row"></div>
    </div>
    <div class="right-col">
      <div class="options">
        <div class="row">
          <div class="edit-btn"></div>
        </div>
        <div class="row">
          <div class="hold-btn"></div>
          <div class="delete-btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ReportRowUTA from '../utils/constants.ts'
const props = defineProps<{
  depositData: ReportRowUTA
}>()
</script>
