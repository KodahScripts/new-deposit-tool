<template>
  <div class="select-item">
    <ToggleSwitch @change="toggleOptions" />
    <span>{{ selectedOption }}</span>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted, onUpdated } from 'vue'
  import ToggleSwitch from './ToggleSwitch.vue'
  
  interface Props {
    option1: string;
    option2: string;
  }
  const props = defineProps<Props>()

  const emit = defineEmits([ 'selection' ]);

  const selectedOption = ref(props.option1)

  const toggleOptions = () => {
    selectedOption.value === props.option1 ? selectedOption.value = props.option2 : selectedOption.value = props.option1
  }
  onMounted(() => {
    emit('selection', selectedOption.value)
  })
  onUpdated(() => {
    emit('selection', selectedOption.value)
  })
</script>
<style scoped>
.select-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}  
</style>
