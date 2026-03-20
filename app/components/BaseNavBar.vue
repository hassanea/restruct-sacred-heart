<template>
  <nav
    class="w-full md:p-2.5 p-6 bg-primary/95 text-dark flex flex-col md:flex-row flex-wrap justify-center lg:justify-start items-center fixed shadow-2xl font-sans leading-normal text-lg font-bold z-2000 lg:py-[.6rem] lg:px-0 align-middle inset-0 border-t-2 border-solid border-t-dark"
    @keydown.esc="closeMobileNavigation"
    :aria-label="label"
    :class="{
      'h-100': toggle && showMobileMenu,
      'h-25': (!toggle && showMobileMenu) || (!toggle && !showMobileMenu),
    }"
  >
    <base-button
      v-if="showMobileMenu"
      @click="toggleMobileNavigation"
      @keydown.enter="toggleMobileNavigation"
      variant="btn-mobile-nav"
      label="Mobile Navigation button"
      title="Mobile menu button"
      :aria-expanded="setExpanded"
      :aria-controls="navId"
    >
      <template #icon>
        <font-awesome :icon="setMobileIcon" size="lg" />
      </template>
    </base-button>
    <ul
      :id="navId"
      class="flex flex-col md:flex-row justify-center items-center flex-wrap md:static md:translate-0 mx-0 md:mx-4 lg:mx-5 xl:mx-6 list-none transition-transform"
      :class="{
        'absolute translate-0': toggle,
        'absolute -translate-2499.75': !toggle,
      }"
    >
      <!-- closed state: -translate-2499.75, opened state: translate-0 -->
      <li class="list-none align-middle">
        <nuxt-link
          to="/"
          class="inline-block mx-auto px-2 py-1.25 align-middle text-xl whitespace-nowrap no-underline lg:mr-4"
        >
          <nuxt-img
            provider="imagekit"
            :src="logo"
            alt="Heart in hands"
            width="130"
            height="32"
            class="my-0 mx-auto lg:mx-0 block w-[8.13rem] h-auto"
          />
        </nuxt-link>
      </li>
      <li
        class="list-none align-middle"
        v-for="navItem in navItems"
        :key="navItem.name.toLowerCase()"
      >
        <nuxt-link
          v-if="navItem.to === '/'"
          :to="navItem.to"
          @click.prevent="handleScrollToTop"
          class="mx-3 hover:text-dark/70 hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 hover:border-solid hover:border-[#115B78] transition-colors"
          >{{ navItem.name }}</nuxt-link
        >
        <nuxt-link
          v-else
          :to="navItem.to"
          class="mx-3 hover:text-dark/70 transition-colors hover:border-t-0 hover:border-l-0 hover:border-r-0 hover:border-b-2 hover:border-solid hover:border-[#115B78]"
          >{{ navItem.name }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  toggle: {
    type: Boolean,
    required: false,
  },
  navItems: {
    type: Array,
    required: false,
  },
  logo: {
    type: String,
    required: false,
    default: "placeholder.jpg",
  },
  label: {
    type: String,
    required: false,
    default: "Navigation",
  },
});

const emit = defineEmits(["handle-toggle", "handle-close"]);

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

const showMobileMenu = useMediaQuery("(max-width: 767px)");
const navId = useId();

const toggleMobileNavigation = () => {
  emit("handle-toggle");
};

const closeMobileNavigation = () => {
  emit("handle-close");
};

const setMobileIcon = computed(() => {
  return props.toggle ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

const setExpanded = computed(() => {
  return props.toggle ? true : false;
});
</script>

<style lang="css" scoped></style>
