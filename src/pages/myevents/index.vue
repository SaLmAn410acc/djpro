<template>
  <div>
    <VCard>
      <!-- `z-index: 0` Allows overlapping vertical nav on calendar -->
      <VLayout style="z-index: 0;">
        <!-- 👉 Navigation drawer -->
        <VNavigationDrawer
          v-model="isLeftSidebarOpen"
          width="292"
          absolute
          touchless
          location="start"
          class="calendar-add-event-drawer"
          :temporary="$vuetify.display.mdAndDown"
        >
          <div class="d-flex align-center justify-center pa-2 mb-3">
            <AppDateTimePicker
              :model-value="new Date().toJSON().slice(0, 10)"
              :config="{ inline: true }"
              class="calendar-date-picker"
              @input="jumpToDate($event.target.value)"
            />
          </div>
        </VNavigationDrawer>

        <VMain>
          <VCard flat>
            <FullCalendar
              ref="refCalendar"
              :options="calendarOptions"
            />
          </VCard>
        </VMain>
      </VLayout>
    </VCard>
    <CalendarEventHandler
      v-model:isDrawerOpen="isEventHandlerSidebarActive"
      :event="event"
      @add-event="addEvent"
      @update-event="updateEvent"
      @remove-event="removeEvent"
    />

    <VNavigationDrawer
      v-model="drawer"
      temporary
      location="end"
      width="1400"
      class="drawer-above-application"
    >
      <div class="pa-4 pa-md-5 ">
        <VRow class="align-center">
          <VCol>
            <h3 class="text-h4">
              Event Details
            </h3>
          </VCol>
          <VCol class="text-end">
            <DialogCLoseBtn @click="drawer = !drawer" />
          </VCol>
        </VRow>

        <VRow justify="center">
          <VCol
            class="text-center"
            cols="12"
            md="7"
            lg="6"
            xl="5"
          >
            <h1 class="text-h2 font-weight-bold">
              Welcome
            </h1>
            <p class="py-3">
              You are on the screen with your new event. Please select the performer and fill in additional information to finish setting up your event
            </p>
          </VCol>
        </VRow>

        <VRow>
          <VCard
            variant="flat"
            class="mx-auto border"
            width="1200"
          >
            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h1 class="text-h3">
                Performer
              </h1>
            </div>

            <div class="py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <VRow class="mb-10 mt-5 mt-sm-0">
                <VCol
                  cols="12"
                  md="4"
                  class="border text-center py-8"
                >
                  <img src="../../assets/images/calender-dj/dj-first.png">
                  <h3 class="text-h4 font-weight-bold">
                    Anthony Perez
                  </h3>
                  <h6 class="text-subtitle-2 text-font-medium">
                    DJ Tony One
                  </h6>
                  <div class="py-3"> 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="19"
                      viewBox="0 0 117 19"
                      fill="none"
                    >
                      <path
                        d="M3.63316 19L5.18517 11.9738L0 7.24956L6.84136 6.62537L9.50998 0L12.1786 6.62537L19.02 7.24956L13.8348 11.9738L15.3868 19L9.50998 15.2723L3.63316 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M27.9105 19L29.4625 11.9738L24.2773 7.24956L31.1187 6.62537L33.7873 0L36.4559 6.62537L43.2973 7.24956L38.1121 11.9738L39.6641 19L33.7873 15.2723L27.9105 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M52.1908 19L53.7428 11.9738L48.5576 7.24956L55.399 6.62537L58.0676 0L60.7362 6.62537L67.5776 7.24956L62.3924 11.9738L63.9444 19L58.0676 15.2723L52.1908 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M76.4691 19L78.0211 11.9738L72.8359 7.24956L79.6773 6.62537L82.3459 0L85.0145 6.62537L91.8559 7.24956L86.6707 11.9738L88.2227 19L82.3459 15.2723L76.4691 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M101.614 19L103.166 11.9738L97.9805 7.24956L104.822 6.62537L107.49 0L110.159 6.62537L117 7.24956L111.815 11.9738L113.367 19L107.49 15.2723L101.614 19Z"
                        fill="#E8B840"
                      />
                    </svg>
                  </div>

                  <div>
                    <VIcon icon="tabler:brand-facebook" />
                    <VIcon icon="tabler:brand-instagram" />
                    <VIcon icon="tabler:brand-pinterest" />
                  </div>

                  <VRow
                    justify="center"
                    class="py-4"
                  >
                    <VBtn
                      variant="flat"
                      class="my-3 accpedtedBtn px-8"
                      density="comfortable"
                      v-bind="props"
                    >
                      Select the DJ
                    </VBtn>
                    <VBtn
                      variant="outlined"
                      color="#000"
                      class="blackBtn me-2 ms-4 my-3"
                      density="comfortable"
                    >
                      More Details
                    </VBtn>
                  </VRow>
                </VCol>
               
                <VCol
                  cols="12"
                  md="8"
                  class="border pa-8"
                >
                  <h1 class="text-h5 font-weight-bold mb-2">
                    About
                  </h1>
                  <p class="text-black">
                    Hello, and let me introduce myself. My name is Anthony Perez, also known as DJ Tony One. I am the owner and founder of On the Go DJ Pro. I’ve been djing now for well over 15 years and in that 15 year’s time I have done over 3000 events ranging from wedding receptions; to birthday parties; the popular sweet 16; debutant balls; military balls; backyard parties; anniversaries; divorce parties (yes, divorce parties); themed events such as 70’s, 80’s, and 90’s, etc. and etc. At On the Go DJ Pro, we do it all.
                  </p>
                  <p class="text-black">
                    As the owner of On The Go DJ Pro, I pride myself on literally hand-selecting and training only the very best DJ’s for my client’s parties or special ceremonies and events. I decided to get into the DJ business because I was tired of hearing about terrible DJ services and I always had a lot of good valuable feedback on my own personal djing skills and abilities. I wanted to find other DJ’s like myself to bring life to any party or event, training them to do events the way that I do them.
                  </p>
                </VCol>
              </VRow>

              <VRow class="mb-10">
                <VCol
                  cols="12"
                  md="4"
                  class="border text-center py-8"
                >
                  <img src="../../assets/images/calender-dj/dj-first.png">
                  <h3 class="text-h4 font-weight-bold">
                    Deshon Lee
                  </h3>
                  <h6 class="text-subtitle-2 text-font-medium">
                    DJ Deshon
                  </h6>
                  <div class="py-3"> 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="19"
                      viewBox="0 0 117 19"
                      fill="none"
                    >
                      <path
                        d="M3.63316 19L5.18517 11.9738L0 7.24956L6.84136 6.62537L9.50998 0L12.1786 6.62537L19.02 7.24956L13.8348 11.9738L15.3868 19L9.50998 15.2723L3.63316 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M27.9105 19L29.4625 11.9738L24.2773 7.24956L31.1187 6.62537L33.7873 0L36.4559 6.62537L43.2973 7.24956L38.1121 11.9738L39.6641 19L33.7873 15.2723L27.9105 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M52.1908 19L53.7428 11.9738L48.5576 7.24956L55.399 6.62537L58.0676 0L60.7362 6.62537L67.5776 7.24956L62.3924 11.9738L63.9444 19L58.0676 15.2723L52.1908 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M76.4691 19L78.0211 11.9738L72.8359 7.24956L79.6773 6.62537L82.3459 0L85.0145 6.62537L91.8559 7.24956L86.6707 11.9738L88.2227 19L82.3459 15.2723L76.4691 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M101.614 19L103.166 11.9738L97.9805 7.24956L104.822 6.62537L107.49 0L110.159 6.62537L117 7.24956L111.815 11.9738L113.367 19L107.49 15.2723L101.614 19Z"
                        fill="#E8B840"
                      />
                    </svg>
                  </div>

                  <div>
                    <VIcon icon="tabler:brand-facebook" />
                    <VIcon icon="tabler:brand-instagram" />
                    <VIcon icon="tabler:brand-pinterest" />
                  </div>

                  <VRow
                    justify="center"
                    class="py-4"
                  >
                    <VBtn
                      variant="flat"
                      class="my-3 accpedtedBtn px-8"
                      density="comfortable"
                      v-bind="props"
                    >
                      Select the DJ
                    </VBtn>
                    <VBtn
                      variant="outlined"
                      color="#000"
                      class="blackBtn me-2 ms-4 my-3"
                      density="comfortable"
                    >
                      More Details
                    </VBtn>
                  </VRow>
                </VCol>
               
                <VCol
                  cols="12"
                  md="8"
                  class="border pa-8"
                >
                  <h1 class="text-h5 font-weight-bold mb-2">
                    About
                  </h1>
                  <p class="text-black">
                    Growing up in Los Angeles I developed a love for all different types of music. Listening to what was hot on the radio and oldies and funk with my Grandparents on long drives. My want for becoming a DJ came from my love of parties and the dancing that came with it. I wanted to be the one who kept everyone on their feet, who kept a smile on their faces and had everyone wanting more. 
                  </p>
                  <p class="text-black">
                    My true love is spinning hip hop, old and new. I am the one that will have your head bobbing and your hips moving!
                  </p>
                </VCol>
              </VRow>

              <VRow class="mb-10">
                <VCol
                  cols="12"
                  md="4"
                  class="border text-center py-8"
                >
                  <img src="../../assets/images/calender-dj/dj-first.png">
                  <h3 class="text-h4 font-weight-bold">
                    Ray Ramirez
                  </h3>
                  <h6 class="text-subtitle-2 text-font-medium">
                    DJ Ray Ramirez
                  </h6>
                  <div class="py-3"> 
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="117"
                      height="19"
                      viewBox="0 0 117 19"
                      fill="none"
                    >
                      <path
                        d="M3.63316 19L5.18517 11.9738L0 7.24956L6.84136 6.62537L9.50998 0L12.1786 6.62537L19.02 7.24956L13.8348 11.9738L15.3868 19L9.50998 15.2723L3.63316 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M27.9105 19L29.4625 11.9738L24.2773 7.24956L31.1187 6.62537L33.7873 0L36.4559 6.62537L43.2973 7.24956L38.1121 11.9738L39.6641 19L33.7873 15.2723L27.9105 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M52.1908 19L53.7428 11.9738L48.5576 7.24956L55.399 6.62537L58.0676 0L60.7362 6.62537L67.5776 7.24956L62.3924 11.9738L63.9444 19L58.0676 15.2723L52.1908 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M76.4691 19L78.0211 11.9738L72.8359 7.24956L79.6773 6.62537L82.3459 0L85.0145 6.62537L91.8559 7.24956L86.6707 11.9738L88.2227 19L82.3459 15.2723L76.4691 19Z"
                        fill="#E8B840"
                      />
                      <path
                        d="M101.614 19L103.166 11.9738L97.9805 7.24956L104.822 6.62537L107.49 0L110.159 6.62537L117 7.24956L111.815 11.9738L113.367 19L107.49 15.2723L101.614 19Z"
                        fill="#E8B840"
                      />
                    </svg>
                  </div>

                  <div>
                    <VIcon icon="tabler:brand-facebook" />
                    <VIcon icon="tabler:brand-instagram" />
                    <VIcon icon="tabler:brand-pinterest" />
                  </div>

                  <VRow
                    justify="center"
                    class="py-4"
                  >
                    <VBtn
                      variant="flat"
                      class="my-3 accpedtedBtn px-8"
                      density="comfortable"
                      v-bind="props"
                    >
                      Select the DJ
                    </VBtn>
                    <VBtn
                      variant="outlined"
                      color="#000"
                      class="blackBtn me-2 ms-4 my-3"
                      density="comfortable"
                    >
                      More Details
                    </VBtn>
                  </VRow>
                </VCol>
               
                <VCol
                  cols="12"
                  md="8"
                  class="border pa-8"
                >
                  <h1 class="text-h5 font-weight-bold mb-2">
                    About
                  </h1>
                  <p class="text-black">
                    With his high energy, youthfulness, and skills behind the turntables and microphone Ray Ramirez (DJ Who’s Next) has quickly become one of the hottest wedding DJ/MC’s in Southern California. Ray has dominated the club scene in major cities throughout the US, and now he’s taking the wedding industry by storm! His appreciation for music of all decades fives him a skill set unrivaled by others. Your guests of all generations will love his music and won’t be able to stop dancing! 
                  </p>
                  <p class="text-black">
                    As a former United States Marine, Ray is also very popular with the local divisions stationed nearby and performs many annual events for the United States Navy and Marine Corps. You may also recognize him from his featured dance sets on 105.9 Sacramento and Power 106 in LA.
                  </p>
                </VCol>
              </VRow>
            </div>
          </VCard>
        </VRow>

        <VRow class="mt-10 ">
          <VCard
            variant="flat"
            class="mx-auto border"
            width="1200"
          >
            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h1 class="text-h3">
                Additional Settings
              </h1>
            </div>

            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <VColorPicker
                v-model="picker"
                elevation="5"
              />
            </div>

           


            <div class="border-b py-4 py-md-4 py-lg-4 px-6 px-md-8 px-lg-12 ">
              <h1 class="text-h3 py-5">
                Static Monogram & Gobo
              </h1>
              <div class="edit-gallery-images-wrap my-6">
                <VRow
                  class="mb-6"
                  dense
                >
                  <template
                    v-for="n in 5"
                    :key="n"
                  >
                    <VCol
                      class="gallery-image-edit"
                      cols="6"
                      md="3"
                      lg
                    >
                      <VImg
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        cover
                        class="rounded-lg bg-grey-lighten-2"
                      >
                        <template #placeholder>
                          <VRow
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <VProgressCircular
                              indeterminate
                              color="grey-lighten-5"
                            />
                          </VRow>
                        </template>
                      </VImg>
                    


                      <VImg class="remove-image-btn ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <rect
                            width="22"
                            height="22"
                            rx="11"
                            fill="white"
                          />
                          <circle
                            cx="11"
                            cy="11"
                            r="7"
                            stroke="#6A8AFA"
                            stroke-width="2"
                          />
                        </svg>
                      </VImg>
                    </VCol>
                    <div
                      v-if="(n % 5) === 0"
                      class="w-100"
                    />
                  </template>
                </VRow>
                  
                <!--
                  <VBtn density="compact" variant="text" color="black" size="x-small">
                  <VIcon class="me-2">material-symbols:library-music-outline</VIcon>
                  Upload New Image
                  </VBtn> 
                -->
              </div>

              <VRow>
                <div class="custom-date-picker-sec me-6 ms-3 my-5">
                  <AppDateTimePicker
                    v-model="startdate"
                    label="Date"
                    class="datepicker mb-5"
                  />
                  <div class="arrow2" />
                </div>
                

              
                <div class="name-field-wrapper">
                  <AppTextField
                    v-model="firstName"
                    label="Name"
                    density="comfortable"
                    class="my-5 field-wrapper-height"
                  />
                </div>
              </VRow>
            </div>

            <div class="border-b py-4 py-md-4 py-lg-4 px-6 px-md-8 px-lg-12 ">
              <h1 class="text-h3 py-5">
                Animated Monogram & Gobo
              </h1>
              <div class="edit-gallery-images-wrap my-6">
                <VRow
                  class="mb-6"
                  dense
                >
                  <template
                    v-for="n in 5"
                    :key="n"
                  >
                    <VCol
                      class="gallery-image-edit"
                      cols="6"
                      md="3"
                      lg
                    >
                      <VImg
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        cover
                        class="rounded-lg bg-grey-lighten-2"
                      >
                        <template #placeholder>
                          <VRow
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <VProgressCircular
                              indeterminate
                              color="grey-lighten-5"
                            />
                          </VRow>
                        </template>
                      </VImg>
                    


                      <VImg class="remove-image-btn ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <rect
                            width="22"
                            height="22"
                            rx="11"
                            fill="white"
                          />
                          <circle
                            cx="11"
                            cy="11"
                            r="7"
                            stroke="#6A8AFA"
                            stroke-width="2"
                          />
                        </svg>
                      </VImg>
                    </VCol>
                    <div
                      v-if="(n % 5) === 0"
                      class="w-100"
                    />
                  </template>
                </VRow>
                  
                <!--
                  <VBtn density="compact" variant="text" color="black" size="x-small">
                  <VIcon class="me-2">material-symbols:library-music-outline</VIcon>
                  Upload New Image
                  </VBtn> 
                -->
              </div>

              <VRow>
                <div class="custom-date-picker-sec me-6 ms-3 my-5">
                  <AppDateTimePicker
                    v-model="startdate"
                    label="Date"
                    class="datepicker mb-5"
                  />
                  <div class="arrow2" />
                </div>
                

              
                <div class="name-field-wrapper">
                  <AppTextField
                    v-model="firstName"
                    label="Name"
                    density="comfortable"
                    class="my-5 field-wrapper-height"
                  />
                </div>
              </VRow>
            </div>
          </VCard>
        </VRow>

        <VRow
          justify="center"
          class="my-10"
        >
          <VBtn x-large>
            <span class="px-10">Finish</span>
          </VBtn>
        </VRow>
      </div>
    </VNavigationDrawer>
  </div>
</template>

<script setup>
import FullCalendar from '@fullcalendar/vue3'
import {
  blankEvent,
  useCalendar,
} from '@/views/apps/calendar/useCalendar'
import { useCalendarStore } from '@/store/useCalendarStore'
import { useResponsiveLeftSidebar } from '@core/composable/useResponsiveSidebar'

import DialogCLoseBtn from '@/@core/components/DialogCloseBtn.vue'


// Components
import CalendarEventHandler from '@/views/apps/calendar/CalendarEventHandler.vue'
import { ref } from 'vue'

const drawer = ref(true)
const picker = ref(null)

const store = useCalendarStore()

console.log(store.value)

// 👉 Event
const event = ref(structuredClone(blankEvent))
const isEventHandlerSidebarActive = ref(false)

watch(isEventHandlerSidebarActive, val => {
  if (!val)
    event.value = structuredClone(blankEvent)
})

const { isLeftSidebarOpen } = useResponsiveLeftSidebar()
const { refCalendar, calendarOptions, addEvent, updateEvent, removeEvent, jumpToDate } = useCalendar(event, isEventHandlerSidebarActive, isLeftSidebarOpen)

// 👉 Check all
const checkAll = computed({
  get: () => store.selectedCalendars.length === store.availableCalendars.length,
  set: val => {
    if (val)
      store.selectedCalendars = store.availableCalendars.map(i => i.label)
    else if (store.selectedCalendars.length === store.availableCalendars.length)
      store.selectedCalendars = []
  },
})
</script>



<style lang="scss" scoped>
.v-layout {
  overflow: visible !important;

  .v-card {
    overflow: visible;
  }
}

.accpedtedBtn{
  border-radius: 10px;
}

.blackBtn.v-btn--variant-outlined:not([class*=text-]) {
    border-color:  #fff;
    border-radius: 10px;
}

.name-field-wrapper{
  max-width: 180px;
      width: 100%;
    
}

.name-field-wrapper .v-field__field{
  height: 40px;
}


// .field-wrapper-height.v-field.v-field--center-affix.v-field--no-label.v-field--variant-outlined.v-theme--light.v-locale--is-ltr {
//     height: 41px;
// }

.custom-date-picker-sec{
    position: relative;
  display: inline-block; /* Adjust display property based on your layout */
      max-width: 180px;
      width: 100%;
}

.arrow2 {
  position: absolute;
      top: 57%;
    right: 10px;/* Adjust the value based on your design */
  width: 0;
  height: 0;
  border: 6px solid transparent;
      border-top-color: #000; /* Adjust the color based on your design */
  transform: translateY(-50%);
}
</style>


<style lang="scss">
@use "@core/scss/template/libs/full-calendar";



.edit-gallery-images-wrap .gallery-image-edit {
  position: relative;
}



.edit-gallery-images-wrap .gallery-image-edit .remove-image-btn {
    position: absolute;
       top: 10px;
    right: 10px;
    cursor: pointer;

}

.calendars-checkbox {
  .v-label {
    color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));
    opacity: var(--v-high-emphasis-opacity);
  }
}

.calendar-add-event-drawer {
  &.v-navigation-drawer:not(.v-navigation-drawer--temporary) {
    border-end-start-radius: 0.375rem;
    border-start-start-radius: 0.375rem;
  }
}

.calendar-date-picker {
  display: none;

  +.flatpickr-input {
    +.flatpickr-calendar.inline {
      border: none;
      box-shadow: none;

      .flatpickr-months {
        border-block-end: none;
      }
    }
  }

  &~.flatpickr-calendar .flatpickr-weekdays {
    margin-block: 0 4px;
  }
}
</style>

