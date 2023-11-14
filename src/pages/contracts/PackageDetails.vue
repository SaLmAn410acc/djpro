<template>
  <div class="add-product-wrap my-6">
    <VDialog
      v-model="acceptedValue"
      width="500"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="acceptedValue = !acceptedValue" />

      <!-- Dialog Content -->
      <VCard class="modal-card-wrapper pa-6 pa-md-6 pa-lg-8 pa-xl-12 ">
        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="66"
            height="37"
            viewBox="0 0 66 37"
            fill="none"
          >
            <path
              d="M15.7219 36.1702L0.806625 21.55C0.248834 21.0032 -0.0196682 20.3498 0.00112042 19.5897C0.021909 18.8297 0.311199 18.1763 0.868991 17.6296C1.42678 17.0828 2.09339 16.8095 2.8688 16.8095C3.64422 16.8095 4.31082 17.0828 4.86861 17.6296L17.6807 30.2686L21.6802 34.189L19.6787 36.1702C19.1078 36.7298 18.4451 37.0063 17.6906 36.9999C16.9359 36.9935 16.2797 36.7169 15.7219 36.1702ZM29.6526 35.7085L14.7176 21.069C14.1598 20.5223 13.8947 19.869 13.922 19.1089C13.9494 18.3488 14.2484 17.689 14.8193 17.1294C15.3771 16.5955 16.0437 16.3286 16.8191 16.3286C17.5945 16.3286 18.2545 16.5955 18.7992 17.1294L31.631 29.7877L61.1638 0.85858C61.7085 0.311826 62.3686 0.0352338 63.144 0.0287988C63.9194 0.0224176 64.5925 0.292576 65.1633 0.839276C65.7211 1.38603 66 2.04266 66 2.80916C66 3.57562 65.7211 4.23222 65.1633 4.77897L33.6094 35.7085C33.0516 36.2552 32.3921 36.5286 31.631 36.5286C30.8698 36.5286 30.2104 36.2552 29.6526 35.7085ZM31.631 23.4927L27.651 19.5723L46.7818 0.82005C47.3396 0.273351 48.0062 0 48.7816 0C49.557 0 50.2236 0.273351 50.7814 0.82005C51.3261 1.3668 51.5984 2.02022 51.5984 2.78029C51.5984 3.54036 51.3261 4.18734 50.7814 4.72122L31.631 23.4927Z"
              fill="#6A8AFA"
            />
          </svg>

          <h1 class="text-h2  pt-5">
            Your Contract Was Successfully Upgraded
          </h1>
          <p class="text-body-2 my-5 pb-4">
            Please contact us if you have any questions
          </p>

          <VBtn
            size="large"
            class="proposal-btn"
            @click="acceptedValue = false"
          >
            <span class="px-5">
              Go to My Contracts
            </span>
          </VBtn>
        </div>
        

        <!--
          <VCardText class="d-flex justify-end">
          <VBtn @click="rejectedValue = false">
          I accept
          </VBtn>
          </VCardText> 
        -->
      </VCard>
    </VDialog>



    <VRow
      class="border-b pb-6 mb-6"
      align="center"
      no-gutters
    >
      <VCol
        cols="12"
        sm="6"
      >
        <VBreadcrumbs
          :items="breadcrumbs"
          class="px-0"
          active-class="text-darken"
        >
          <template #divider>
            <VIcon icon="quill:arrow-right" />
          </template>
        </VBreadcrumbs>
      </VCol>
      <VCol
        cols="12"
        sm="6"
      >
        <div class="d-flex justify-start justify-sm-end">
          <VBtn
            class="font-weight-regular confirmBtn"
            color="primary"
            density="comfortable"
            @click="acceptedValue = !acceptedValue"
          >
            Confirm Changes
          </VBtn>
          <VBtn
            variant="outlined"
            color="#000"
            class="blackBtn me-5 ms-3 "
            density="comfortable"
          >
            Cancel
          </VBtn>
          <!--
            <VBtn
            :to="{
            name: 'inquiries-create-proposal',
            params: { id: inquiry?.id },
            }"
            class="font-weight-regular"
            color="primary"
            >
            Create a Proposal
            </VBtn> 
          -->
        </div>
      </VCol>
      <VCol
        cols="12"
        lg="6"
      />
    </VRow>

    
    
    
    <VCard variant="text">
      <VTabs v-model="currentTab">
        <VTab>Wedding DJ Packages</VTab>
        <VTab>Photo Booth Packages</VTab>
        <VTab>Photography Reception Packages</VTab>
      </VTabs>

      <VWindow v-model="currentTab">
        <VWindowItem>
          <!-- Wedding DJ Packages -->
          <VCard
            variant="flat"
            class="mx-auto cardBg border my-5"
          >
            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h4 class="text-h3">
                DJ Services for Ceremony and Reception
              </h4>
            </div>

            <div class="border-b py-8 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <VRow>
                <div class="custom-date-picker me-6">
                  <AppDateTimePicker
                    v-model="ceremonystarttime"
                    label="Ceremony Start Time"
                    class="datepicker"
                    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                  />
                  <div class="arrow" />
                </div>

                <div class="custom-date-picker">
                  <AppDateTimePicker
                    v-model="ceremonyendtime"
                    label="Reception End Time"
                    class="datepicker"
                    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                  />
                  <div class="arrow" />
                </div>
              </VRow>
            </div>


            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h4 class="text-h3">
                DJ Scheduling
              </h4>
            </div>


            <div class="border-b py-8 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <VRow>
                <div class="custom-date-picker-sec me-6">
                  <AppDateTimePicker
                    v-model="startdate"
                    label="Start Date"
                    class="datepicker mb-5"
                  />
                  <div class="arrow2" />
                </div>

                <div class="custom-date-picker-sec me-6">
                  <AppDateTimePicker
                    v-model="starttime"
                    label="Start Time"
                    class="datepicker mb-5"
                    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                  />
                  <div class="arrow2" />
                </div>

                <div class="custom-date-picker-sec me-15 ">
                  <AppDateTimePicker
                    v-model="endtime"
                    label="End Time"
                    class="datepicker mb-5"
                    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                  />
                  <div class="arrow2" />
                </div>

                <div>
                  <h3 class="mb-3 font-weight-medium text-h5">
                    Total: <span class="font-weight-bold">9 hours</span>
                  </h3>
                  <h5>+5 additional hours</h5>
                  <small>Will charge $150 for each additional hour over 4 hours for the event</small>
                </div>
              </VRow>
            </div>

            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h4 class="text-h3">
                Wedding DJ Packages
              </h4>
            </div>

            <div class="px-6 px-md-8 px-lg-12 mb-6 py-6 py-md-8 py-lg-12">
              <VTable
                class="packages-table mb-8 mb-lg-16"
                density="default"
                style="background: transparent"
              >
                <thead>
                  <tr>
                    <th />
                    <th>Product Photo</th>
                    <th>Product Name</th>
                    <th class="text-end">
                      Price (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Reception Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          4 hours of Professional Wedding Reception DJ/MC services
                        </li>
                        <li>
                          Properly Dressed Wedding DJ
                        </li>
                        <li>
                          Professional Sound System with 2 Speakers
                        </li>
                        <li>
                          Wireless Microphone
                        </li>
                        <li>
                          Lighting Stands or Lighting Truss System
                        </li>
                        <li>
                          Dance Lighting
                        </li>
                        <li>
                          Custom Wedding Timeline and Itinerary
                        </li>
                        <li>Unlimited amounts of songs within or music database</li>
                        <li>Free Set up and Break Down</li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $995.00
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup2">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Reception Package w/Dance Lighting
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          4 hours of Professional Wedding Reception DJ/MC services
                        </li>
                        <li>
                          Properly Dressed Wedding DJ
                        </li>
                        <li>
                          Professional Sound System with 2 Speakers
                        </li>
                        <li>
                          Wireless Microphone
                        </li>
                        <li>
                          Lighting Stands or Lighting Truss System
                        </li>
                        <li>
                          Dance Lighting
                        </li>
                        <li>
                          Custom Wedding Timeline and Itinerary
                        </li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $1195.00
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup3">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Reception Package w/Dance Lighting and 12 Uplights
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          4 hours of Professional Wedding Reception DJ/MC services
                        </li>
                        <li>
                          Properly Dressed Wedding DJ
                        </li>
                        <li>
                          Professional Sound System with 2 Speakers
                        </li>
                        <li>
                          Wireless Microphone
                        </li>
                        <li>
                          Lighting Stands or Lighting Truss System
                        </li>
                        <li>
                          Dance Lighting
                        </li>
                        <li>
                          Custom Wedding Timeline and Itinerary
                        </li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $1395.00
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>

            <div class="border-b border-t py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h4 class="text-h3">
                Enhancements
              </h4>
            </div>

            <div class="px-6 px-md-8 px-lg-12">
              <VTable
                class="text-black"
                density="default"
                style="background: transparent"
              >
                <thead>
                  <tr>
                    <th style="width: 1px" />
                    <th>Product Name</th>
                    <th class="text-end">
                      Price (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected"
                      />
                    </td>
                    <td>
                      <strong>Additional Hour (DJ)</strong>
                    </td>
                    <td class="text-end">
                      <strong>$100.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected2"
                      />
                    </td>
                    <td>
                      <strong>Slide Show Creation</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected3"
                      />
                    </td>
                    <td>
                      <strong>Static Monogram & Gobo</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected4"
                      />
                    </td>
                    <td>
                      <strong>Animated Monogram & Gobo</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected5"
                      />
                    </td>
                    <td>
                      <strong>40-48 Inch Flat Screen W/Stand</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected6"
                      />
                    </td>
                    <td>
                      <strong>Projector & Screen</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected7"
                      />
                    </td>
                    <td>
                      <strong>Full Room Uplighting 24</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected8"
                      />
                    </td>
                    <td>
                      <strong>Karaoke add on</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>
          </VCard>
        </VWindowItem>

        <VWindowItem>
          <!-- Photo Booth Packages -->
          <VCard
            variant="flat"
            class="mx-auto cardBg border my-5"
          >
            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h4 class="text-h3">
                Photo Booth Scheduling
              </h4>
            </div>


            <div class="border-b py-8 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <VRow>
                <div class="custom-date-picker-sec me-6">
                  <AppDateTimePicker
                    v-model="phoneBoothStartDate"
                    label="Start Date"
                    class="datepicker mb-5"
                  />
                  <div class="arrow2" />
                </div>

                <div class="custom-date-picker-sec me-6">
                  <AppDateTimePicker
                    v-model="phoneBoothStartTime"
                    label="Start Time"
                    class="datepicker mb-5"
                    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                  />
                  <div class="arrow2" />
                </div>

                <div class="custom-date-picker-sec me-15 ">
                  <AppDateTimePicker
                    v-model="phoneBoothEndTime"
                    label="End Time"
                    class="datepicker mb-5"
                    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
                  />
                  <div class="arrow2" />
                </div>

                <div>
                  <h3 class="mb-3 font-weight-medium text-h5">
                    Total: <span class="font-weight-bold">9 hours</span>
                  </h3>
                  <h5>+5 additional hours</h5>
                  <small>Will charge $150 for each additional hour over 4 hours for the event</small>
                </div>
              </VRow>
            </div>

            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h4 class="text-h3">
                Photo Booth Packages
              </h4>
            </div>

            <div class="border-b px-6 px-md-8 px-lg-12  py-6 py-md-8 py-lg-12">
              <VTable
                class="packages-table mb-8 mb-lg-16"
                density="default"
                style="background: transparent"
              >
                <thead>
                  <tr>
                    <th />
                    <th>Product Photo</th>
                    <th>Product Name</th>
                    <th class="text-end">
                      Price (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Fundamental Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          2 Hours Must Be Booked Mon-Friday(any me) or Fri-Sun event must end by 4pm
                        </li>
                        <li>
                          Unlimited 2x6 High Quality Photo Strip
                        </li>
                        <li>
                          Custom Design Layout (2 Revision)
                        </li>
                        <li>
                          Prop Box, funning hats, Glasses, Mustaches..Etc.
                        </li>
                        <li>
                          Fun & Professional On Site Photo Booth Technician
                        </li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $995.00
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup2">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Fun Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          2 Hours
                        </li>
                        <li>
                          Unlimited 2x6 High Quality Photo Strip
                        </li>
                        <li>
                          Custom Design Layout (2 Revision)
                        </li>
                        <li>
                          Video Recording
                        </li>
                        <li>
                          Scrapbook and Scrapbooking Stations
                        </li>
                        <li>
                          Thumb drive
                        </li>
                        <li>
                          Prop Box, funning hats, Glasses, Mustaches..Etc. 
                        </li>
                        <li>
                          Fun & Professional On Site Photo Booth Technician. 
                        </li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $1995.00
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup3">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Fun-Tastic Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          4 Hours
                        </li>
                        <li>
                          Unlimited 2x6 High Quality Photo Strip
                        </li>
                        <li>
                          Custom Design Layout (2 Revision)
                        </li>
                        <li>
                          Video Recording
                        </li>
                        <li>
                          Scrapbook and Scrapbooking Stations
                        </li>
                        <li>
                          Thumb drive
                        </li>
                        <li>
                          Prop Box, funning hats, Glasses, Mustaches..Etc. 
                        </li>
                        <li>
                          Fun & Professional On Site Photo Booth Technician. 
                        </li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $1995.00
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup4">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Fabulous Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          5 Hours
                        </li>
                        <li>
                          Unlimited 2x6 High Quality Photo Strip
                        </li>
                        <li>
                          Custom Design Layout (2 Revision)
                        </li>
                        <li>
                          Video Recording
                        </li>
                        <li>
                          Scrapbook and Scrapbooking Stations
                        </li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $1995.00
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>

            
            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h4 class="text-h3">
                Backdrop
              </h4>
            </div>

            
            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <div class="edit-gallery-images-wrap my-6">
                <VRow
                  class="mb-6"
                  dense
                >
                  <template
                    v-for="n in 15"
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
                      <p class="text-black font-weight-bold py-3">
                        Beach
                      </p>
                     

                      <VRadio
                        value="one"
                        class="remove-image-btn radio-bg"
                        color="#5F7CE1"
                      />
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
            </div>

            

            <div class="px-6 px-md-8 px-lg-12">
              <VTable
                class="text-black"
                density="default"
                style="background: transparent"
              >
                <thead>
                  <tr>
                    <th style="width: 1px" />
                    <th>Product Name</th>
                    <th class="text-end">
                      Price (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected"
                      />
                    </td>
                    <td>
                      <strong>Additional Hour (DJ)</strong>
                    </td>
                    <td class="text-end">
                      <strong>$100.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected2"
                      />
                    </td>
                    <td>
                      <strong>Slide Show Creation</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected3"
                      />
                    </td>
                    <td>
                      <strong>Static Monogram & Gobo</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>


                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected4"
                      />
                    </td>
                    <td>
                      <strong>Animated Monogram & Gobo</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected5"
                      />
                    </td>
                    <td>
                      <strong>40-48 Inch Flat Screen W/Stand</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected6"
                      />
                    </td>
                    <td>
                      <strong>Projector & Screen</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected7"
                      />
                    </td>
                    <td>
                      <strong>Full Room Uplighting 24</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>

                  <tr>
                    <td style="width: 1px">
                      <VCheckbox
                        v-model="selected"
                        value="selected8"
                      />
                    </td>
                    <td>
                      <strong>Karaoke add on</strong>
                    </td>
                    <td class="text-end">
                      <strong>$300.00</strong>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>
          </VCard>
        </VWindowItem>

        <VWindowItem>
          <!-- Photography Reception Packages -->
          <VCard
            variant="flat"
            class="mx-auto cardBg border my-5"
          >
            <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 ">
              <h4 class="text-h3">
                Photography Reception Packages
              </h4>
            </div>

            <div class="px-6 px-md-8 px-lg-12 mb-6 py-6 py-md-8 py-lg-12">
              <VTable
                class="packages-table mb-8 mb-lg-16"
                density="default"
                style="background: transparent"
              >
                <thead>
                  <tr>
                    <th />
                    <th>Product Photo</th>
                    <th>Product Name</th>
                    <th class="text-end">
                      Price (USD)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Ruby Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          4 hours of Professional Photography
                        </li>
                        <li>
                          Full Reprinting Rights all of pictures
                        </li>
                        <li>
                          25 Digitally re-touched and edited photos
                        </li>
                        <li>
                          Pictures Delivered on Thumb drive 4-6 weeks
                        </li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $1995.00
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup3">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Emerald Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          6 hours of Professional Photography
                        </li>
                        <li>
                          Full Reprinting Rights all of pictures
                        </li>
                        <li>
                          50 Digitally re-touched and edited photos
                        </li>
                        <li>
                          Pictures Delivered on Thumb drive 4-6 weeks
                        </li>
                      </ul>
                    </td>
                    
                    <td class="text-end">
                      <h5 class="text-h5">
                        $1995.00
                      </h5>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <VRadioGroup v-model="radioGroup3">
                        <VRadio />
                      </VRadioGroup>
                    </td>
                    <td>
                      <img
                        :src="weddingDj"
                        class="rounded"
                      >
                    </td>
                    <td>
                      <h5 class="text-h5 mb-4">
                        Diamond Package
                      </h5>
                      <ul class="text-black ps-5 text-body-2">
                        <li>
                          8 hours of Professional Photography
                        </li>
                        <li>
                          Full Reprinting Rights all of pictures
                        </li>
                        <li>
                          100 Digitally re-touched and edited photos
                        </li>
                        <li>
                          Pictures Delivered 4-8 weeks on Thumb drive 4-8 weeks
                        </li>
                      </ul>
                    </td>
                    <td class="text-end">
                      <h5 class="text-h5">
                        $1995.00
                      </h5>
                    </td>
                  </tr>
                </tbody>
              </VTable>
            </div>
          </VCard>
        </VWindowItem>
      </VWindow>
    </VCard>
  </div>
</template>

<script setup>
import axios from "@axios"
import { useRoute } from "vue-router"
import productPlaceholder from "@images/add-product/product-placeholder.png"
import avatar from "@images/avatars/avatar-1.png"
import weddingDj from "@images/proposals/wedding-dj.png"



const currentTab = ref(0)

const selected = ref([])

const acceptedValue = ref(false)

const route = useRoute()


const updateUser = user_item => {
  inquiry.value.performer = inquiry.value.performer ?? {}
  inquiry.value.performer.firstName = user_item.firstName
  inquiry.value.performer.lastName = user_item.lastName
  inquiry.value.performer.image = user_item.photoUrl
  inquiry.value.performer.id = user_item.userId
}

const usersList = ref([])

const getUsers = async () => {
  try {
    const res = await axios.get("/User/GetList?role=Dj")

    usersList.value = res.data
  } catch (error) {
    console.log(error)
  }
}

const ceremonystarttime= ref('')
const ceremonyendtime = ref('')
const startdate = ref('')
const starttime = ref('')
const endtime = ref('')


const phoneBoothStartDate= ref('')
const phoneBoothStartTime= ref('')
const phoneBoothEndTime= ref('')

const notes1 = ref("")
const notes2 = ref("")
const notes3 = ref("")

const inquiry = ref({})
const radioGroup = ref(1)
const radioGroup2 = ref(1)
const radioGroup3 = ref(1)
const radioGroup4 = ref(1)


const getInquiry = async () => {
  try {
    const res = await axios.get("/Inquiry/GetInquiry?id=" + route.params.slug)

    inquiry.value = res.data
    breadcrumbs.value.push({
      text: inquiry.value?.eventType?.name ?? "Event Type",
      to: "/inquiries/details/" + route.params.slug,
    })
  } catch (error) {
    console.log(error)
  }
}

const updateInquriy = async () => {
  try {
    const res = await axios.post("/Inquiry/Update", inquiry.value)

    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

const breadcrumbs = ref([
  {
    text: "My Contracts",
    disabled: false,
    to: "/contracts",
  },
  {
    text: "Change Packages",
    disabled: true,
    to: "/inquiries",
  },

  // {
  //   text: inquiry.value?.eventType?.name ?? "Event Type",
  //   to: "/inquiries/private-party/" + route.params.slug,
  // },
])

// onMounted(() => {
//   getUsers()
//   getInquiry()
// })
</script>

<style>
.packages-wrap .package-item p:last-of-type {
  margin-bottom: 0;
}
</style>

<style lang="scss">
.edit-gallery-images-wrap .gallery-image-edit {
  position: relative;
}



.edit-gallery-images-wrap .gallery-image-edit .remove-image-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fff;
        width: 19px;
    height: 18px;
  border: 1px solid #5f7ce1;
}


.custom-date-picker {
  position: relative;
  display: inline-block; /* Adjust display property based on your layout */
      max-width: 180px;
      width: 100%;

}

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


.arrow {
  position: absolute;
      top: 74%;
    right: 10px;/* Adjust the value based on your design */
  width: 0;
  height: 0;
  border: 6px solid transparent;
      border-top-color: #000; /* Adjust the color based on your design */
  transform: translateY(-50%);
}


.cardBg{
  border: 2px solid gray;
}

.blackBtn.v-btn--variant-outlined:not([class*=text-]) {
    border-color:  #000;
    border-radius: 10px;
}

.confirmBtn{
  border-radius: 10px;
}

tbody tr td:first-of-type{
     width: 50px;
}



.v-table.packages-table {
  .v-table__wrapper {
    thead {
      th {
        white-space: nowrap;
      }
    }

    tbody {
      tr {
        td {
          vertical-align: top;
          padding: 32px 16px;
          border-bottom: 1px solid #edeeef;
        }
      }
    }
  }
}

.editable-product-field {
  width: 100%;
  padding: 4px 8px;
  border-radius: 5px;
  outline: none;
  

  &:hover {
    border: 1px solid #edeeef;
  }

  &:focus {
    border: 1px solid #6a8afa;
    background: #f7f7f7;
  }

  &::placeholder {
    color: #aaaaaa;
  }
}

.image-uploader {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  background: radial-gradient(circle at center, #ffffff 0%, #edeeef 100%);

  input[type="file"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
