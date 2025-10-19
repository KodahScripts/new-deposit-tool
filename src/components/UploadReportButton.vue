<template>
  <div v-if="!hasData">
    <input :id="id" type="file" accept=".xlsx, .xls" @change="handleUpload" class="hidden" />
    <label :for="id">Upload {{ idString }}</label>
  </div>
  <div v-else>
    <label :for="id" @click="handleClear">Clear {{ idString }}</label
    >
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { ref } from 'vue'
import { read, utils } from 'xlsx'

const props = defineProps<{
  id: string
}>()

const hasData = ref(false)

const idString = computed(() => {
  return props.id.replace(/-/g, ' ')
})

const emit = defineEmits(['fileData', 'clearData'])

const handleUpload = (event: Event) => {
  const file = event.target?.files[0]
  const reader = new FileReader()
  reader.onload = (e) => {
    const workbook = read(e.target?.result)
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    const jsonData = utils.sheet_to_json(worksheet, { header: 1 })
    emit('fileData', jsonData)
    hasData.value = true
  }
  reader.readAsArrayBuffer(file)
}

const handleClear = () => {
  emit('clearData')
  hasData.value = false
}
</script>
<style scoped>
input {
  display: none;
}
label {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  background-color: #f2f5f7;
}

</style>
