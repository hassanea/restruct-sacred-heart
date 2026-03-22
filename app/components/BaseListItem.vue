<template>
  <li :value="startValue" :class="listItemClasses">
    <slot />
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  variant: {
    type: String,
    required: false,
    default: "prep",
    validator(value: string) {
      return [
        "contact",
        "session-emphasized",
        "session-regular",
        "prep",
      ].includes(value);
    },
  },
  startValue: {
    type: [String, Number],
    required: false,
  },
});

const listItemClasses = computed(() => {
  return {
    "text-center list-none max-w-70 md:max-w-115 lg:max-w-120 xl:max-w-130 2xl:max-w-150 min-h-70 max-h-180":
      props.variant === "prep",
    "list-disc font-medium font-sans text-base lg:text-lg text-left leading-normal not-italic text-pretty":
      props.variant === "session-regular",
    "list-disc font-bold font-sans text-base lg:text-lg text-left leading-normal not-italic":
      props.variant === "session-emphasized",
    "list-none font-sans font-semibold my-2": props.variant === "contact",
  };
});
</script>

<style lang="css" scoped></style>
