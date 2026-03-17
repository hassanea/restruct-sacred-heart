<template>
  <footer
    class="bg-primary text-dark w-auto h-auto p-10 border-t-2 border-t-dark text-center"
  >
    <p v-if="copyRightInfo" class="text-lg leading-normal font-bold">
      {{ copyRightInfo }}
    </p>
  </footer>
</template>

<script lang="ts" setup>
const props = defineProps({
  year: {
    type: Number,
    required: true,
    validator(value: number) {
      return value > 0;
    },
  },
});

const copyRightInfo = computed(() => {
  if (!props.year || props.year <= 0) return "";
  else return `Sacred Heart Catholic Church © Copyright ${props.year}`;
});
</script>

<style></style>
