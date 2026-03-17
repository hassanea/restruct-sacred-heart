<template>
  <button
    :type="type"
    :aria-label="label"
    :class="buttonClasses"
    class="box-shadow"
  >
    <span
      v-if="$slots.icon"
      :class="{ 'inline-block align-middle mr-2': $slots.default }"
    >
      <slot name="icon" />
    </span>
    <slot class="inline-block align-middle" v-if="$slots.default">
      {{ label }}
    </slot>
  </button>
</template>

<script setup>
defineOptions({
  name: "BaseButton",
});
const props = defineProps({
  type: {
    type: String,
    required: false,
    default: "button",
    validator(value) {
      return ["button", "submit", "reset"].includes(value);
    },
  },
  variant: {
    type: String,
    required: false,
    default: "btn-primary",
  },
  label: {
    type: String,
    required: true,
  },
});

const { type, variant, label } = props;

const buttonClasses = computed(() => {
  return {
    "inline-block bg-[#2C3E4C] text-white not-italic leading-normal tracking-wide hover:bg-white hover:text-[#2C3E4C] hover:border-2 hover:border-solid hover:border-[#2C3E4C] focus:outline-0 focus:border-4 focus:border-solid focus:border-[#FFD700] rounded-lg p-4 font-semibold cursor-pointer text-lg md:text-xl transition-shadow":
      variant === "btn-primary",
  };
});

/* 
    btn: variant === "btn",
    "btn more": variant === "btn-more",
    "btn no-mg": variant === "btn-no-mg",
    "btn media": variant === "btn-media",
    "btn-cta": variant === "btn-cta",
    "btn-close": variant === "btn-close",
    "btn btn-back": variant === "btn-back",
    "btn-mobile-nav": variant === "btn-mobile-nav",
    "btn-lightbox": variant === "btn-lightbox",
    "btn-toolbar": variant === "btn-toolbar",
*/
</script>

<style lang="css">
.box-shadow:active {
  box-shadow: 0 0 5px 5px #2c3e4c;
}
</style>
