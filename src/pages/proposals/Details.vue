<template>
  <!--
    <VRow class="mx-auto justify-center align-center">
    <p class="font-weight-bold my-5 view-para">
    This page is a view-only version
    </p>

    <VBtn
    variant="outlined"
    color="#000"
    class="blackBtn mx-5 my-5"
    >
    Back
    </VBtn>

    <VBtn
    variant="outlined"
    class="rejectedBtn mx-5 my-5"
    color="#FF334B"
    >
    Reject a Proposal
    </VBtn>

    <VBtn
    variant="flat"
    class="my-5 accpedtedBtn"
    >
    Accept a Proposal
    </VBtn>
    </VRow> 
  -->

  <div class="add-product-wrap my-6">
    <VDialog
      v-model="rejectedValue"
      width="500"
    >
      <!-- Dialog close btn -->
      <DialogCloseBtn @click="rejectedValue = !rejectedValue" />

      <!-- Dialog Content -->
      <VCard class="modal-card-wrapper pa-6 pa-md-6 pa-lg-8 pa-xl-12 ">
        <div class="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M20 23.6021L4.37138 39.2308C3.8585 39.7436 3.25814 40 2.57031 40C1.88248 40 1.28213 39.7436 0.769246 39.2308C0.256416 38.7179 0 38.1175 0 37.4297C0 36.7419 0.256416 36.1415 0.769246 35.6286L16.3979 20L0.769246 4.37138C0.256416 3.8585 0 3.25814 0 2.57031C0 1.88248 0.256416 1.28213 0.769246 0.769246C1.28213 0.256416 1.88248 0 2.57031 0C3.25814 0 3.8585 0.256416 4.37138 0.769246L20 16.3979L35.6286 0.769246C36.1415 0.256416 36.7419 0 37.4297 0C38.1175 0 38.7179 0.256416 39.2308 0.769246C39.7436 1.28213 40 1.88248 40 2.57031C40 3.25814 39.7436 3.8585 39.2308 4.37138L23.6021 20L39.2308 35.6286C39.7436 36.1415 40 36.7419 40 37.4297C40 38.1175 39.7436 38.7179 39.2308 39.2308C38.7179 39.7436 38.1175 40 37.4297 40C36.7419 40 36.1415 39.7436 35.6286 39.2308L20 23.6021Z"
              fill="#FF334B"
            />
          </svg>

          <h1 class="text-h2 px-5 pt-5 text-black ">
            The Proposal Has Been Rejected
          </h1>
          <p class="text-body-2 my-5 pb-4">
            Please contact us if you have any questions
          </p>

          <VBtn
            size="large"
            class="proposal-btn"
            @click="rejectedValue = false"
          >
            <span class="px-5">
              Go to Proposals
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

          <h1 class="text-h2 px-5 pt-5">
            The Proposal Has Been Accepted
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
              Go to Proposals
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



    <div
      class="mx-auto"
      style="max-width: 1200px;"
    >
      <VRow class="my-6">
        <VCol
          cols="12"
          :md="status == null ? 6 : 7"
          class="d-flex gap-x-3 align-center justify-center justify-md-end"
        >
          <p class="text-black font-weight-medium mb-0">
            This page is a view-only version
          </p>
          <VBtn
            variant="outlined"
            color="#000"
            class="blackBtn me-5 ms-6 my-3"
            density="comfortable"
          >
            Back
          </VBtn>
        </VCol>
        <VCol
          cols="12"
          :md="status == null ? 6 : 5"
          class="d-flex gap-x-3 align-center justify-center justify-md-start"
        >
          <template v-if="status == null">
            <VBtn
              variant="outlined"
              class="rejectedBtn my-3"
              color="#FF334B"
              density="comfortable"
              @click="rejectedValue = !rejectedValue"
            >
              Reject a Proposal
            </VBtn>
            <VBtn
              variant="flat"
              class="my-3 accpedtedBtn"
              density="comfortable"
              v-bind="props"
              @click="acceptedValue = !acceptedValue"
            >
              Accept a Proposal
            </VBtn>
          </template>
          <template v-else-if="status == 'accepted'">
            <strong class="text-primary mx-auto me-md-0">Accepted</strong>
          </template>
          <template v-else-if="status == 'rejected'">
            <strong class="text-error mx-auto me-md-0">Rejected</strong>
          </template>
        </VCol>
      </VRow>
    </div>  

    <VCard
      color="#F8F8FA"
      variant="flat"
      class="mx-auto cardBg"
      :max-width="1200"
    >
      <!--
        <VRow
        class="
        border-b
        py-6
        py-md-8
        py-lg-12
        px-6
        px-md-8
        px-lg-12
        mb-6"
        >
        <VCol md="8">
        <div>
        <img
        :src="logo"
        alt=""
        >
        </div>

        <h1 class="my-4 text-h2 font-weight-bold">
        Wedding
        </h1>
        <p class="text-black text-body-2 font-weight-medium ">
        23 November, 2023
        </p>

        <h5 class="mt-5">
        La Jolla
        </h5>
        <p>2750 Torrey Pines Rd, La Jolla, CA 92037, United States</p>
        </VCol>

        <VCol md="4">
        2
        </VCol>
        </VRow> 
      -->

      <div class="border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
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
              Jeremy Sanderson
            </p>
            <p class="mb-2 font-weight-semibold text-black">
              jeremysanderson@gmail.com
            </p>
          </VCol>
        </VRow>
        <VRow>
          <VCol>
            <h5 class="text-h5 mb-4">
              La Jolla
            </h5>
            <p class="font-weight-semibold text-black">
              2750 Torrey Pines Rd, La Jolla, CA 92037, United States
            </p>
          </VCol>
        </VRow>
      </div>

      <div class=" border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
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
            <tr>
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
                  <li>4 hours of Professional Wedding Reception DJ/MC services</li>
                  <li>Properly Dressed Wedding DJ</li>
                  <li> Professional Sound System with 2 Speakers</li>
                  <li>Wireless Microphone</li>
                  <li>Lighting Stands or Lighting Truss System</li>
                  <li>Dance Lighting</li>
                  <li>Fog Machine</li>
                  <li>Custom Wedding Timeline and Itinerary</li>
                  <li>Unlimited Phone And E-mail Consultation</li>
                  <li>Access to our planning form app which allows you to invite friends and family to select music out for your special day</li>
                  <li>Unlimited amounts of songs within or music database</li>
                  <li>Free Set up and Break Down</li>
                </ul>
              </td>
              <td class="text-end">
                <h5 class="text-h5">
                  $1195.00
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
            <tr>
              <td style="width: 1px">
                <strong>
                  1	
                </strong>
              </td>
              <td>
                <strong>Additional Hour (DJ)	</strong>
              </td>
              <td class="text-end">
                <strong>$100.00
                </strong>
              </td>
            </tr>


            <tr>
              <td style="width: 1px">
                <strong>
                  2	
                </strong>
              </td>
              <td>
                <strong>Slide Show Creation	</strong>
              </td>
              <td class="text-end">
                <strong>$300.00
                </strong>
              </td>
            </tr>


            <tr>
              <td style="width: 1px">
                <strong>
                  3	
                </strong>
              </td>
              <td>
                <strong>Static Monogram & Gobo	</strong>
              </td>
              <td class="text-end">
                <strong>$150.00
                </strong>
              </td>
            </tr>

            <tr>
              <td style="width: 1px">
                <strong>
                  4	
                </strong>
              </td>
              <td>
                <strong>Animated Monogram & Gobo	</strong>
              </td>
              <td class="text-end">
                <strong>$200.00 
                </strong>
              </td>
            </tr>

            <tr>
              <td style="width: 1px">
                <strong>
                  5	
                </strong>
              </td>
              <td>
                <strong>42 Inch or Bigger Flat Screen T.V.	</strong>
              </td>
              <td class="text-end">
                <strong>$150.00
                </strong>
              </td>
            </tr>

            <tr>
              <td style="width: 1px">
                <strong>
                  6
                </strong>
              </td>
              <td>
                <strong>Projector & Screen</strong>
              </td>
              <td class="text-end">
                <strong>$250.00
                </strong>
              </td>
            </tr>

            <tr>
              <td style="width: 1px">
                <strong>
                  7
                </strong>
              </td>
              <td>
                <strong>Half Room Uplighting 12</strong>
              </td>
              <td class="text-end">
                <strong>$300.00
                </strong>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>

      <div class="border-t border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Photo Booth Packages
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
            <tr>
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
          </tbody>
        </VTable>
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
            <tr>
              <td style="width: 1px">
                <strong>
                  1	
                </strong>
              </td>
              <td>
                <strong>4x6 Prints	</strong>
              </td>
              <td class="text-end">
                <strong>$100.00
                </strong>
              </td>
            </tr>


            <tr>
              <td style="width: 1px">
                <strong>
                  2	
                </strong>
              </td>
              <td>
                <strong>Green Screen	</strong>
              </td>
              <td class="text-end">
                <strong>$300.00
                </strong>
              </td>
            </tr>
          </tbody>
        </VTable>
      </div>

      <div class="border-t border-b py-6 py-md-8 py-lg-12 px-6 px-md-8 px-lg-12 mb-6">
        <h4 class="text-h4">
          Photography Reception Packages
        </h4>
      </div>

      <div class="px-6 px-md-8 px-lg-12 mb-6">
        <VTable
          class="packages-table mb-8 mb-lg-16"
          density="default"
          style="background: transparent"
        >
          <thead class="table-header-wrapper">
            <tr>
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
                  $995.00
                </h5>
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

<script setup>
import axios from "@axios"
import { useRoute } from "vue-router"
import productPlaceholder from "@images/add-product/product-placeholder.png"
import avatar from "@images/avatars/avatar-1.png"
import logo from "@images/proposals/logo-black.png"
import weddingDj from "@images/proposals/wedding-dj.png"

const acceptedValue = ref(false)
const rejectedValue = ref(false)

const status = ref(null)

// const status = ref('accepted')

// const status = ref('rejected')

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

const notes1 = ref("")
const notes2 = ref("")
const notes3 = ref("")

const inquiry = ref({})

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
    text: "Inquiries",
    disabled: false,
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
.view-para{
  margin-block-end: 0;
}


// .proposal-btn .v-btn__content{
//   padding: 0px 45px;
// }


// .modal-card-wrapper.v-card{
//   padding: 60px;
// }

.top-message{
  max-width: 1200px;
}

.rejectedBtn.v-btn--variant-outlined:not([class*=text-]) {
    border-color:  #FF334B;
    border-radius: 10px;
}

.blackBtn.v-btn--variant-outlined:not([class*=text-]) {
    border-color:  #000;
    border-radius: 10px;
}

.accpedtedBtn{
  border-radius: 10px;
}

.add-product-wrap .cardBg{
  background: #F8F8FA;
  border-radius: none;
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
