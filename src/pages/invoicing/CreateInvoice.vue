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
        <div class="d-flex justify-end gap-x-3">
          <VBtn class="font-weight-semibold me-lg-8" color="#333848">
            <span class="text-white">
              Preview
              <VIcon size="20">ri:play-line</VIcon>
            </span>
          </VBtn>
          <VBtn class="font-weight-semibold" color="primary" disabled>
            Send Invoice
          </VBtn>
          <VBtn class="font-weight-semibold" variant="outlined" color="black">
            Cancel
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <v-card variant="outlined" class="mx-auto mb-12">
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h3">Common Info</h4>
      </div>
      <div class="py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <VRow class="pb-6">
          <!-- INVOICE -->
          <VCol cols="12" lg="4">
            <h5 class="text-h4 text-white d-none d-lg-block mb-6">Invoice</h5>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Invoice ID</label
              >
              <VTextField
                density="comfortable"
                placeholder="Jeremy"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Event Type</label
              >
              <VSelect
                density="comfortable"
                placeholder="Select"
                :items="['Wedding', 'Birthday', 'Anniversary']"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block"
                >Due Date</label
              >
              <VTextField
                type="date"
                density="comfortable"
                variant="outlined"
              />
            </div>
          </VCol>
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
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <h4 class="text-h4">
          <input
            type="text"
            class="editable-product-field"
            placeholder="Title"
            :value="productInfo.title"
          />
        </h4>
      </div>
      <div class="pa-6 pa-lg-8">
        <v-table class="packages-table mb-6" density="default">
          <thead>
            <tr>
              <th>Product Photo</th>
              <th>Product Name</th>
              <th>Price For Additional Hour (USD)</th>
              <th class="text-end">Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(packageDetail, index) in packageDetails"
              :key="packageDetail.id"
            >
              <td style="width: 1px">
                <label class="image-uploader">
                  <input type="file" @change="onFileChange($event, index)" />
                  <img
                    :src="packageDetail.image ?? productPlaceholder"
                    class="rounded"
                  />
                </label>
              </td>
              <td style="width: 100%">
                <h5 class="text-h5 mb-4">
                  <input
                    type="text"
                    class="editable-product-field"
                    placeholder="Title"
                    v-model="packageDetail.title"
                  />
                </h5>
                <div class="text-body-2">
                  <textarea
                    class="editable-product-field"
                    placeholder="Description"
                    :rows="
                      Math.max(
                        calculateTextareaRows(packageDetail.description),
                        5
                      )
                    "
                    v-model="packageDetail.description"
                  ></textarea>
                </div>
              </td>
              <td>
                <h5 class="text-h5">
                  <input
                    type="text"
                    class="editable-product-field"
                    placeholder="0.00"
                    v-model="packageDetail.additionalHourPrice"
                  />
                </h5>
              </td>
              <td class="text-end" style="width: 1px">
                <h5 class="text-h5">
                  <input
                    type="text"
                    class="editable-product-field"
                    placeholder="0.00"
                    v-model="packageDetail.price"
                  />
                </h5>
              </td>
            </tr>
          </tbody>
        </v-table>
        <VBtn
          density="compact"
          variant="text"
          color="black"
          size="x-small"
          @click="addPackage"
        >
          <VIcon class="me-2">material-symbols:library-add-outline</VIcon>
          Add an Option
        </VBtn>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <h4 class="text-h4">Enhancements</h4>
      </div>
      <div class="pa-6 pa-lg-8">
        <v-table class="packages-table mb-6" density="default">
          <thead>
            <tr>
              <th>Product Name</th>
              <th class="text-end">Price (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(enhancement, index) in enhancementsDetails"
              :key="enhancement.id"
            >
              <td style="width: 100%">
                <h5 class="text-h5 mb-4">
                  <input
                    type="text"
                    class="editable-product-field"
                    placeholder="Item Name"
                    v-model="enhancement.title"
                  />
                </h5>
                <div class="text-body-2">
                  <textarea
                    class="editable-product-field"
                    placeholder="Item description (optional)"
                    :rows="calculateTextareaRows(enhancement.description)"
                    v-model="enhancement.description"
                  ></textarea>
                </div>
              </td>
              <td class="text-end" style="width: 1px">
                <h5 class="text-h5">
                  <input
                    type="text"
                    class="editable-product-field"
                    placeholder="0.00"
                    v-model="enhancement.price"
                  />
                </h5>
              </td>
            </tr>
          </tbody>
        </v-table>
        <VBtn
          density="compact"
          variant="text"
          color="black"
          size="x-small"
          @click="addEnhancement"
        >
          <VIcon class="me-2">material-symbols:library-add-outline</VIcon>
          Add an Option
        </VBtn>
      </div>
    </v-card>

    <div class="py-4 mb-6 border-b">
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

const productInfo = ref({
  title: "",
});

const packageDetails = ref([
  {
    id: 1,
    title: "",
    description: "",
    price: 0,
    additionalHourPrice: 0,
    image: productPlaceholder,
  },
]);

const enhancementsDetails = ref([
  {
    id: 1,
    title: "",
    description: "",
    price: 0,
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

const calculateTextareaRows = (text) => {
  if (!text) {
    return 1;
  }
  const lines = text.split("\n");
  return lines.length;
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
