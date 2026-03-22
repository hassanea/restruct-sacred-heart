<template>
  <ul v-if="type === 'ul'" :class="listClasses">
    <slot />
  </ul>
  <ol v-else-if="type === 'ol'" :class="listClasses">
    <slot />
  </ol>
  <dl v-else :class="listClasses">
    <slot />
  </dl>
</template>

<script lang="ts" setup>
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "ul",
    validator(value: string) {
      return ["ul", "ol", "dl"].includes(value);
    },
  },
  variant: {
    type: String,
    required: false,
    default: "",
    validator(value: string) {
      return ["session-list", "prep-list"].includes(value);
    },
  },
  items: {
    type: Array,
    required: false,
    default: () => {
      return ["a", "b", "c", "d"];
    },
    validator(value: Array<string | number>) {
      return (
        value.length > 0 &&
        value.every(
          (item) => typeof item === "string" || typeof item === "number",
        )
      );
    },
  },
});

const listClasses = computed(() => {
  return {
    "w-full h-auto grid grid-cols-1 xl:grid-cols-3 container gap-8 md:gap-11 lg:gap-13 mx-auto place-content-center place-items-center":
      props.variant === "prep-list",
    "grid grid-cols-1 lg:grid-cols-2 gap-5": props.variant === "session-list",
  };
});
</script>

<style lang="css" scoped></style>
