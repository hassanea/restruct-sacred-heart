<template>
  <header class="w-full h-auto">
    <nav
      class="w-full h-25 p-6 bg-primary/95 text-dark flex flex-row flex-wrap justify-center items-center fixed shadow-2xl font-sans leading-normal text-lg font-bold z-2000 py-[.6rem] px-0 align-middle inset-0 border-t-2 border-solid border-t-dark"
    >
      <ul class="flex flex-row justify-center items-center flex-wrap">
        <li
          class="list-none"
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
      class="w-screen h-[50vh] flex flex-col justify-center items-center bg-[#115B78] text-[#F7F7F7]"
    >
      <base-logo class="inline-block align-middle mb-6"></base-logo>
      <h1 class="text-5xl font-cursive mb-4">{{ mainHead }}</h1>
    </div>
  </header>
  <base-main>
    <base-section class="p-8" id="contacts">
      <div>
        <h2 class="text-2xl font-cursive">{{ subHead }}</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center"
        >
          <div class="p-8">
            <h2 class="text-4xl font-cursive mb-4">{{ pcc.title }}</h2>
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
            <h2 class="text-4xl font-cursive mb-4">{{ kpc.title }}</h2>
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

    <base-section class="p-8" id="sessions">
      <div>
        <h2>{{ sessions.title }}</h2>
        <p>
          Every parish in the archdiocese will hold two parish listening
          sessions. At these sessions, we will review potential pastoral models
          and provide feedback. Every parish in the Archdiocese of Detroit will
          experience change in some way because of this process. The feedback
          being asked for now, is which of the proposed changes would better
          serve the people of God. Our parish listening sessions will be:
        </p>
        <p>
          <time datetime="2026-05-19T19:00"
            >Tuesday, May 19 and Thursday, May 21, {{ currentYear }} from 7:00pm
            to 9:00pm.</time
          >
        </p>
        <p>
          For more information and to register go to
          <nuxt-link
            to="https://restructuring.aod.org"
            v-tooltip.bottom="'AOD Restructuring Info'"
            target="_blank"
            class="hover:bg-[#2C3E4C] hover:text-white hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-[#FFD700] box-shadow transition-shadow"
            >restructuring.aod.org</nuxt-link
          >. By registering you will help us plan for the sessions and receive a
          copy of the presentation and follow-up survey when all listening
          sessions in our planning area are completed. We are part of Planning
          Area 10.
        </p>
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

            <template v-if="item.name === 'Pray'">
              <base-disclosure
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
            </template>

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
const { mainHead, subHead, navItems, pcc, kpc, sessions, prep } = data;

const currentYear = ref(0);

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
</script>

<style lang="css" scoped></style>
