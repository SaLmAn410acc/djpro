<script setup>
import axios from "@axios"
import logo from "@images/logo-black.png"
import useToastPlugin from "@/composables/vue-toastification.js"

const $toast = useToastPlugin()
const $loading = inject("loadingOverlay")

const id = useRoute().params.id
const inquiry = ref([])

const GetInquiry = async () => {
  let loading = $loading.show()
  try {
    const res = await axios.get("/Inquiry/GetInquiry?id=" + id)

    inquiry.value = res.data
  } catch (error) {
    console.log(error)
  } finally {
    loading.hide()
  }
}

onMounted(() => {
  GetInquiry()
})
</script>

<template>
  <div class="packages-wrap my-6">
    <div class="d-flex flex-wrap align-center justify-center my-6 gap-x-3">
      <p class="text-black font-weight-medium mb-0">
        This page is a view-only version
      </p>
      <VBtn density="comfortable">
        Resume Editing
      </VBtn>
    </div>
    
    <VCard
      color="#F8F8FA"
      variant="flat"
      class="mx-auto"
      :max-width="1200"
    >
      <div class="py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow>
          <VCol cols="8">
            <VImg
              :src="logo"
              width="162"
            />
          </VCol>
          <VCol>
            <p class="mb-2 text-lighten">
              From
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              On The Go DJ Pro
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              onthegodjpro@gmail.com
            </p>
          </VCol>
        </VRow>
        <VRow>
          <VCol cols="8">
            <h1 class="mb-4">
              Wedding
            </h1>
            <p class="mb-2 font-weight-semibold text-black">
              23 November, 2023
            </p>
          </VCol>
          <VCol>
            <p class="mb-2 text-lighten">
              To
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              {{ inquiry.firstName }} {{ inquiry.lastName }}
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              {{ inquiry.email }}
            </p>
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <h5 class="text-h5 mb-4">
              {{ inquiry.venueName }}
            </h5>
            <p class="font-weight-semibold text-black">
              {{ inquiry.venueLocation }}
            </p>
          </VCol>
        </VRow>
      </div>
      <div class="border-t border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          DJ Services for Ceremony and Reception
        </h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow>
          <VCol
            cols="4"
            lg="3"
          >
            <p class="text-lighten">
              Ceremony Start Time
            </p>
            <p class="text-black font-weight-semibold">
              09:00 PM
            </p>
          </VCol>
          <VCol
            cols="4"
            lg="3"
          >
            <p class="text-lighten">
              Reception End Time
            </p>
            <p class="text-black font-weight-semibold">
              05:00 AM
            </p>
          </VCol>
        </VRow>
      </div>

      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          DJ Scheduling
        </h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow>
          <VCol
            cols="4"
            lg
          >
            <p class="text-lighten">
              Start Date
            </p>
            <p class="text-black font-weight-semibold">
              06/13/2023
            </p>
          </VCol>
          <VCol
            cols="4"
            lg
          >
            <p class="text-lighten">
              Start Time
            </p>
            <p class="text-black font-weight-semibold">
              12:30 PM
            </p>
          </VCol>
          <VCol
            cols="4"
            lg
          >
            <p class="text-lighten">
              End Time
            </p>
            <p class="text-black font-weight-semibold">
              08:30 PM
            </p>
          </VCol>
          <VCol
            cols="12"
            lg="7"
          >
            <p class="text-lighten">
              Total
            </p>
            <div class="d-flex flex-wrap gap-x-3">
              <p class="text-black font-weight-semibold">
                8 hours
              </p>
              <p class="text-body-2">
                <small><span class="text-black font-weight-semibold">+4 additional hours</span>
                  Will charge $150 for each additional hour over 4 hours for the
                  event</small>
              </p>
            </div>
          </VCol>
        </VRow>
      </div>

      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Wedding DJ Packages
        </h4>
      </div>
      <div class="px-6 px-md-8 px-lg-12 mb-6">
        <VTable
          class="packages-table mb-8 mb-lg-16"
          density="default"
          style="background: transparent"
        >
          <thead>
            <tr>
              <th>Product Photo</th>
              <th>Product Name</th>
              <th class="text-end">
                Price (USD)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="pkg in inquiry?.eventType?.packages"
              :key="pkg.id"
            >
              <td>
                <img
                  :src="pkg?.photoUrl"
                  class="rounded"
                >
              </td>
              <td>
                <h5 class="text-h5 mb-4">
                  {{ pkg?.name }}
                </h5>
                <ul class="text-black ps-5 text-body-2">
                  <li v-for="item in pkg?.description.split('\n')">
                    {{ item }}
                  </li>
                </ul>
              </td>
              <td class="text-end">
                <h5 class="text-h5">
                  $995.00
                </h5>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>

      <div class="border-t border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
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
              <th style="width: 1px">
                #
              </th>
              <th>Product Name</th>
              <th class="text-end">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="enhancement in inquiry?.eventType?.enhancements"
              :key="enhancement.id"
            >
              <td style="width: 1px">
                <strong>
                  {{ enhancement.id }}
                </strong>
              </td>
              <td>
                <strong>{{ enhancement.name }}</strong>
              </td>
              <td class="text-end">
                <strong>${{ enhancement.price }}</strong>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>
      <div class="border-t py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow>
          <VCol>
            <h4 class="text-h4">
              Total Amount
            </h4>
          </VCol>
          <VCol cols="auto">
            <h4 class="text-h4">
              $3400.00
            </h4>
          </VCol>
        </VRow>
        <p class="my-8 text-black">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
        <div class="text-center">
          <VBtn
            color="primary"
            size="x-large"
            class="px-xl-16"
          >
            Accept a Proposal
          </VBtn>
        </div>
      </div>
    </VCard>
  </div>
</template>

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
</style>
