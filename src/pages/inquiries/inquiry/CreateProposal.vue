<template>
  <div class="add-product-wrap my-6">
    <VRow
      class="border-b pb-6 mb-6"
      align="center"
      no-gutters
    >
      <VCol
        cols="12"
        lg="6"
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
        lg="6"
      >
        <div class="d-flex justify-end">
          <VBtn
            color="primary"
            @click="createProposal"
          >
            Send A Proposal
          </VBtn>
          <VBtn
            variant="outlined"
            color="black"
          >
            Cancel
          </VBtn>
        </div>
      </VCol>
    </VRow>
    <VCard
      variant="outlined"
      class="mx-auto mb-12"
    >
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h3">
          Common Info
        </h4>
      </div>
      <div class="py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <VRow class="pb-6">
          <!-- FROM -->
          <VCol
            cols="12"
            lg="4"
          >
            <h5 class="text-h4 mb-6">
              From
            </h5>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block">First Name</label>
              <VTextField
                v-model="inquiry.companyFirstName"
                density="comfortable"
                placeholder="Jeremy"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block">Last Name</label>
              <VTextField
                v-model="inquiry.companyLastName"
                density="comfortable"
                placeholder="Sanderson"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block">Email</label>
              <VTextField
                v-model="inquiry.companyEmail"
                density="comfortable"
                placeholder="cimfe@de.co.uk"
                variant="outlined"
              />
            </div>
          </VCol>
          <!-- TO -->
          <VCol
            cols="12"
            lg="4"
          >
            <h5 class="text-h4 mb-6">
              To
            </h5>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block">First Name</label>
              <VTextField
                v-model="inquiry.firstName"
                density="comfortable"
                placeholder="Jeremy"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block">Last Name</label>
              <VTextField
                v-model="inquiry.lastName"
                density="comfortable"
                placeholder="Sanderson"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block">Email</label>
              <VTextField
                v-model="inquiry.email"
                density="comfortable"
                placeholder="cimfe@de.co.uk"
                variant="outlined"
              />
            </div>
          </VCol>
          <VCol
            cols="12"
            lg="4"
          >
            <h5 class="text-h4 text-white d-none d-lg-block mb-6">
              Event
            </h5>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block">Event Type</label>
              <VSelect
                v-model="inquiry.eventType.name"
                density="comfortable"
                placeholder="Select"
                :items="[inquiry.eventType.name]"
                variant="outlined"
              />
            </div>
            <div class="mb-6">
              <label class="text-black font-weight-semibold mb-1 d-block">Company Logo</label>
              <div class="user-profile-avatar text-center mb-6">
                <VCard variant="outlined">
                  <VCardText>
                    <VImg :src="logo" />
                    <input
                      type="file"
                      class="d-sr-only"
                      @change="onFileChange($event, 0)"
                    >
                  </VCardText>
                </VCard>
                <VBtn
                  color="primary"
                  density="comfortable"
                  size="x-small"
                  rounded="sm"
                  class="pa-2 mt-n6"
                  @click="$refs.refInputEl?.click()"
                >
                  <VIcon
                    icon="tabler-upload"
                    size="24"
                  />
                </VBtn>
                <input
                  ref="refInputEl"
                  type="file"
                  name="file"
                  accept=".jpeg,.png,.jpg,GIF"
                  hidden
                  @input="changeAvatar"
                >
              </div>
            </div>
          </VCol>
        </VRow>
        <h5 class="text-h4 mb-6">
          Event Information
        </h5>
        <VRow>
          <VCol
            cols="12"
            lg="3"
          >
            <label class="text-black font-weight-semibold mb-1 d-block">Event date</label>
            <AppDateTimePicker
              v-model="inquiry.eventDate"
              density="comfortable"
              placeholder="23 November, 2023"
              variant="outlined"
            />
          </VCol>
          <VCol
            cols="12"
            lg="4"
          >
            <label class="text-black font-weight-semibold mb-1 d-block">Venue Name</label>
            <VTextField
              v-model="inquiry.venueName"
              density="comfortable"
              placeholder="La Jolla"
              variant="outlined"
            />
          </VCol>
          <VCol
            cols="12"
            lg="5"
          >
            <label class="text-black font-weight-semibold mb-1 d-block">Venue Address</label>
            <VTextField
              v-model="inquiry.venueLocation"
              density="comfortable"
              placeholder="2750 Torrey Pines Rd, La Jolla, CA 92037, United States"
              variant="outlined"
            />
          </VCol>
        </VRow>
      </div>
    </VCard>

    <VCard
      variant="outlined"
      class="mx-auto mb-12"
    >
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <h4 class="text-h4">
          DJ Services for Ceremony and Reception
        </h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <VRow>
          <VCol
            cols="12"
            lg="4"
            xl="3"
          >
            <label class="text-black font-weight-semibold mb-1 d-block">Ceremony Start Time</label>
            <VSelect
              density="comfortable"
              placeholder="Select"
              :items="times"
              variant="outlined"
            />
          </VCol>
          <VCol
            cols="12"
            lg="4"
            xl="3"
          >
            <label class="text-black font-weight-semibold mb-1 d-block">Reception End Time</label>
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
        <h4 class="text-h4">
          DJ Scheduling
        </h4>
      </div>
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <VRow align="center">
          <VCol
            cols="4"
            lg="3"
            xl="2"
          >
            <label class="text-black font-weight-semibold mb-1 d-block">Start Date</label>
            <VTextField
              type="date"
              density="comfortable"
              placeholder="23 November, 2023"
              variant="outlined"
            />
          </VCol>
          <VCol
            cols="4"
            lg="2"
          >
            <label class="text-black font-weight-semibold mb-1 d-block">Start Time</label>
            <VSelect
              density="comfortable"
              placeholder="Select"
              :items="times"
              variant="outlined"
            />
          </VCol>
          <VCol
            cols="4"
            lg="2"
          >
            <label class="text-black font-weight-semibold mb-1 d-block">End Time</label>
            <VSelect
              density="comfortable"
              placeholder="Select"
              :items="times"
              variant="outlined"
            />
          </VCol>
          <VCol
            cols="12"
            lg
          >
            <div class="ps-lg-12">
              <div class="d-flex flex-wrap gap-x-3">
                <p class="text-lighten">
                  Total
                </p>
                <p class="text-black font-weight-semibold">
                  8 hours
                </p>
              </div>
              <p class="text-body-2 mb-0">
                <small><span class="text-black font-weight-semibold">+4 additional hours</span>
                  Will charge $150 for each additional hour over 4 hours for the
                  event</small>
              </p>
            </div>
          </VCol>
        </VRow>
      </div>
      <div
        v-if="inquiry?.eventType"
        class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6"
      >
        <h4 class="text-h4">
          {{ inquiry?.eventType?.name }}
        </h4>
      </div>
      <div
        v-if="inquiry?.eventType"
        class="px-6 px-md-8 px-lg-12 mb-6"
      >
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
      <div class="px-6 px-md-8 px-lg-12 mb-8 mb-lg-12">
        <VTable
          v-if="inquiry?.eventType"
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
    </VCard>

    <VCard
      variant="outlined"
      class="mx-auto mb-12"
    >
      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12">
        <h4 class="text-h3">
          Additional Comments
        </h4>
      </div>
      <VTextarea
        v-model="form.additionalComments"
        variant="plain"
        placeholder="Type here..."
        class="pa-8 pa-lg-12 text-black mt-n2"
      />
    </VCard>

    <div class="py-4 mb-6">
      <div class="d-flex gap-4 justify-end">
        <h4 class="text-h4 font-weight-bold">
          Total
        </h4>
        <h4 class="text-h4 font-weight-bold">
          $1,245.00
        </h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "@axios"
import { useRoute } from "vue-router"
import productPlaceholder from "@images/add-product/product-placeholder.png"
import logoImage from "@images/logo-black.png"

const logo = ref(logoImage)

const route = useRoute()

const breadcrumbs = ref([
  {
    text: "Inquiries",
    disabled: false,
    to: "/inquiries",
  },
  {
    text: "Event Details",
    to: "/inquiries/details/" + route.params.id,
  },
  {
    text: "Create a Proposal",
    to: "/inquiries/create-proposal" + route.params.id,
  },
])

const changeAvatar = event => {
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = e => {
    logo.value = e.target.result
  }

  reader.readAsDataURL(file)
}

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
])

const form = ref({
  additionalComments: "",
})

const inquiry = ref({
  eventType: {
    name: "",
  },
})

const getInquiry = async () => {
  try {
    const res = await axios.get("/Inquiry/GetInquiry?id=" + route.params.id)

    inquiry.value = res.data
    breadcrumbs.value[1].text = res.data.eventType.name
  } catch (error) {
    console.log(error)
  }
}

const createProposal = async () => {
  let proposalData = {
    companyFirstName: inquiry.value.companyFirstName,
    companyLastName: inquiry.value.companyLastName,
    companyEmail: inquiry.value.companyEmail,
    clientFirstName: inquiry.value.firstName,
    clientLastName: inquiry.value.lastName,
    clientEmail: inquiry.value.email,
    eventType: inquiry.value.eventTypeId,
    companyLogo: "https://via.placeholder.com/150x150",
    eventDate: inquiry.value.eventDate,
    venueName: inquiry.value.venueName,
    venueLocation: inquiry.value.venueLocation,
    comment: "string",
    ceremonyStartTime: inquiry.value.ceremonyStartTime,
    receptionEndTime: inquiry.value.receptionEndTime,

    // "managerId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    performerId: inquiry.value.performer.userId,
  }

  proposalData.proposalPackages = []
  inquiry.value.inquiryPackages.forEach(inquiryPackage => {
    let proposalPackage = {
      startTime: inquiryPackage.startTime,
      endTime: inquiryPackage.endTime,
      packageId: inquiryPackage.id,
      enhancements: [],
    }

    inquiryPackage.enhancements.forEach(enhancement => {
      proposalPackage.enhancements.push(enhancement.id)
    })

    proposalData.proposalPackages.push(proposalPackage)
  })

  return console.log(proposalData)

  try {
    const res = await axios.post("/Proposal/Create", proposalData)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getInquiry()
})
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
