<template>
  <div :class="cardClasses">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    required: false,
    validator(value: string) {
      return ["card-prep"].includes(value);
    },
  },
});
const cardClasses = computed(() => {
  return {
    "bg-[#b5d6d6] text-dark text-center font-sans not-italic font-medium text-base md:text-lg leading-relaxed p-8 rounded-2xl mt-3.5 max-w-120 max-h-90 drop-shadow overflow-auto indent-2.5 text-pretty text-clip w-full h-auto flex flex-col justify-center items-center":
      props.variant === "card-prep",
  };
});
</script>

<style></style>
