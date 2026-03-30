<template>
  <base-header :heading="mainHead" :links="navItems"> </base-header>
  <base-main>
    <base-section
      class="p-6 md:p-7 lg:p-8 xl:p-11 border-b-2 border-solid border-dark"
      id="contacts"
    >
      <div class="grid grid-cols-1">
        <h2
          class="text-xl md:text-2xl leading-normal font-cursive font-bold text-center md:text-left not-italic text-pretty mt-6 mb-3 md:my-5 lg:my-6"
        >
          {{ subHead }}
        </h2>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center"
        >
          <div class="p-5 md:p-7 lg:p-8">
            <h2
              class="text-2xl md:text-[1.625rem] lg:text-2-5xl xl:text-3xl leading-normal font-cursive mb-4 md:mb-5 lg:mb-6 font-medium text-center md:text-left"
            >
              {{ pcc.title }}
            </h2>
            <base-list type="ul" variant="list">
              <base-list-item
                v-for="person in sortedPCCPeople"
                :key="person.toLowerCase()"
                variant="contact"
              >
                {{ person }}
              </base-list-item>
            </base-list>
          </div>

          <div class="p-5 md:p-7 lg:p-8">
            <h2
              class="text-2xl md:text-[1.625rem] lg:text-2-5xl xl:text-3xl leading-normal font-cursive mb-4 md:mb-5 lg:mb-6 font-medium text-center md:text-left text-pretty"
            >
              {{ kpc.title }}
            </h2>
            <base-list type="ul" variant="list">
              <base-list-item
                v-for="person in sortedKPCPeople"
                :key="person.toLowerCase()"
                variant="contact"
              >
                {{ person }}
              </base-list-item>
            </base-list>
          </div>
        </div>
      </div>
    </base-section>

    <base-section
      class="pt-7 pb-8 px-7 md:p-9 lg:p-11 xl:p-12 bg-gray-400"
      id="sessions"
    >
      <div class="grid grid-cols-1">
        <h2
          class="font-cursive not-italic leading-normal text-center font-bold text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-5 mb-6 md:my-6 lg:mb-12 tracking-normal md:tracking-wide"
        >
          {{ sessions.title }}
        </h2>
        <base-list type="ul" variant="session-list">
          <template
            v-for="bullet in sessions.bullets"
            :key="`bullet-${bulletId}`"
          >
            <base-list-item
              v-if="typeof bullet === 'string'"
              variant="session-regular"
            >
              {{ bullet }}
            </base-list-item>
            <base-list-item v-else variant="session-emphasized">
              {{ bullet.text }}

              <template v-if="bullet.dates?.length">
                <span class="mr-2">
                  <lazy-font-awesome icon="fa-solid fa-calendar" />
                </span>
                <p
                  v-for="date in bullet.dates"
                  class="italic font-black text-[0.875rem] md:text-base lg:text-lg text-center md:text-left my-0.5"
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
                class="p-4 rounded-6xl hover:bg-tertiary hover:text-light hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
                ><span class="mr-1">
                  <lazy-font-awesome :icon="bullet.icon" size="1x" /> </span
                >{{ bullet.urlText }}</nuxt-link
              >
            </base-list-item>
          </template>
        </base-list>
      </div>
    </base-section>
    <base-section
      class="bg-prep py-12 px-5 md:py-15 md:px-0 lg:py-18 xl:p-22.5"
      id="prep"
    >
      <div class="grid grid-cols-1">
        <h3
          class="font-cursive text-2xl md:text-3xl leading-normal font-bold not-italic text-center mb-8 md:mb-9 lg:mb-10"
        >
          {{ prep.title }}
        </h3>

        <base-list type="ol" variant="prep-list">
          <base-list-item
            v-for="item in prep.bullets"
            :key="item.name.toLowerCase()"
            variant="prep"
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
                    class="hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
                    >{{ item.urlTitle }}</nuxt-link
                  >
                  <span class="hidden md:inline">
                    {{ item.text }}
                  </span>
                  <span class="list-item md:hidden">
                    {{ item.mobileText }}
                  </span>
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
                    <strong>{{ item.name }}</strong>
                    <span class="hidden md:inline">
                      {{ item.text }}
                    </span>
                    <span class="list-item md:hidden">
                      {{ item.mobileText }}
                    </span>

                    <nuxt-link
                      :to="item.url"
                      v-tooltip.bottom="'Parish Workbook'"
                      target="_blank"
                      class="hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
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
                    <strong>{{ item.name }}</strong>
                    <span class="hidden md:inline">
                      {{ item.text }}
                    </span>
                    <span class="list-item md:hidden">
                      {{ item.mobileText }}
                    </span>
                  </p>
                </template>
              </base-disclosure>
            </template>
          </base-list-item>
        </base-list>
      </div>
    </base-section>
  </base-main>
  <base-footer :year="currentYear"></base-footer>
</template>

<script lang="ts" setup>
import data from "@/assets/data/data.json";
import { useLocaleDate, useLocaleTimeShort } from "@/composables/useLocale";
import { sortedByLastName } from "@/utils/index";
const { meta, mainHead, subHead, navItems, pcc, kpc, sessions, prep } = data;

useHead({
  title: `${meta.title} ${meta.location}${meta.subTitle}`,
  meta: [
    {
      name: "description",
      content: meta.description,
    },
    {
      name: "keywords",
      content: meta.keywords,
    },
    { property: "og:type", content: meta.type },
    { property: "og:url", content: meta.url },
  ],
  bodyAttrs: { class: "pt-[5.625rem] lg:pt-[6.25rem] 2xl:pt-[5.625rem]" },
});

const currentYear = ref(0);
const showPray = ref(true);
const showReview = ref(true);
const showReflect = ref(true);

const bulletId = useId();

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});

const sortedPCCPeople = computed(() => {
  return sortedByLastName(pcc.people);
});

const sortedKPCPeople = computed(() => {
  return sortedByLastName(kpc.people);
});
</script>

<style lang="css" scoped></style>
