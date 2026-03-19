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
    "btn-mobile-nav": variant === "btn-mobile-nav",
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
    "btn-lightbox": variant === "btn-lightbox",
    "btn-toolbar": variant === "btn-toolbar",
*/
</script>

<style lang="css">
.btn-mobile-nav {
  display: inline-block;
  position: absolute;
  top: 10%;
  right: 1%;
  z-index: 1026;
  vertical-align: middle;
  width: 3rem;
  height: 3rem;
  margin: 1rem 0;
  padding: 0.5rem;
  background: #b8390e;
  color: #000;
  /* border: 2px solid #ffff00; */
  border-radius: 100%;
  cursor: pointer;
  -webkit-transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  transition: all 0.4s cubic-bezier(0.17, 0.67, 0.83, 0.67);
}

/* // &:hover {
  //   color: $primary-color;
  //   background: $text-color;
  // }
  &:active {
    -webkit-box-shadow: 4px 4px 6px #fff599;
    box-shadow: 4px 4px 6px #fff599;
  }
  &:focus {
    outline: 0;
    background: #b3ffff;
    // color: $primary-color;
  } */

/* &.active {
    left: 1%;
  } */

.box-shadow:active {
  box-shadow: 0 0 5px 5px #2c3e4c;
}
</style>
