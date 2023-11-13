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
            Create a Proposal
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <VRow>
      <VCol>
        <p class="text-black font-weight-semibold text-body-1">Assign to</p>
        <div class="mb-6 mb-lg-8">
          <VMenu>
            <template #activator="{ props }">
              <VBtn
                variant="text"
                color="black"
                size="x-small"
                class="rounded"
                append-icon="tabler:caret-down-filled"
                v-bind="props"
              >
                <VImg
                  :src="avatar"
                  :width="40"
                  :height="40"
                  cover
                  class="rounded-circle"
                ></VImg>
                <span class="d-inline-block ms-2">Patricia Sanderson</span>
              </VBtn>
            </template>
            <v-card class="mt-2">
              <v-card-text class="pa-2">
                <VBtn
                  variant="text"
                  color="black"
                  size="x-small"
                  class="rounded"
                  v-for="user in usersList"
                >
                  <VImg
                    :src="user.avatar"
                    :width="40"
                    :height="40"
                    cover
                    class="rounded-circle"
                  ></VImg>
                  <span class="d-inline-block ms-2">{{ user.title }}</span>
                </VBtn>
              </v-card-text>
            </v-card>
          </VMenu>
        </div>
        <p class="text-black font-weight-semibold text-body-1">Notes</p>
        <v-card variant="outlined" class="mb-6 mb-lg-8">
          <VCardText class="pa-0">
            <div class="border-b">
              <VTextarea
                v-model="notes1"
                variant="plain"
                rows="4"
                class="w-100 px-3 text-black"
                placeholder="Type your notes here..."
              ></VTextarea>
              <span class="text-body-2 px-3 py-2 d-inline-block">
                <small>12:30 PM 06/23/2023</small>
              </span>
            </div>
            <div class="border-b">
              <VTextarea
                v-model="notes2"
                variant="plain"
                rows="4"
                class="w-100 px-3 text-black"
                placeholder="Type your notes here..."
              ></VTextarea>
              <span class="text-body-2 px-3 py-2 d-inline-block">
                <small>12:30 PM 06/23/2023</small>
              </span>
            </div>
            <div>
              <VTextarea
                v-model="notes2"
                variant="plain"
                rows="4"
                class="w-100 px-3 text-black"
                placeholder="Type your notes here..."
              ></VTextarea>
              <span class="text-body-2 px-3 py-2 d-inline-block">
                <small>12:30 PM 06/23/2023</small>
              </span>
            </div>
          </VCardText>
        </v-card>
      </VCol>
    </VRow>
    <VRow class="py-4" align="center">
      <VCol>
        <h1 class="text-h2 mb-3">Wedding</h1>
      </VCol>
      <VCol>
        <p class="text-black text-end mb-3">
          <strong>Performer Requested:</strong> Anthony Perez
        </p>
      </VCol>
    </VRow>
    <v-card variant="outlined" class="mx-auto">
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">Contact Information</h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div class="d-flex flex-wrap justify-space-between gap-3">
          <div>
            <p class="text-lighten">First Name</p>
            <p class="text-black font-weight-semibold">Jeremy</p>
          </div>
          <div>
            <p class="text-lighten">Last Name</p>
            <p class="text-black font-weight-semibold">Sanderson</p>
          </div>
          <div>
            <p class="text-lighten">Email</p>
            <p class="text-black font-weight-semibold">
              jeremysanderson@gmail.com
            </p>
          </div>
          <div>
            <p class="text-lighten">Phone Number</p>
            <p class="text-black font-weight-semibold">(239) 555-0108</p>
          </div>
          <div>
            <p class="text-lighten">Event date</p>
            <p class="text-black font-weight-semibold">23 November, 2023</p>
          </div>
        </div>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">Event Information</h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div class="d-flex flex-wrap justify-space-between gap-3">
          <div>
            <p class="text-lighten">Event Date</p>
            <p class="text-black font-weight-semibold">Jeremy</p>
          </div>
          <div>
            <p class="text-lighten">Venue Name</p>
            <p class="text-black font-weight-semibold">Sanderson</p>
          </div>
          <div>
            <p class="text-lighten">Venue Address</p>
            <p class="text-black font-weight-semibold">
              2750 Torrey Pines Rd, La Jolla, CA 92037, United States
            </p>
          </div>
          <div>
            <p class="text-lighten">Referral Source</p>
            <p class="text-black font-weight-semibold">Google</p>
          </div>
        </div>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">DJ Services for Ceremony and Reception</h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div
          class="d-flex flex-wrap justify-space-between gap-3 v-col-md-6 v-col-lg-4 pa-0"
        >
          <div>
            <p class="text-lighten">Ceremony Start Time</p>
            <p class="text-black font-weight-semibold">09:00 PM</p>
          </div>
          <div>
            <p class="text-lighten">Reception End Time</p>
            <p class="text-black font-weight-semibold">05:00 AM</p>
          </div>
        </div>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">DJ Scheduling</h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow>
          <VCol cols="4" lg>
            <p class="text-lighten">Start Date</p>
            <p class="text-black font-weight-semibold">06/13/2023</p>
          </VCol>
          <VCol cols="4" lg>
            <p class="text-lighten">Start Time</p>
            <p class="text-black font-weight-semibold">12:30 PM</p>
          </VCol>
          <VCol cols="4" lg>
            <p class="text-lighten">End Time</p>
            <p class="text-black font-weight-semibold">08:30 PM</p>
          </VCol>
          <VCol cols="12" lg="7">
            <p class="text-lighten">Total</p>
            <div class="d-flex flex-wrap gap-x-3">
              <p class="text-black font-weight-semibold">8 hours</p>
              <p class="text-body-2">
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
      <div class="px-6 px-md-8 px-lg-12">
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
      <div class="border-t py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <div class="d-flex gap-4 justify-end">
          <h4 class="text-h4 font-weight-bold">Total</h4>
          <h4 class="text-h4 font-weight-bold">$1,245.00</h4>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import productPlaceholder from "@images/add-product/product-placeholder.png";
import avatar from "@images/avatars/avatar-1.png";

const route = useRoute();

const breadcrumbs = [
  {
    text: "Inquiries",
    disabled: false,
    to: "/inquiries",
  },
  {
    text: "Private Party",
    to: "/inquiries/private-party/" + route.params.slug,
  },
];

const usersList = [
  {
    title: "Ina Morris",
    avatar: "/src/assets/images/avatars/avatar-1.png",
  },
  {
    title: "Lucile Little",
    avatar: "/src/assets/images/avatars/avatar-2.png",
  },
  {
    title: "Alfred Cook",
    avatar: "/src/assets/images/avatars/avatar-3.png",
  },
  {
    title: "Luke Torres",
    avatar: "/src/assets/images/avatars/avatar-4.png",
  },
  {
    title: "Blanche Johnson",
    avatar: "/src/assets/images/avatars/avatar-5.png",
  },
];

const notes1 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their";
const notes2 =
  "default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
const notes3 =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

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

const calculateTextareaRows = (text) => {
  if (!text) {
    return 1;
  }
  const lines = text.split("\n");
  return lines.length;
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
