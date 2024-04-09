<template>
  <client-only>
    <el-dialog
      v-model="isOpen"
      title="提示"
    >
      <span>This is a message</span>
      <template v-slot:footer>
        <div class="dialog-footer"></div>
      </template>
    </el-dialog>
  </client-only>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleModal = () => {
  isOpen.value = !isOpen.value
}

defineExpose({
  toggleModal
})

</script>
