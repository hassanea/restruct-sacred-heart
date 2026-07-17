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
    default: "card-prep",
    validator(value: string) {
      return ["card-prep", "card-session"].includes(value);
    },
  },
});
const cardClasses = computed(() => {
  return {
    "bg-[#b5d6d6] text-dark text-center font-sans not-italic font-medium text-base md:text-lg leading-normal md:leading-relaxed p-6 md:p-8 rounded-2xl mt-3.5 drop-shadow overflow-hidden md:overflow-auto indent-0 md:indent-2.5 flex flex-col justify-center items-center":
      props.variant === "card-prep",
    "bg-[#ffeeed] text-dark text-center font-sans not-italic font-medium text-base md:text-lg leading-normal md:leading-relaxed p-6 md:p-8 rounded-2xl mt-3.5 drop-shadow overflow-hidden md:overflow-auto indent-0 md:indent-2.5 flex flex-col justify-center items-center":
      props.variant === "card-session",
  };
});
</script>

<style lang="css" scoped></style>
