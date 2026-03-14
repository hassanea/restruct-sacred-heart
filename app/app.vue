<template>
  <div class="min-h-screen">
    <section class="bg-primary">
      <div>
        <h1 class="text-5xl font-cursive">AOD Restructuring at Sacred Heart</h1>
        <h2 class="font-cursive">Who is involved in our Parish?</h2>
        <div class="grid grid-cols-2 place-content-center place-items-center">
          <div>
            <h2>Primary Points of Contact (PCC):</h2>
            <ul>
              <li>Mary Ann Hannigan</li>
              <li>Dcn. Michael Stach</li>
            </ul>
          </div>

          <div>
            <h2>Key Parish Leaders (KPC):</h2>
            <ul>
              <li>Peter Keating</li>
              <li>Tom Delpup</li>
              <li>JoAnn Eaton</li>
              <li>Jackie Pettitt</li>
              <li>Jayson Graves</li>
            </ul>
          </div>
        </div>

        <div>
          <h2>Parish Listening Sessions</h2>
          <p>
            Every parish in the archdiocese will hold two parish listening
            sessions. At these sessions, we will review potential pastoral
            models and provide feedback. Every parish in the Archdiocese of
            Detroit will experience change in some way because of this process.
            The feedback being asked for now, is which of the proposed changes
            would better serve the people of God. Our parish listening sessions
            will be:
          </p>
          <p>Tuesday, May 19 and Thursday, May 21 from 7:00pm to 9:00pm.</p>
          <p>
            For more information and to register go to restructuring.aod.org. By
            registering you will help us plan for the sessions and receive a
            copy of the presentation and follow-up survey when all listening
            sessions in our planning area are completed. We are part of Planning
            Area 10.
          </p>
          <h3>Preparing for our Parish Listening Sessions</h3>
          <ol class="grid grid-cols-3 place-items-center place-content-center">
            <li class="text-center">
              <nuxt-img
                provider="imagekit"
                src="/hands-praying.svg"
                width="100"
                height="100"
                class="inline-block align-middle size-25 mb-10"
              />
              <p>
                <strong>Pray</strong> the
                <nuxt-link
                  to="https://restructuring.aod.org/#prayer"
                  target="_blank"
                  >Prayer for Restructuring the Archdiocese of
                  Detroit</nuxt-link
                >
                as we go through this process. Intercede for those preparing for
                the listening sessions and those who will attend and provide
                feedback.
              </p>
            </li>
            <li class="text-center">
              <font-awesome
                icon="fa-regular fa-face-thinking"
                class="inline-block align-middle h-25 mb-10"
                size="5x"
              />
              <p>
                <strong>Review</strong> Sacred Heart’s Parish Workbook and the
                workbooks of any other parish in Planning Area 10 that you want
                to know more about. These documents were compiled to provide
                transparency and inform the restructuring process. Understanding
                this information helps each of us enter this time of discernment
                with a deeper sense of awareness around the need for
                restructuring. Workbooks for all parishes in the AOD can be
                found at
                <nuxt-link
                  to="https://restructuring.aod.org/parish-workbooks"
                  target="_blank"
                  >here.</nuxt-link
                >
              </p>
            </li>
            <li class="text-center">
              <nuxt-img
                provider="imagekit"
                src="/personal-reflection.svg"
                width="100"
                height="100"
                class="inline-block align-middle size-25 mb-10"
              />
              <p>
                <strong>Reflect</strong> and take time to name your feelings
                about restructuring. Are you feeling anxious? Fearful? Angry?
                Excited? Hopeful? Ask the Lord to open your heart to be
                receptive to where he is leading our parish and the entire
                Archdiocese of Detroit. Be prepared to share your thoughts about
                how the proposed models will impact the AOD vision of Vibrant
                Parishes, Flourishing Priests and being Mission Ready.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </section>
    <footer
      class="bg-primary text-dark w-full h-auto p-10 border-t-2 border-t-dark text-center"
    >
      <p v-if="copyRightInfo" class="text-lg leading-normal font-bold">
        {{ copyRightInfo }}
      </p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const currentYear = ref(0);
onMounted(() => {
  currentYear.value = new Date().getFullYear();
});

const copyRightInfo = computed(() => {
  if (!currentYear.value) return "";
  else return `Sacred Heart Catholic Church © Copyright ${currentYear.value}`;
});
</script>

<style lang="css" scoped></style>
