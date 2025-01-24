<template>
  <Layout>
    <div class="min-h-screen bg-white">
      <!-- Dashboard Content -->
      <div class="container mx-auto p-6">
        <!-- Header -->
        <div
          class="w-full flex items-center space-x-8 [&>p]:font-semibold [&>p]:cursor-pointer mb-8 border-b border-gray-300"
        >
          <RouterLink to="/" exact-active-class="active">
            <p class="">Dashboard</p>
          </RouterLink>
          <RouterLink to="/404" exact-active-class="active">
            <p class="">All Suppliers</p>
          </RouterLink>
          <RouterLink to="/404" exact-active-class="active">
            <p class="">Purchase order</p>
          </RouterLink>
          <RouterLink to="/404" exact-active-class="active">
            <p class="">Payments</p>
          </RouterLink>
          <RouterLink to="/404" exact-active-class="active">
            <p class="">Supplier's return</p>
          </RouterLink>
          <RouterLink to="/404" exact-active-class="active">
            <p class="">Product request</p>
          </RouterLink>
        </div>
        <!-- Header -->

        <!-- Download and Filter Section -->
        <div class="flex items-center justify-between mb-8">
          
            <h2 class="uppercase text-2xl font-semibold text-gray-800">
              Procurement Dashboard
            </h2>
         
          <div class="flex items-center space-x-4">
            <button
              class="border border-gray-300 px-4 py-2 rounded-md font-semibold text-lg flex items-center space-x-2 cursor-pointer"
            >
              <img
                src="../assets/filter.png"
                alt="Filter"
                width="20"
                class="inline-block mr-2"
              />
              Filter
            </button>
            <button
              class="bg-blue-600 px-4 py-2 text-lg rounded-md text-white font-semibold flex items-center space-x-2 cursor-pointer"
            >
              <img
                src="../assets/download.png"
                alt="Download"
                width="20"
                class="inline-block mr-2"
              />
              Download Report
            </button>
          </div>
        </div>
        <!-- Download and Filter Section -->
        <div class="w-full grid grid-cols-12 gap-4">
          <!-- Stats Cards -->
          <div class="w-full col-span-9">
            <div class="grid grid-cols-3 gap-4 mb-8">
              <div class="card">
                <h3 class="text-gray-500">Received Suppliers</h3>
                <div class="space-y-4">
                  <p class="text-2xl font-semibold text-gray-600">60</p>
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
                <h3 class="text-gray-500">Received Products Qty</h3>
                <div class="space-y-4">
                  <p class="text-2xl font-semibold text-gray-600">20,550</p>
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
                <h3 class="text-gray-500">Value of Received Products</h3>
                <div class="space-y-4">
                  <p class="text-2xl font-semibold text-gray-600">₦5,250,000</p>
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
                <h3 class="text-gray-500">Orders Pending Arrival</h3>

                <p class="text-2xl font-semibold text-gray-600 mb-8">15</p>
              </div>
              <div class="card">
                <h3 class="text-gray-500">Orders Passed Delivery Date</h3>

                <p class="text-2xl font-semibold text-gray-600 mb-8">10</p>
              </div>
              <div class="card">
                <h3 class="text-gray-500">Average Processing Time</h3>

                <p
                  class="text-xl whitespace-nowrap font-semibold text-gray-600 mb-8"
                >
                  06 Days | 14 Hours | 53 Minutes
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="px-4 py-6 rounded-lg border border-gray-300">
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
                  <p>Less than 18 Months</p>
                  <p>More than 18 Months</p>
                </div>
              </div>
              <div class="px-4 py-6 rounded-lg border border-gray-300">
                <h3 class="text-lg font-semibold text-gray-700 mb-2">
                  Storage Space
                </h3>
                <p class="text-sm text-gray-500 font-semibold">
                  Ratio of used vs free storage space
                </p>
                <div class="my-8 flex items-center justify-center">
                  <div
                    class="relative flex items-center justify-center w-32 h-32"
                  >
                    <!-- Background Circle -->
                    <div
                      class="absolute w-full h-full rounded-full"
                      style="
                        background: conic-gradient(
                          #3b82f6 30% 80%,
                          #f3f4f6 80% 10%
                        );
                      "
                    ></div>

                    <!-- Inner White Circle -->
                    <div class="absolute w-24 h-24 bg-white rounded-full"></div>

                    <!-- Text in the center -->
                    <div class="absolute text-center">
                      <p class="text-lg font-bold text-black">70%</p>
                    </div>
                  </div>
                </div>

                <div
                  class="flex items-center justify-center space-x-4 [&>p]:text-sm [&>p]:text-gray-500 [&>p]:font-semibold"
                >
                  <p>Used Space</p>
                  <p>Free Space</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Stats Cards -->

          <!-- Side Section  -->
          <div
            class="col-span-3 w-full h-[90%] overflow-y-scroll p-4 border border-gray-300 rounded-md"
          >
            <div class="pb-6 border-b border-gray-300">
              <h2 class="top-0 text-lg font-semibold text-gray-700 mb-4">
                Top Suppliers
              </h2>
              <ul class="space-y-4">
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Emzor Pharmaceuticals</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[80%] h-full rounded-md bg-blue-500"></div>
                    </div>
                    <span class="font-semibold">₦235,000</span>
                  </div>
                </li>
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Fidson Healthcare</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[75%] h-full rounded-md bg-blue-500"></div>
                    </div>
                    <span class="font-semibold">₦122,040</span>
                  </div>
                </li>
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Emzor Pharmaceuticals</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[60%] h-full rounded-md bg-blue-500"></div>
                    </div>
                    <span class="font-semibold">₦76,320</span>
                  </div>
                </li>
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Fidson Healthcare</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[58%] h-full rounded-md bg-blue-500"></div>
                    </div>
                    <span class="font-semibold">₦63,470</span>
                  </div>
                </li>
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Emzor Pharmaceuticals</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[40%] h-full rounded-md bg-blue-500"></div>
                    </div>
                    <span class="font-semibold">₦4,609</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-4">
              <h2 class="text-lg font-semibold text-gray-700 mb-4">
                Top Products
              </h2>
              <ul class="space-y-4">
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Paracetamol</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[80%] h-full rounded-md bg-green-300"></div>
                    </div>
                    <span class="font-semibold">2,000</span>
                  </div>
                </li>
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Ibuprofen</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[50%] h-full rounded-md bg-green-300"></div>
                    </div>
                    <span class="font-semibold">500</span>
                  </div>
                </li>
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Amoxicillin</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[45%] h-full rounded-md bg-green-300"></div>
                    </div>
                    <span class="font-semibold">403</span>
                  </div>
                </li>
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Vitamin C Tablets</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[35%] h-full rounded-md bg-green-300"></div>
                    </div>
                    <span class="font-semibold">321</span>
                  </div>
                </li>
                <li class="text-gray-600 [&>p]:font-semibold">
                  <p>Artemether-Lumefantrine</p>
                  <div class="w-full flex items-center space-x-4">
                    <div class="w-[70%] rounded-md bg-gray-300 h-3">
                      <div class="w-[20%] h-full rounded-md bg-green-300"></div>
                    </div>
                    <span class="font-semibold">81</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!-- Side Section  -->
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../Layout/Layout.vue";
export default {
  components: { Layout },
};
</script>
