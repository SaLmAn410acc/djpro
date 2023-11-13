<script setup>
import axios from "@axios"
import { VDataTable } from "vuetify/labs/VDataTable"

const filters = ref(["all", "read", "unread", "assigned"])

// watch filters array for changes
watch(
  filters,
  (newVal, oldVal) => {
    if (newVal.includes("all")) {
      filters.value = ["all", "read", "unread", "assigned"]
    }
    if (newVal.length === 3 && newVal.includes("all")) {
      filters.value = newVal.filter(item => item !== "all")
    }

    if (newVal.length === 3 && !newVal.includes("all")) {
      filters.value = ["all", ...newVal]
    }
  },
  { deep: true },
)

const loading = ref(false)
const data = ref([])

const getData = async () => {
  try {
    loading.value = true

    const res = await axios.get("/Inquiry/GetList")

    data.value = res.data
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getData()
})

const headers = [
  {
    title: "#",
    key: "id",
  },
  {
    title: "Event Type",
    key: "eventType",
  },
  {
    title: "Date",
    key: "eventDate",
  },
  {
    title: "Client's Name",
    key: "full_name",
  },
  {
    title: "Assigned To",
    key: "performer",
  },
  {
    title: "Notes",
    sortable: false,
    key: "notes",
  },
  {
    title: "View",
    key: "view_edit_profile",
    sortable: false,
    align: "center",
  },
]

const itemPerPageOptions = [
  {
    title: "12",
    value: 12,
  },
  {
    title: "24",
    value: 24,
  },
  {
    title: "36",
    value: 36,
  },
  {
    title: "$vuetify.dataFooter.itemsPerPageAll",
    value: -1,
  },
]

const formatDate = dateString => {
  const date = new Date(dateString)
  
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
}
</script>

<template>
  <div class="main-service-wrap">
    <VRow align="center">
      <VCol>
        <h1 class="text-h2 mb-6">
          Inquiries
        </h1>
      </VCol>
      <VCol cols="auto">
        <div class="d-flex gap-x-2">
          <VBtn
            v-for="filter in filters"
            :key="filter"
            density="comfortable"
            size="none"
            color="#F8F8FA"
            variant="flat"
            class="py-2 px-3 text-body-2 font-weight-medium text-black"
            @click="filters = filters.filter((item) => item !== filter)"
          >
            {{ filter.charAt(0).toUpperCase() + filter.slice(1) }}
            <VIcon class="ms-2">
              ph:x-bold
            </VIcon>
          </VBtn>
        </div>
      </VCol>
      <VCol cols="auto">
        <VMenu
          transition="scale-transition"
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <VBtn
              class="font-weight-medium"
              variant="outlined"
              color="#EEEEEE"
              size="x-large"
              v-bind="props"
            >
              <span class="text-black font-weight-medium">
                Filter
                <VIcon
                  size="22px"
                  color="primary"
                >bi:filter</VIcon>
              </span>
            </VBtn>
          </template>
          <VCard>
            <VCardText>
              <ul class="list-none">
                <li>
                  <VCheckbox
                    v-model="filters"
                    label="All"
                    value="all"
                  />
                </li>
                <li>
                  <VCheckbox
                    v-model="filters"
                    label="Read"
                    value="read"
                  />
                </li>
                <li>
                  <VCheckbox
                    v-model="filters"
                    label="Unread"
                    value="unread"
                  />
                </li>
                <li>
                  <VCheckbox
                    v-model="filters"
                    label="Assigned"
                    value="assigned"
                  />
                </li>
              </ul>
            </VCardText>
          </VCard>
        </VMenu>
      </VCol>
    </VRow>
    <VDataTable
      :headers="headers"
      :items="data"
      :items-per-page="12"
      items-per-page-text="Show"
      :loading="loading"
      :items-per-page-options="itemPerPageOptions"
      :sort-by="[{ key: 'id', order: 'desc' }]"
    >
      <template #item.full_name="{ item }">
        <div class="d-flex align-center">
          {{ item.raw.firstName }} {{ item.raw.lastName }}
        </div>
      </template>
      <template #item.eventDate="{ item }">
        <div class="d-flex align-center">
          {{ formatDate(item.raw.eventDate) }}
        </div>
      </template>
      <template #item.eventType="{ item }">
        {{ item.raw.eventType.name }}
      </template>
      <template #item.id="{ item }">
        <div class="d-flex align-center">
          <span
            class="circle-dot"
            :style="{ backgroundColor: item.raw.color }"
          />
          <span class="font-weight-medium">{{ item.raw.id ?? "-" }}</span>
        </div>
      </template>
      <template #item.performer="{ item }">
        <div class="d-flex align-center">
          <VImg
            v-if="item?.raw?.performer?.imageFile"
            :src="item?.raw?.performer?.imageFile"
            :lazy-src="item?.raw?.performer?.imageFile"
            width="40"
            height="40"
            class="flex-0-1 mr-3 rounded-circle"
          />
          <span class="font-weight-medium">{{ item?.raw?.performer?.firstName }}
            {{ item?.raw?.performer?.lastName }}</span>
        </div>
      </template>
      <template #item.notes="{ item }">
        <span
          v-for="note in item.raw.notes"
          :key="note"
          class="font-weight-medium d-block"
        >{{ note ?? "-" }}</span>
      </template>
      <template #item.view_edit_profile="{ item }">
        <VBtn
          :to="{ name: 'inquiries-detail', params: { slug: item.raw.id } }"
          variant="plain"
          color="#000"
          size="none"
          density="comfortable"
          class="px-2"
        >
          <VIcon
            icon="heroicons:eye"
            size="30"
          />
        </VBtn>
        <VMenu
          transition="scale-transition"
          :close-on-content-click="false"
        >
          <template #activator="{ props }">
            <VBtn
              variant="plain"
              color="#000"
              size="none"
              density="comfortable"
              class="px-2"
              v-bind="props"
            >
              <VIcon
                icon="pepicons-pencil:dots-y"
                size="30"
              />
            </VBtn>
          </template>
          <VCard>
            <VList>
              <VListItem>
                <a
                  href="#"
                  class="text-black font-weight-medium"
                >Archive Quote</a>
              </VListItem>
              <VListItem>
                <a
                  href="#"
                  class="text-black font-weight-medium"
                >Delete Quote</a>
              </VListItem>
            </VList>
          </VCard>
        </VMenu>
      </template>
    </VDataTable>
  </div>
</template>

<style lang="scss">
.circle-dot {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #6a8afa;
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 10px;
    height: 10px;
  }
}
</style>
