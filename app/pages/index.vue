<template>
  <header class="w-full h-auto">
    <nav
      class="w-full p-6 bg-primary/95 text-dark flex flex-col lg:flex-row flex-wrap justify-start items-center fixed shadow-2xl font-sans leading-normal text-lg font-bold z-2000 pt-[5.35rem] lg:py-[.6rem] lg:px-0 align-middle inset-0 border-t-2 border-solid border-t-dark"
      @keydown.esc="closeMobileNavigation"
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
        class="flex flex-col lg:flex-row justify-center items-center flex-wrap mx-6 list-none transition-transform"
        :class="{
          'translate-0': toggle || !showMobileMenu,
          '-translate-2499.75': !toggle,
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
              src="/heart-n-hands.svg"
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
    <div
      class="w-screen h-[60vh] flex flex-col justify-center items-center bg-[#115B78] text-[#F7F7F7] text-center"
    >
      <base-logo class="inline-block align-middle mb-6"></base-logo>
      <h1
        class="text-[1.4rem] md:text-4xl lg:text-[2.5rem] xl:text-5xl font-cursive mt-10 mb-0 ml-0 mr-0 leading-relaxed not-italic font-black tracking-wide line-clamp-2"
      >
        <template v-for="item in mainHead" :key="item.toLowerCase()">
          <span class="block">{{ item }}</span>
        </template>
      </h1>
    </div>
  </header>
  <base-main>
    <base-section class="p-8 border-b-2 border-solid border-dark" id="contacts">
      <div class="grid grid-cols-1">
        <h2 class="text-2xl font-cursive font-bold">{{ subHead }}</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center"
        >
          <div class="p-8">
            <h2 class="text-3xl font-cursive mb-4 font-medium">
              {{ pcc.title }}
            </h2>
            <ul>
              <li
                v-for="person in sortedPCCPeople"
                :key="person.toLowerCase()"
                class="list-none font-sans font-semibold my-2"
              >
                {{ person }}
              </li>
            </ul>
          </div>

          <div class="p-8">
            <h2 class="text-3xl font-cursive mb-4 font-medium">
              {{ kpc.title }}
            </h2>
            <ul>
              <li
                v-for="person in sortedKPCPeople"
                :key="person.toLowerCase()"
                class="list-none font-sans font-semibold my-2"
              >
                {{ person }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </base-section>

    <base-section class="p-12 bg-gray-400" id="sessions">
      <div class="grid grid-cols-1">
        <h2 class="font-cursive text-4xl text-center mt-5 mb-12">
          {{ sessions.title }}
        </h2>
        <ul class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <template
            v-for="bullet in sessions.bullets"
            :key="`bullet-${useId()}`"
          >
            <li
              v-if="typeof bullet === 'string'"
              class="list-disc font-medium font-sans text-base lg:text-lg text-left leading-normal not-italic text-pretty"
            >
              {{ bullet }}
            </li>
            <li
              v-else
              class="list-disc font-bold font-sans text-base lg:text-lg text-left leading-normal not-italic"
            >
              {{ bullet.text }}

              <template v-if="bullet.dates?.length">
                <span class="mr-2">
                  <font-awesome icon="fa-solid fa-calendar" />
                </span>
                <p
                  v-for="date in bullet.dates"
                  class="italic font-black text-base lg:text-lg text-center md:text-left my-0.5"
                >
                  <time :datetime="date">
                    {{ useLocaleDate(new Date(`${date}`)) }}</time
                  >
                  from {{ useLocaleTimeShort(new Date(`${date}`)) }} to
                  {{ useLocaleTimeShort(new Date(`${bullet.endTime}`)) }}
                </p>
              </template>
              <nuxt-link
                v-else
                :to="bullet.url"
                v-tooltip.bottom="bullet.tooltip"
                target="_blank"
                class="p-4 rounded-6xl hover:bg-[#2C3E4C] hover:text-white hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-[#FFD700] box-shadow transition-shadow"
                ><span class="mr-1">
                  <font-awesome :icon="bullet.icon" size="1x" /> </span
                >{{ bullet.urlText }}</nuxt-link
              >
            </li>
          </template>
        </ul>
      </div>
    </base-section>
    <base-section class="bg-[#DADADA]" id="prep">
      <div class="p-40">
        <h3
          class="font-cursive text-3xl leading-normal font-bold not-italic text-center mb-10"
        >
          {{ prep.title }}
        </h3>
        <ol class="grid grid-cols-1 xl:grid-cols-3 xl:max-w-400 gap-12 mx-auto">
          <li
            v-for="item in prep.bullets"
            :key="item.name.toLowerCase()"
            class="text-center list-none"
          >
            <nuxt-img
              provider="imagekit"
              v-if="item.image.endsWith('.svg')"
              :src="item.image"
              alt=""
              width="100"
              height="100"
              class="inline-block align-middle size-25 mb-5"
            />
            <lazy-font-awesome
              v-else
              :icon="item.image"
              class="inline-block align-middle h-25 mb-5"
              size="5x"
            />

            <base-disclosure
              v-if="item.name === 'Pray'"
              :btn-label="item.name"
              :show="showPray"
              @handle-show="showPray = !showPray"
            >
              <template #default>
                <p>
                  <strong>{{ item.name }}</strong>
                  <nuxt-link
                    :to="item.url"
                    v-tooltip="'Prayer for AOD Restructuring'"
                    target="_blank"
                    class="hover:bg-[#2C3E4C] hover:text-white hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-[#FFD700] box-shadow transition-shadow"
                    >{{ item.urlTitle }}</nuxt-link
                  >
                  {{ item.text }}
                </p>
              </template>
            </base-disclosure>

            <template v-if="item.name === 'Review'">
              <base-disclosure
                :btn-label="item.name"
                :show="showReview"
                @handle-show="showReview = !showReview"
              >
                <template #default>
                  <p>
                    <strong>{{ item.name }}</strong> {{ item.text }}
                    <nuxt-link
                      :to="item.url"
                      v-tooltip.bottom="'Parish Workbook'"
                      target="_blank"
                      class="hover:bg-[#2C3E4C] hover:text-white hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-[#FFD700] box-shadow transition-shadow"
                      >{{ item.urlTitle }}</nuxt-link
                    >
                  </p>
                </template>
              </base-disclosure>
            </template>

            <template v-if="item.name === 'Reflect'">
              <base-disclosure
                :btn-label="item.name"
                :show="showReflect"
                @handle-show="showReflect = !showReflect"
              >
                <template #default>
                  <p>
                    <strong>{{ item.name }}</strong> {{ item.text }}
                  </p>
                </template>
              </base-disclosure>
            </template>
          </li>
        </ol>
      </div>
    </base-section>
  </base-main>
  <base-footer :year="currentYear"></base-footer>
</template>

<script lang="ts" setup>
import data from "@/assets/data/data.json";
import { sortedByLastName } from "#imports";
import { useLocaleDate, useLocaleTimeShort } from "@/composables/useLocale";
const { mainHead, subHead, navItems, pcc, kpc, sessions, prep } = data;

// <meta property="og:title" content="Sacred Heart Catholic Church - Auburn Hills, MI | Welcome" />
// <meta property="og:site_name" content="Sacred Heart Catholic Church's website" />
// <meta property="og:description" content="Sacred Heart Church's Site" />

useHead({
  meta: [
    {
      name: "description",
      content:
        "Archdiocese of Detroit's Restructuring Information for Sacred Heart Catholic Church, Auburn Hills",
    },
    {
      name: "keywords",
      content:
        "Sacred Heart Catholic Church, Auburn Hills, Michigan, Archdiocese of Detroit, Restructuring, Archdiocesan Restructuring",
    },
    { property: "og:title", content: "" },
    { property: "og:site:name", content: "" },
    { property: "og:description", content: "" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://revamp.esacredheart.org" },
  ],
  bodyAttrs: { class: "pt-[5.625rem]" },
});

const currentYear = ref(0);

const toggle = ref(false);
const showPray = ref(true);
const showReview = ref(true);
const showReflect = ref(true);

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});

const sortedPCCPeople = computed(() => {
  return sortedByLastName(pcc.people);
});

const sortedKPCPeople = computed(() => {
  return sortedByLastName(kpc.people);
});

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
  toggle.value = !toggle.value;
};

const closeMobileNavigation = () => {
  toggle.value = false;
};

const setMobileIcon = computed(() => {
  return toggle.value ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

const setExpanded = computed(() => {
  return toggle.value ? true : false;
});
</script>

<style lang="css" scoped></style>
