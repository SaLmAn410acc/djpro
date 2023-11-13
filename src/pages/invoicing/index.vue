<script setup>
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

const data = ref([
  {
    id: 1037,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "John Doe",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#93c36f",
    reminder_sent: true,
  },
  {
    id: 1038,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Tom Higgins",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#597134",
    reminder_sent: true,
  },
  {
    id: 1039,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Jessie McKenzie",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#785639",
    reminder_sent: true,
  },
  {
    id: 1040,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Francis Carlson",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#b605dc",
    reminder_sent: true,
  },
  {
    id: 1041,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Ray Pierce",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#558f89",
    reminder_sent: false,
  },
  {
    id: 1042,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Edith James",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#dee066",
    reminder_sent: false,
  },
  {
    id: 1043,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Bradley Greene",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#743d02",
    reminder_sent: false,
  },
  {
    id: 1044,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "John Doe",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#93c36f",
    reminder_sent: true,
  },
  {
    id: 1045,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Tom Higgins",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#597134",
    reminder_sent: true,
  },
  {
    id: 1046,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Jessie McKenzie",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#785639",
    reminder_sent: true,
  },
  {
    id: 1047,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Francis Carlson",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#b605dc",
    reminder_sent: true,
  },
  {
    id: 1048,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Ray Pierce",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#558f89",
    reminder_sent: false,
  },
  {
    id: 1049,
    issued_on: "12/12/2021",
    due_on: "12/12/2021",
    event_type: "Wedding",
    client_name: "Edith James",
    total: "$1000",
    paid: "$500",
    slug: "john-doe",
    color: "#dee066",
    reminder_sent: false,
  },
])

const headers = [
  {
    title: "ID",
    key: "id",
  },
  {
    title: "Issued On",
    key: "issued_on",
  },
  {
    title: "Due On",
    key: "due_on",
  },
  {
    title: "Event Type",
    key: "event_type",
  },
  {
    title: "Client's Name",
    key: "client_name",
  },
  {
    title: "Total",
    key: "total",
  },
  {
    title: "Paid",
    key: "paid",
  },
  {
    key: "reminder",
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
</script>

<template>
  <div class="main-service-wrap">
    <VRow align="center">
      <VCol>
        <h1 class="text-h2 mb-6">
          Invoicing
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
      :items-per-page-options="itemPerPageOptions"
    >
      <template #item.id="{ item }">
        <div class="d-flex align-center">
          <span
            class="circle-dot"
            :style="{ backgroundColor: item.raw.color }"
          />
          <span class="font-weight-medium">{{ item.raw.id ?? "-" }}</span>
        </div>
      </template>
      <template #item.paid="{ item }">
        <span
          class="font-weight-medium"
          :style="{ color: item.raw.color }"
        >{{
          item.raw.paid ?? "-"
        }}</span>
      </template>
      <template #item.reminder="{ item }">
        <VBtn
          v-if="!item.raw.reminder_sent"
          size="none"
          density="comfortable"
          class="font-weight-medium px-4"
        >
          Send Reminder
        </VBtn>
      </template>
      <template #item.view_edit_profile="{ item }">
        <VBtn
          :to="{ name: 'invoicing-create-invoice' }"
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
  background-color: #fe0b8e;
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 10px;
    height: 10px;
  }
}
</style>
