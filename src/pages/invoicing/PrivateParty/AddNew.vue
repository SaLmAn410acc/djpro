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
        <div class="d-flex justify-lg-end gap-x-4">
          <VBtn class="font-weight-regular" color="primary">
            Create a Proposal
          </VBtn>
          <VBtn :to="{ path: '/dj-products' }" variant="outlined" color="black">
            Cancel
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <v-card variant="outlined">
      <div class="title-header pa-6 pa-lg-8 border-b">
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
      <div class="title-header pa-6 pa-lg-8 border-b">
        <h4 class="text-h4 mb-3">Enhancements</h4>
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
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import productPlaceholder from "@images/add-product/product-placeholder.png";

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

const productInfo = ref({
  title: "Corporate Event",
  description: "4 hours of Professional Wedding Reception DJ/MC services",
});

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
