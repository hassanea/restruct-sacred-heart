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
      class="pt-7 pb-10 px-7 md:pt-10 md:pb-12 md:px-10 lg:p-12 xl:p-14 bg-gray-400"
      id="models"
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
            {{ sessions.refine.title }}
            <nuxt-link
              :to="sessions.refine.url"
              target="_blank"
              class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
              external
              v-tooltip.right="'Watch Video'"
            >
              <span class="mr-1 md:mr-1.5">
                <font-awesome icon="fa-brands fa-youtube" />
              </span>
              {{ sessions.refine.text }}</nuxt-link
            >
          </p>

          <p
            class="text-lg md:text-xl leading-normal text-center md:text-left mt-2.5 md:mt-3.5 font-sans not-italic font-medium text-pretty"
          >
            {{ sessions.revision.title }}
            <nuxt-link
              :to="sessions.revision.url"
              target="_blank"
              class="font-semibold hover:bg-tertiary hover:text-light hover:border-4 hover:border-solid hover:border-lime-600 hover:rounded-sm focus:outline-0 focus:border-t-0 focus:border-b-3 focus:border-l-0 focus:border-r-0 focus:border-solid focus:border-gold box-shadow transition-shadow"
              external
              v-tooltip.right="'Review models E & F'"
            >
              <span class="mr-1 md:mr-1.5">
                <font-awesome icon="fa-solid fa-eyes" />
              </span>
              {{ sessions.revision.text }}</nuxt-link
            >
          </p>

          <p
            class="text-lg md:text-xl leading-normal text-center md:text-left mt-2.5 md:mt-3.5 font-sans not-italic font-medium text-pretty"
          >
            {{ sessions.modelFeedback.title }}
            <nuxt-link
              :to="sessions.modelFeedback.url"
              target="_blank"
              class="inline-block bg-tertiary text-light not-italic leading-normal tracking-wide hover:bg-light hover:text-tertiary hover:border-2 hover:border-solid hover:border-tertiary focus:outline-0 focus:border-4 focus:border-solid focus:border-gold rounded-lg p-4 font-semibold cursor-pointer text-lg md:text-xl transition-shadow"
              external
              v-tooltip.right="'Provide your Feedback'"
            >
              {{ sessions.modelFeedback.text }}</nuxt-link
            >
          </p>

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
        </div>
      </div>
    </base-section>
    <base-section
      class="bg-prep py-12 px-7 md:py-15 md:px-14 lg:py-18 xl:p-22.5"
      id="pray"
    >
      <div class="grid grid-cols-1 gap-3.5 md:gap-4.5">
        <nuxt-img
          provider="imagekit"
          :src="pray.icon"
          alt=""
          width="72"
          height="72"
          class="inline-block align-middle mx-auto size-18"
        />
        <h2
          class="font-cursive uppercase tracking-wide text-2xl md:text-3xl leading-normal font-bold not-italic text-center"
        >
          {{ pray.title }}
        </h2>
        <nuxt-link
          :to="`http://www.esacredheart.org/docs/${pray.prayer.file}`"
          target="_blank"
          class="inline-block cursor-pointer focus:outline-0 focus:border-b-3 focus:border-solid focus:border-gold"
          external
          v-tooltip.bottom="'View Prayer for Archdiocesan Restructuring'"
        >
          <nuxt-img
            provider="imagekit"
            format="avif"
            :src="pray.prayer.image"
            :alt="pray.prayer.alt"
            loading="lazy"
            preload
            width="800"
            height="1000"
            class="block mx-auto object-cover max-w-full h-auto rounded-lg hover:brightness-120 shadow-xl shadow-tertiary"
          />
        </nuxt-link>
      </div>
    </base-section>
  </base-main>
  <base-footer :year="currentYear"></base-footer>
</template>

<script lang="ts" setup>
import data from "@/assets/data/data.json";
import { sortedByLastName } from "@/utils/index";
const { meta, mainHead, subHead, navItems, pcc, kpc, sessions, pray } = data;

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
