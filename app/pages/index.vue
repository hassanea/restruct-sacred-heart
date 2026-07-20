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
      class="pt-7 pb-10 px-7 md:py-9 md:px-9 lg:p-11 xl:p-12 bg-gray-400"
      id="sessions"
    >
      <div class="grid grid-cols-1">
        <h2
          class="font-cursive not-italic leading-normal text-center font-bold text-2xl lg:text-3xl mt-4 md:mt-5 mb-5 md:my-6 lg:mb-8 tracking-normal md:tracking-wide"
        >
          {{ sessions.title }}
        </h2>
        <h3
          class="text-xl md:text-2xl leading-normal font-cursive font-bold text-center lg:text-left not-italic text-pretty mt-6 mb-2.5 md:my-4.5 lg:my-5"
        >
          {{ sessions.subTitle }}
        </h3>
        <base-list type="ul" variant="session-list">
          <li v-for="model in sessions.models" :key="model.name">
            <base-card variant="card-session">
              <h4
                class="text-xl md:text-[1.375rem] leading-normal font-extrabold not-italic font-cursive tracking-wide mt-0 mx-0 mb-3.5 md:mb-4 lg:mb-5"
              >
                {{ model.name }}
              </h4>
              <nav
                class="w-full h-auto flex flex-row flex-nowrap justify-center items-center gap-2.5 md:gap-3.5 lg:gap-4"
                :aria-label="`${model.shortName} Resources`"
              >
                <template v-for="resource in model.resources" :key="model.name">
                  <nuxt-link
                    v-if="resource.language === 'English'"
                    :to="resource.url"
                    target="_blank"
                    class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
                    external
                    v-tooltip.bottom="
                      `Watch ${model.shortName} ${resource.type}`
                    "
                  >
                    <span class="mr-1 md:mr-1.5">
                      <font-awesome icon="fa-solid fa-video" />
                    </span>
                    {{ `${resource.type} (${resource.language})` }}</nuxt-link
                  >
                  <nuxt-link
                    v-else-if="resource.language === 'Español'"
                    :to="resource.url"
                    lang="es"
                    target="_blank"
                    class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
                    external
                    v-tooltip.bottom="
                      `Mira el ${resource.type.toLowerCase()} del ${model.shortNameEs}`
                    "
                  >
                    <span class="mr-1 md:mr-1.5">
                      <font-awesome icon="fa-solid fa-video" />
                    </span>
                    {{ `${resource.type} (${resource.language})` }}</nuxt-link
                  >
                  <nuxt-link
                    v-else
                    :to="resource.url"
                    target="_blank"
                    class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
                    external
                    v-tooltip.bottom="
                      `View ${model.shortName} ${resource.type}`
                    "
                  >
                    <span class="mr-1 md:mr-1.5">
                      <font-awesome icon="fa-solid fa-map" />
                    </span>
                    {{ `${resource.type} (${resource.file})` }}</nuxt-link
                  >
                </template>
              </nav>
            </base-card>
          </li>
        </base-list>
        <div
          class="grid grid-cols-1 gap-3 md:gap-4 lg:gap-5 mt-6 md:mt-7 lg:mt-8 xl:mt-10 place-content-center place-items-center"
        >
          <p
            class="text-lg md:text-xl leading-normal text-center md:text-left mt-2.5 md:mt-3.5 font-sans not-italic font-medium text-pretty"
          >
            {{ sessions.overview.title }}
            <nuxt-link
              :to="sessions.overview.url"
              target="_blank"
              class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
              external
              v-tooltip.right="'Pastorate Models\' Summary'"
            >
              <span class="mr-1 md:mr-1.5">
                <font-awesome icon="fa-solid fa-book-open-reader" />
              </span>
              {{ sessions.overview.text }}</nuxt-link
            >
          </p>

          <p
            class="text-lg md:text-xl leading-normal text-center md:text-left mt-2.5 md:mt-3.5 font-sans not-italic font-medium text-pretty"
          >
            {{ sessions.feedback.title }}
            <nuxt-link
              :to="`https://www.esacredheart.org/docs/${sessions.feedback.file}`"
              target="_blank"
              class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
              external
              v-tooltip.bottom="'KPL\'s Response to Restructuring Survey'"
            >
              <span class="mr-1 md:mr-1.5">
                <font-awesome icon="fa-light fa-file" />
              </span>
              {{ sessions.feedback.text }}
            </nuxt-link>
          </p>

          <p
            class="text-lg md:text-xl leading-normal text-center md:text-left mt-2.5 md:mt-3.5 font-sans not-italic font-medium text-pretty"
          >
            <span class="mr-1 md:mr-1.5">
              <font-awesome icon="fa-solid fa-check" />
            </span>
            Complete the Parishioner Survey by
            <span class="font-bold underline">{{
              useLocaleDate(new Date(`${prep.bullets[2]?.date}`))
            }}</span
            >:
            <nuxt-link
              :to="prep.bullets[2]?.url"
              target="_blank"
              class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
              external
              v-tooltip.right="'Complete Survey'"
            >
              {{ prep.bullets[2]?.urlTitle }}</nuxt-link
            >
          </p>
        </div>
      </div>
    </base-section>
    <base-section
      class="bg-prep py-12 px-5 md:py-15 md:px-0 lg:py-18 xl:p-22.5"
      id="prep"
    >
      <div class="grid grid-cols-1">
        <h2
          class="font-cursive text-2xl md:text-3xl leading-normal font-bold not-italic text-center mb-8 md:mb-9 lg:mb-10"
        >
          {{ prep.title }}
        </h2>

        <base-list type="ol" variant="prep-list">
          <base-list-item
            v-for="item in prep.bullets"
            :key="item.name.toLowerCase()"
            variant="prep"
          >
            <lazy-nuxt-img
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
              @handle-show="displayPrayDisclosure"
            >
              <template #default>
                <p>
                  <strong class="text-base md:text-lg">{{ item.name }}</strong>
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
                @handle-show="displayReviewDisclosure"
              >
                <template #default>
                  <p>
                    <strong class="text-base md:text-lg">{{
                      item.name
                    }}</strong>
                    <span class="hidden md:inline">
                      {{ item.text }}
                    </span>
                    <span class="list-item md:hidden">
                      {{ item.mobileText }}
                    </span>

                    <nuxt-link
                      :to="item.url"
                      v-tooltip.bottom="'Planning Area 10 Videos'"
                      target="_blank"
                      external
                      class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
                      >{{ item.urlTitle }}</nuxt-link
                    >
                  </p>
                </template>
              </base-disclosure>
            </template>

            <template v-if="item.name === 'Give'">
              <base-disclosure
                :btn-label="item.name"
                :show="showGive"
                @handle-show="displayGiveDisclosure"
              >
                <template #default>
                  <p>
                    <strong class="text-base md:text-lg">{{
                      item.name
                    }}</strong>
                    <span class="hidden md:inline">
                      {{ item.text }}
                    </span>
                    <span class="list-item md:hidden">
                      {{ item.mobileText }}
                    </span>
                    <nuxt-link
                      :to="item.url"
                      v-tooltip="'Post Listening Session Survey'"
                      target="_blank"
                      external
                      class="font-semibold italic hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
                      >{{ item.urlTitle }}</nuxt-link
                    >
                    <span class="hidden md:inline">
                      {{ item.lastLine }}
                      <time :datetime="item.date">
                        {{ useLocaleDate(new Date(`${item.date}`)) }}</time
                      >.
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
import { useLocaleDate } from "@/composables/useLocale";
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
const showGive = ref(true);

onMounted(() => {
  currentYear.value = new Date().getFullYear();
});

const displayPrayDisclosure = () => (showPray.value = !showPray.value);

const displayReviewDisclosure = () => (showReview.value = !showReview.value);

const displayGiveDisclosure = () => (showGive.value = !showGive.value);

const sortedPCCPeople = computed(() => {
  return sortedByLastName(pcc.people);
});

const sortedKPCPeople = computed(() => {
  return sortedByLastName(kpc.people);
});
</script>

<style lang="css" scoped></style>
