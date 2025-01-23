<template>
  <Layout>
    <div class="min-h-screen bg-gray-100">
      <!-- Dashboard Content -->
      <div class="container mx-auto p-6">
        <!-- Header -->
        <div
          class="flex items-center space-x-8 [&>p]:font-semibold [&>p]:cursor-pointer my-4"
        >
          <RouterLink to="/" exact-active-class="active">
            <p class="">Dashboard</p>
          </RouterLink>
          <RouterLink to="#" exact-active-class="active">
            <p class="">All Suppliers</p>
          </RouterLink>
          <RouterLink to="#" exact-active-class="active">
            <p class="">Purchase order</p>
          </RouterLink>
          <RouterLink to="#" exact-active-class="active">
            <p class="">Payments</p>
          </RouterLink>
          <RouterLink to="#" exact-active-class="active">
            <p class="">Supplier's return</p>
          </RouterLink>
          <RouterLink to="#" exact-active-class="active">
            <p class="">Product request</p>
          </RouterLink>
        </div>
        <!-- Header -->

        <!-- Download and Filter Section -->
        <div class="flex items-center justify-between mb-8">
          <h2 class="uppercase text-2xl font-semibold text-gray-800 mb-6">
            Procurement Dashboard
          </h2>
          <div class="flex items-center space-x-4">
            <button
              class="border border-gray-300 px-4 py-2 rounded-md font-semibold"
            >
              Filter
            </button>
            <button
              class="bg-blue-600 px-4 py-2 rounded-md text-white font-semibold"
            >
              Download Report
            </button>
          </div>
        </div>
        <!-- Download and Filter Section -->
        <div class="w-full grid grid-cols-12 gap-4">
          <!-- Stats Cards -->
          <div class="col-span-9 grid grid-cols-3 gap-4 mb-8">
            <div class="card">
              <h3 class=" text-gray-500">
                Received Suppliers
              </h3>
              <div class="space-y-4">
                <p class="text-3xl font-semibold text-gray-600">60</p>
                <p class="text-sm text-gray-600">
                  <span
                    class="px-4 py-1 bg-green-300 text-green-700 font-bold rounded-sm text-base"
                    >↑ 12.96%</span
                  >
                  Compared to last month
                </p>
              </div>
            </div>
            <div class="card">
              <h3 class=" text-gray-500">
                Received Products Qty
              </h3>
              <div class="space-y-4">
                <p class="text-3xl font-semibold text-gray-600">20,550</p>
                <p class="text-sm text-gray-600">
                  <span
                    class="px-4 py-1 bg-red-300 text-red-700 font-bold rounded-sm text-base"
                    >↑ 2.96%</span
                  >
                  Compared to last month
                </p>
              </div>
            </div>
            <div class="card">
              <h3 class=" text-gray-500">
                Value of Received Products
              </h3>
              <div class="space-y-4">
                <p class="text-3xl font-semibold text-gray-600">₦5,250,000</p>
                <p class="text-sm text-gray-600">
                  <span
                    class="px-4 py-1 bg-gray-300 text-gray-700 font-bold rounded-sm text-base"
                    >— 12.96%</span
                  >
                  Compared to last month
                </p>
              </div>
            </div>
            <div class="card">
              <h3 class=" text-gray-500">
                Orders Pending Arrival
              </h3>

              <p class="text-3xl font-semibold text-gray-600 mb-8">15</p>
              
            </div>

            <div class="card">
              <h3 class=" text-gray-500">
                Orders Passed Delivery Date
              </h3>

              <p class="text-3xl font-semibold text-gray-600 mb-8">10</p>
              
            </div>

            <div class="card">
              <h3 class=" text-gray-500">
                Average Processing Time
              </h3>
              
                <p class="text-3xl font-semibold text-gray-600 mb-8">₦5,250,000</p>
                
            </div>
          </div>
          <!-- Stats Cards -->

          <!-- Side Section  -->
          <div class="col-span-3 w-full p-4 border border-gray-300 rounded-md">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">
              Shelf Life Analysis
            </h3>
            <div id="shelf-life-chart" class="h-40 w-full"></div>
          </div>
          <!-- Side Section  -->
        </div>

        <!-- Charts Section -->
        <!-- <div class="grid grid-cols-2 gap-4 mb-8">
          <div class="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">
              Shelf Life Analysis
            </h3>
            <div id="shelf-life-chart" class="h-40 w-full"></div>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">
              Storage Space
            </h3>
            <div id="storage-space-chart" class="h-40 w-full"></div>
          </div>
        </div> -->

        <!-- Top Suppliers and Products Section -->
        <!-- <div class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">
              Top Suppliers
            </h3>
            <ul class="space-y-2">
              <li class="flex justify-between text-gray-600">
                <span>Emzor Pharmaceuticals</span>
                <span class="font-semibold">₦235,000</span>
              </li>
              
            </ul>
          </div>
          <div class="p-4 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 class="text-lg font-semibold text-gray-700 mb-4">
              Top Products
            </h3>
            <ul class="space-y-2">
              <li class="flex justify-between text-gray-600">
                <span>Paracetamol</span>
                <span class="font-semibold">2,000</span>
              </li>
              
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
export default {
  components: { Layout },
  mounted() {
    // Initialize charts using libraries like Chart.js or ApexCharts
    this.initShelfLifeChart();
    this.initStorageSpaceChart();
  },
  methods: {
    initShelfLifeChart() {
      // Add Chart.js or similar library logic
    },
    initStorageSpaceChart() {
      // Add Chart.js or similar library logic
    },
  },
};
</script>
