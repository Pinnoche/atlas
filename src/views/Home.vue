<template>
  <Layout>
    <div class="w-full min-h-screen bg-white py-2">
      <!-- Dashboard Content -->

      <!-- Header -->
      <div class="w-full px-4 sm:px-6 flex flex-wrap items-center gap-4 sm:gap-8 my-6 border-b border-b-gray-300 pb-4">
        <div v-for="(header, index) in headers" :key="header.id">
          <RouterLink
            :to="header.link"
            exact-active-class="active"
            class="font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap text-gray-500 cursor-pointer hover:text-blue-600"
          >
            {{ header.name }}
          </RouterLink>
        </div>
      </div>

      <!-- Dashboard Main Section -->
      <div class="container w-full px-4 sm:px-6 py-4">
        <!-- Download and Filter Section -->
        <div class="flex flex-wrap items-center justify-between mb-8 gap-4">
          <h2 class="uppercase text-sm sm:text-xl md:text-2xl font-semibold text-gray-800">
            Procurement Dashboard
          </h2>

          <div class="flex flex-wrap items-center gap-4">
            <button class="border border-gray-300 hover:border-gray-400 px-4 py-2 rounded-md font-semibold text-sm sm:text-base flex items-center gap-2">
              <img src="../assets/filter.png" alt="Filter" class="w-4 h-4 sm:w-6 sm:h-6" />
              <span>Filter</span>
            </button>
            <button class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white font-semibold text-sm sm:text-base flex items-center gap-2">
              <img src="../assets/download.png" alt="Download" class="w-4 h-4 sm:w-6 sm:h-6" />
              <span>Download Report</span>
            </button>
          </div>
        </div>

        <!-- Stats Cards Section -->
        <div class="w-full grid grid-cols-1 md:grid-cols-12 gap-6">
          <!-- Main Stats Cards -->
          <div class="w-full md:col-span-9">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div v-for="card in cards" :key="card.id">
                <div class="card p-4 border border-gray-300 rounded-lg">
                  <h3 class="text-gray-500 text-sm sm:text-base">{{ card.title }}</h3>
                  <div class="space-y-4 mt-4">
                    <p class="text-lg sm:text-xl font-semibold text-gray-600">
                      {{ card.value }}
                    </p>
                    <p class="text-sm text-gray-600">
                      <span
                        class="px-2 py-1 font-bold rounded-md text-xs sm:text-sm"
                        :class="card.color"
                      >
                        {{ card.percentage }}
                      </span>
                      {{ card.compared }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Analysis Section -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <!-- Shelf Life Analysis -->
              <div class="p-4 sm:p-6 rounded-lg border border-gray-300">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">
                  Shelf Life Analysis
                </h3>
                <p class="text-sm font-semibold text-gray-500">
                  Ratio of received products with expiry less than 18 months
                </p>
                <div class="my-8 flex items-center justify-center">
                  <div
                    class="relative flex items-center justify-center w-36 h-36"
                  >
                    <!-- Outer Circle -->
                    <div
                      class="absolute w-full h-full rounded-full"
                      style="
                        background: conic-gradient(
                          #3b82f6 85% 55%,
                          #f3f4f6 55% 85%
                        );
                      "
                    ></div>
                    <div class="absolute w-30 h-30 bg-white rounded-full"></div>
                    <!-- Inner Circle -->
                    <div
                      class="absolute w-28 h-28 rounded-full"
                      style="
                        background: conic-gradient(
                          #a3e635 0% 40%,
                          #f3f4f6 40% 100%
                        );
                      "
                    ></div>

                    <!-- Center White Circle -->
                    <div class="absolute w-20 h-20 bg-white rounded-full"></div>
                  </div>
                </div>

                <div
                  class="flex items-center justify-center space-x-4 [&>p]:text-sm [&>p]:text-gray-500 [&>p]:font-semibold"
                >
                  <p class="flex items-center gap-2"><span class="w-2 h-2 flex bg-[#3b82f6] rounded-full"></span>Less than 18 Months</p>
                  <p class="flex items-center gap-2"><span class="w-2 h-2 flex bg-[#a3e635] rounded-full"></span>More than 18 Months</p>
                </div>
              </div>

              <!-- Storage Space -->
              <div class="p-4 sm:p-6 rounded-lg border border-gray-300">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">
                  Storage Space
                </h3>
                <p class="text-sm text-gray-500 font-semibold">
                  Ratio of used vs free storage space
                </p>
                <div class="my-6 flex items-center justify-center">
                  <div class="relative flex items-center justify-center w-28 sm:w-32 h-28 sm:h-32">
                    <div
                      class="absolute w-full h-full rounded-full"
                      style="background: conic-gradient(#3b82f6 70%, #f3f4f6 30%);"
                    ></div>
                    <div class="absolute w-16 sm:w-20 h-16 sm:h-20 bg-white rounded-full flex items-center justify-center">
                      <p class="text-lg font-bold text-gray-700">70%</p>
                    </div>
                  </div>
                </div>
                <div class="flex justify-center gap-4 text-sm text-gray-500">
                  <p class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-[#3b82f6] rounded-full"></span> Used Space
                  </p>
                  <p class="flex items-center gap-2">
                    <span class="w-3 h-3 bg-[#f3f4f6] rounded-full"></span> Free Space
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Side Section -->
          <div class="w-full md:col-span-3 p-4 border border-gray-300 rounded-lg overflow-y-auto max-h-screen">
            <!-- Top Suppliers -->
            <div class="pb-6 border-b border-gray-300">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">
                Top Suppliers
              </h3>
              <ul class="space-y-4">
                <li v-for="supplier in topSuppliers" :key="supplier.id" class="text-gray-600">
                  <p class="font-semibold">{{ supplier.name }}</p>
                  <div class="flex items-center gap-4">
                    <div class="w-3/4 bg-gray-300 rounded-md h-3">
                      <div
                        :style="{ width: supplier.percentage }"
                        class="h-full bg-blue-500 rounded-md"
                      ></div>
                    </div>
                    <span class="font-semibold">{{ supplier.amount }}</span>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Top Products -->
            <div class="mt-6">
              <h3 class="text-lg font-semibold text-gray-700 mb-4">
                Top Products
              </h3>
              <ul class="space-y-4">
                <li v-for="product in topProducts" :key="product.id" class="text-gray-600">
                  <p class="font-semibold">{{ product.name }}</p>
                  <div class="flex items-center gap-4">
                    <div class="w-3/4 bg-gray-300 rounded-md h-3">
                      <div
                        :style="{ width: product.percentage }"
                        class="h-full bg-green-500 rounded-md"
                      ></div>
                    </div>
                    <span class="font-semibold">{{ product.quantity }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
import Layout from "../Layout/Layout.vue";
export default {
  components: { Layout },
  data() {
    return {
      headers: [
        { id: 1, name: "Dashboard", link: "/" },
        { id: 2, name: "All Suppliers", link: "/supplier" },
        { id: 3, name: "Purchase order", link: "/404" },
        { id: 4, name: "Payments", link: "/404" },
        { id: 5, name: "Supplier's return", link: "/404" },
        { id: 6, name: "Product request", link: "/404" },
      ],
      cards: [
        {
          id: 1,
          title: "Received Suppliers",
          value: "60",
          percentage: "↑ 12.96%",
          compared: "Compared to last month",
          color: "bg-green-300 text-green-700",
        },
        {
          id: 2,
          title: "Received Products Qty",
          value: "20,550",
          percentage: "↑ 2.96%",
          compared: "Compared to last month",
          color: "bg-red-300 text-red-700",
        },
        {
          id: 3,
          title: "Value of Received Products",
          value: "₦5,250,000",
          percentage: "— 12.96%",
          compared: "Compared to last month",
          color: "bg-gray-300 text-gray-700",
        },
        {
          id: 4,
          title: "Orders Pending Arrival",
          value: "15",
          percentage: "",
          compared: "",
          color: "",
        },
        {
          id: 5,
          title: "Orders Passed Delivery Date",
          value: "10",
          percentage: "",
          compared: "",
          color: "",
        },
        {
          id: 6,
          title: "Average Processing Time",
          value: "06 Days | 14 Hours | 53 Minutes",
          percentage: "",
          compared: "",
          color: "",
        },
      ],
      topSuppliers: [
        { name: "Emzor Pharmaceuticals", percentage: 80, amount: "₦235,000" },
        { name: "Fidson Healthcare", percentage: 75, amount: "₦122,040" },
        { name: "Emzor Pharmaceuticals", percentage: 60, amount: "₦76,320" },
        { name: "Fidson Healthcare", percentage: 58, amount: "₦63,470" },
        { name: "Emzor Pharmaceuticals", percentage: 40, amount: "₦4,609" },
      ],
      topProducts: [
        { name: "Paracetamol", percentage: 80, quantity: "2,000" },
        { name: "Ibuprofen", percentage: 50, quantity: "500" },
        { name: "Antibiotics", percentage: 90, quantity: "3,500" },
        { name: "Vitamin C", percentage: 40, quantity: "400" },
        { name: "Cough Syrup", percentage: 70, quantity: "1,500" },
      ],
    };
  },
};
</script>
