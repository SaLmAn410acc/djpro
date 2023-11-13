<template>
  <div class="add-product-wrap my-6">
    <VRow class="border-b pb-6 mb-6" align="center" no-gutters>
      <VCol cols="12" lg="6">
        <v-breadcrumbs
          :items="breadcrumbs"
          class="px-0"
          active-class="text-darken"
        >
          <template v-slot:divider>
            <v-icon icon="quill:arrow-right"></v-icon>
          </template>
        </v-breadcrumbs>
      </VCol>
      <VCol cols="12" lg="6">
        <div class="d-flex justify-end">
          <VBtn class="font-weight-regular" color="primary">
            Create Invoice
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <v-card variant="outlined" class="mx-auto mb-12">
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h3">Common Info</h4>
      </div>
      <div class="py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow class="pb-6">
          <!-- FROM -->
          <VCol cols="12" lg="4">
            <h5 class="text-h4 mb-6">From</h5>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >First Name</label
              >
              <VTextField
                density="comfortable"
                placeholder="Jeremy"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Last Name</label
              >
              <VTextField
                density="comfortable"
                placeholder="Sanderson"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Email</label
              >
              <VTextField
                density="comfortable"
                placeholder="cimfe@de.co.uk"
                variant="outlined"
              />
            </div>
          </VCol>
          <!-- TO -->
          <VCol cols="12" lg="4">
            <h5 class="text-h4 mb-6">To</h5>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >First Name</label
              >
              <VTextField
                density="comfortable"
                placeholder="Jeremy"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Last Name</label
              >
              <VTextField
                density="comfortable"
                placeholder="Sanderson"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Email</label
              >
              <VTextField
                density="comfortable"
                placeholder="cimfe@de.co.uk"
                variant="outlined"
              />
            </div>
          </VCol>
          <VCol cols="12" lg="4">
            <h5 class="text-h4 text-white d-none d-lg-block mb-6">Event</h5>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Event Type</label
              >
              <VSelect
                density="comfortable"
                placeholder="Select"
                :items="['Wedding', 'Corporate Event', 'Private Party']"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Company Logo</label
              >
              <div class="user-profile-avatar text-center mb-6">
                <v-card variant="outlined">
                  <v-card-text>
                    <VImg :src="logo"></VImg>
                    <input
                      type="file"
                      @change="onFileChange($event, 0)"
                      class="d-sr-only"
                    />
                  </v-card-text>
                </v-card>
                <VBtn
                  color="primary"
                  density="dense"
                  size="x-small"
                  rounded="sm"
                  class="pa-2 mt-n6"
                  @click="$refs.refInputEl?.click()"
                >
                  <VIcon icon="tabler-upload" size="24" />
                </VBtn>
                <input
                  ref="refInputEl"
                  type="file"
                  name="file"
                  accept=".jpeg,.png,.jpg,GIF"
                  hidden
                  @input="changeAvatar"
                />
              </div>
            </div>
          </VCol>
        </VRow>
        <h5 class="text-h4 mb-6">Event Information</h5>
        <VRow>
          <VCol cols="12" lg="3">
            <label class="text-black font-weight-semibold mb-1 d-block"
              >Event date</label
            >
            <VTextField
              density="comfortable"
              placeholder="23 November, 2023"
              variant="outlined"
            />
          </VCol>
          <VCol cols="12" lg="4">
            <label class="text-black font-weight-semibold mb-1 d-block"
              >Venue Name</label
            >
            <VTextField
              density="comfortable"
              placeholder="La Jolla"
              variant="outlined"
            />
          </VCol>
          <VCol cols="12" lg="5">
            <label class="text-black font-weight-semibold mb-1 d-block"
              >Venue Address</label
            >
            <VTextField
              density="comfortable"
              placeholder="2750 Torrey Pines Rd, La Jolla, CA 92037, United States"
              variant="outlined"
            />
          </VCol>
        </VRow>
      </div>
    </v-card>

    <v-card variant="outlined" class="mx-auto mb-12">
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <h4 class="text-h4">DJ Services for Ceremony and Reception</h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <VRow>
          <VCol cols="12" lg="4" xl="3">
            <label class="text-black font-weight-semibold mb-1 d-block"
              >Ceremony Start Time</label
            >
            <VSelect
              density="comfortable"
              placeholder="Select"
              :items="times"
              variant="outlined"
            />
          </VCol>
          <VCol cols="12" lg="4" xl="3">
            <label class="text-black font-weight-semibold mb-1 d-block"
              >Reception End Time</label
            >
            <VSelect
              density="comfortable"
              placeholder="Select"
              :items="times"
              variant="outlined"
            />
          </VCol>
        </VRow>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <h4 class="text-h4">DJ Scheduling</h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <VRow align="center">
          <VCol cols="4" lg="3" xl="2">
            <label class="text-black font-weight-semibold mb-1 d-block"
              >Start Date</label
            >
            <VTextField
              type="date"
              density="comfortable"
              placeholder="23 November, 2023"
              variant="outlined"
            />
          </VCol>
          <VCol cols="4" lg="2"
            ><label class="text-black font-weight-semibold mb-1 d-block"
              >Start Time</label
            >
            <VSelect
              density="comfortable"
              placeholder="Select"
              :items="times"
              variant="outlined"
            />
          </VCol>
          <VCol cols="4" lg="2"
            ><label class="text-black font-weight-semibold mb-1 d-block"
              >End Time</label
            >
            <VSelect
              density="comfortable"
              placeholder="Select"
              :items="times"
              variant="outlined"
            />
          </VCol>
          <VCol cols="12" lg>
            <div class="ps-lg-12">
              <div class="d-flex flex-wrap gap-x-3">
                <p class="text-lighten">Total</p>
                <p class="text-black font-weight-semibold">8 hours</p>
              </div>
              <p class="text-body-2 mb-0">
                <small
                  ><span class="text-black font-weight-semibold"
                    >+4 additional hours</span
                  >
                  Will charge $150 for each additional hour over 4 hours for the
                  event</small
                >
              </p>
            </div>
          </VCol>
        </VRow>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">Wedding DJ Packages</h4>
      </div>
      <div class="px-6 px-md-8 px-lg-12 mb-6">
        <v-table
          class="packages-table mb-8 mb-lg-16"
          density="default"
          style="background: transparent"
        >
          <thead>
            <tr>
              <th>Product Photo</th>
              <th>Product Name</th>
              <th class="text-end">Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="n in 3" :key="n">
              <td>
                <img src="@images/packages/package.jpg" class="rounded" />
              </td>
              <td>
                <h5 class="text-h5 mb-4">Reception Package</h5>
                <ul class="text-black ps-5 text-body-2">
                  <li>
                    4 hours of Professional Wedding Reception DJ/MC services
                  </li>
                  <li>Properly Dressed Wedding DJ</li>
                  <li>Professional Sound System with 2 Speakers</li>
                  <li>Wireless Microphone</li>
                  <li>
                    Custom Wedding Timeline and Itinerary-Unlimited Phone And
                    E-mail Consultation
                  </li>
                  <li>
                    Access to our planning form app which allows you to invite
                    friends and family to select music out for your special day
                  </li>
                  <li>Unlimited amounts of songs within or music database</li>
                  <li>Free Set up and Break Down</li>
                </ul>
              </td>
              <td class="text-end">
                <h5 class="text-h5">$995.00</h5>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div
        class="border-t border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6"
      >
        <h4 class="text-h4">Enhancements</h4>
      </div>
      <div class="px-6 px-md-8 px-lg-12 mb-8 mb-lg-12">
        <v-table
          class="text-black"
          density="default"
          style="background: transparent"
        >
          <thead>
            <tr>
              <th style="width: 1px">#</th>
              <th>Product Name</th>
              <th class="text-end">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="x in 6" :key="x">
              <td style="width: 1px">
                <strong>
                  {{ x }}
                </strong>
              </td>
              <td>
                <strong>Ceremony</strong>
              </td>
              <td class="text-end">
                <strong>$250.00</strong>
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
    </v-card>

    <v-card variant="outlined" class="mx-auto mb-12">
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <h4 class="text-h3">Additional Comments</h4>
      </div>
      <VTextarea
        variant="plain"
        placeholder="Type here..."
        class="pa-8 pa-lg-12 text-black mt-n2"
        v-model="form.additionalComments"
      />
    </v-card>

    <div class="py-4 mb-6">
      <div class="d-flex gap-4 justify-end">
        <h4 class="text-h4 font-weight-bold">Total</h4>
        <h4 class="text-h4 font-weight-bold">$1,245.00</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import productPlaceholder from "@images/add-product/product-placeholder.png";
import logoImage from "@images/logo-black.png";

const logo = ref(logoImage);

const route = useRoute();

const breadcrumbs = [
  {
    text: "Inquiries",
    disabled: false,
    to: "/inquiries",
  },
  {
    text: "Create Invoice",
    to: "/inquiries/create-invoice",
  },
];

const changeAvatar = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    logo.value = e.target.result;
  };

  reader.readAsDataURL(file);
};

const times = ref([
  "12:00 AM",
  "12:30 AM",
  "1:00 AM",
  "1:30 AM",
  "2:00 AM",
  "2:30 AM",
  "3:00 AM",
  "3:30 AM",
  "4:00 AM",
  "4:30 AM",
  "5:00 AM",
  "5:30 AM",
  "6:00 AM",
  "6:30 AM",
  "7:00 AM",
  "7:30 AM",
  "8:00 AM",
  "8:30 AM",
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
]);

const packageDetails = ref([
  {
    id: 1,
    title: "Reception Package",
    description:
      "4 hours of Professional Wedding Reception DJ/MC services\nProfessional Sound System with 2 Speakers\nWireless Microphone\nDance Lighting\nFog Machine\nAccess to our online planning form app which allows you to invite friends and family to select music out for your special day\nUnlimited amounts of songs within or music database\nFree Set up and Break Down",
    price: 995,
    image: "/src/assets/images/packages/package.jpg",
  },
  {
    id: 2,
    title: "Ceremony Package",
    description:
      "Professional Wedding Ceremony DJ/MC services\nProfessional Sound System with 2 Speakers\nWireless Microphone\nAccess to our online planning form app which allows you to invite friends and family to select music out for your special day\nUnlimited amounts of songs within or music database\nFree Set up and Break Down",
    price: 250,
    image: "/src/assets/images/packages/package.jpg",
  },
  {
    id: 3,
    title: "Cocktail Hour Package",
    description:
      "Professional Wedding Cocktail Hour DJ/MC services\nProfessional Sound System with 2 Speakers\nWireless Microphone\nAccess to our online planning form app which allows you to invite friends and family to select music out for your special day\nUnlimited amounts of songs within or music database\nFree Set up and Break Down",
    price: 250,
    image: "/src/assets/images/packages/package.jpg",
  },
  {
    id: 4,
    title: "Uplighting Package",
    description:
      "Professional Wedding Uplighting DJ/MC services\nProfessional Sound System with 2 Speakers\nWireless Microphone\nAccess to our online planning form app which allows you to invite friends and family to select music out for your special day\nUnlimited amounts of songs within or music database\nFree Set up and Break Down",
    price: 250,
    image: "/src/assets/images/packages/package.jpg",
  },
]);

const enhancementsDetails = ref([
  {
    id: 1,
    title: "Ceremony",
    description: "Professional Wedding Ceremony DJ/MC services",
    price: 250,
  },
  {
    id: 2,
    title: "Cocktail Hour",
    description: "Professional Wedding Cocktail Hour DJ/MC services",
    price: 250,
  },
  {
    id: 3,
    title: "Uplighting",
    description: "Professional Wedding Uplighting DJ/MC services",
    price: 250,
  },
]);

const onFileChange = (event, index) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    packageDetails.value[index].image = e.target.result;
  };

  reader.readAsDataURL(file);
};

const addPackage = () => {
  packageDetails.value.push({
    id: packageDetails.value.length + 1,
    title: "",
    description: "",
    price: 0,
    image: productPlaceholder,
  });
};

const addEnhancement = () => {
  enhancementsDetails.value.push({
    id: enhancementsDetails.value.length + 1,
    title: "",
    description: "",
    price: 0,
  });
};

const form = ref({
  additionalComments:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
});
</script>

<style>
.packages-wrap .package-item p:last-of-type {
  margin-bottom: 0;
}
</style>

<style lang="scss">
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
  border: 1px solid transparent;

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
