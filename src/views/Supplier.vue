<template>
  <Layout>
    <div
      class="w-full flex flex-wrap items-center justify-between space-x-4 sm:space-x-0 bg-white px-6 py-3 border-t border-gray-50"
    >
      <button
        @click="navigateTo('/')"
        class="w-full sm:w-0 flex items-center text-gray-600 text-lg cursor-pointer"
      >
        <i class="bx bx-chevron-left text-2xl"></i>
        Back
      </button>
      <h1
        class="text-sm sm:text-lg font-semibold whitespace-nowrap text-gray-700 flex-1 sm:flex-none"
      >
        SUPPLIER'S DASHBOARD
      </h1>
      <div class="flex items-center space-x-3">
        <button
          class="flex items-center rounded-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 text-sm sm:text-base"
        >
          <i class="bx bxs-pencil mr-1 text-base sm:text-xl"></i>
          Edit
        </button>
        <button
          class="flex items-centerm rounded-sm px-2 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300"
        >
          <i class="bx bx-dots-horizontal-rounded sm:text-2xl"></i>
        </button>
      </div>
    </div>

    <div
      class="w-[60%] flex flex-wrap sm:flex-nowrap sm:space-y-0 space-y-4 items-center p-6"
    >
      <div class="mr-8">
        <img
          src="../assets/fidson.png"
          alt="Fidson"
          class="min-w-12 h-12 object-contain"
        />
      </div>
      <div class="mr-20 flex-1 min-w-[200px]">
        <p class="font-bold mb-2">Supplier Info</p>
        <p class="font-medium text-gray-500">
          <i class="bx bx-store-alt text-gray-400"></i>
          Fidson Healthcare
        </p>
        <p class="font-medium text-gray-500 text-sm">
          <i class="bx bx-current-location text-gray-400"></i>
          4, Road 56, Lagos, Nigeria
        </p>
      </div>
      <div class="mr-20 flex-1 min-w-[200px]">
        <p class="font-bold mb-2">Contact Info</p>
        <p class="text-gray-500 font-medium text-sm">
          <span class="font-medium">
            <i class="bx bx-envelope text-gray-400"></i>
            musa@example.com
          </span>
        </p>
        <p class="text-gray-500 font-medium">
          <i class="bx bx-mobile text-gray-400"></i>
          +234 801 234 5678
        </p>
      </div>
      <div class="flex-1 min-w-[200px]">
        <p class="font-bold mb-2">Bank Info</p>
        <p class="font-medium text-sm text-gray-500">
          <i class="bx bxs-bank text-gray-400"></i>
          First Bank Plc
        </p>
        <p class="text-gray-500 text-sm">
          <i class="bx bx-mobile text-gray-400"></i>
          -----
        </p>
      </div>
    </div>

    <div
      class="w-[60%] grid grid-cols-1 sm:grid-cols-5 gap-4 items-center justify-center p-6 font-medium mx-6 bg-white rounded-md mb-6 border border-gray-300"
    >
      <div class="w-full border-b sm:border-b-0 sm:border-r border-gray-300 whitespace-nowrap">
        <p class="text-gray-500 font-medium mb-3">
          Purchase Order
          <span
            class="font-bold text-sm text-gray-700 mx-4 p-1 rounded-md bg-gray-100"
            >40</span
          >
        </p>

        <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
      </div>
      <div class="w-full border-b sm:border-b-0 sm:border-r border-gray-300 whitespace-nowrap">
        <p class="text-gray-500 font-medium mb-3">
          Invoices
          <span
            class="font-bold text-sm text-gray-700 mx-4 p-1 rounded-md bg-gray-100"
            >20</span
          >
        </p>

        <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
      </div>
      <div class="w-full border-b sm:border-b-0 sm:border-r border-gray-300 whitespace-nowrap">
        <p class="text-gray-500 font-medium mb-3">
          Payments
          <span
            class="font-bold text-sm text-gray-700 mx-4 p-1 rounded-md bg-gray-100"
            >25</span
          >
        </p>

        <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
      </div>
      <div class="w-full border-b sm:border-b-0 sm:border-r border-gray-300 whitespace-nowrap">
        <p class="text-gray-500 font-medium mb-3">Purchase Qty</p>
        <p class="font-bold text-lg text-gray-600">12</p>
      </div>
      <div class="">
        <p class="text-gray-500 font-medium mb-3">Returns</p>
        <p class="font-bold text-lg text-gray-600">0</p>
      </div>
    </div>

    <div class="border-gray-200 mx-6">
      <div class="flex space-x-4" aria-label="Tabs">
        <a href="#" class="px-4 py-2 font-medium bg-white rounded">
          Purchase Order
        </a>
        <a href="#" class="px-4 py-2 font-medium text-gray-500"> Invoices </a>
        <a href="#" class="px-4 py-2 font-medium text-gray-500"> Payment </a>
      </div>
    </div>

    <div class="flex flex-wrap justify-between items-center p-6 bg-white">
      <h2 class="text-gray-500 font-bold">PURCHASE ORDER</h2>
      <div class="flex flex-wrap gap-3 items-center space-x-4">
        <div
          class="flex items-center rounded-md px-3 font-medium bg-gray-200 py-1"
        >
          <label
            for="page-select"
            class="mr-2 text-sm sm:text-base text-gray-700"
            >Page</label
          >
          <select id="page-select" class="text-sm sm:text-base text-gray-700">
            <option>1/6</option>
          </select>
        </div>
        <div
          class="flex items-center border text-gray-700 border-gray-400 rounded-md px-3 py-1"
        >
          <i class="bx bx-search"></i>
          <input type="text" placeholder="Search" class="font-medium ml-2" />
        </div>
        <button
          class="flex items-center border rounded-md px-3 py-1 text-gray-700"
        >
          <i class="bx bx-filter mr-1 text-2xl"></i>
          Filter
        </button>
        <button
          class="flex items-center border rounded-md px-3 py-1 text-gray-700"
        >
          <i class="bx bx-sort mr-1"></i>
          Sort by
        </button>
        <button class="flex items-center text-gray-700">
          <i class="bx bx-list-ul text-3xl"></i>
        </button>
        <button class="flex items-center text-gray-700">
          <i class="bx bxs-dashboard text-2xl"></i>
        </button>
      </div>
    </div>

    <div class="w-full bg-white px-6 pb-8 overflow-x-auto">
      <div class="rounded-xl border border-gray-300 overflow-hidden">
        <table class="min-w-full table-auto">
          <!-- Table Head -->
          <thead>
            <tr class="bg-gray-50 text-left text-gray-600 font-semibold [&>th]:px-4 [&>th]:py-2">
              <th>Order No</th>
              <th>Supplier's Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Total</th>
              <th>Quantity</th>
              <th>Quantity Returned</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <!-- Table Body -->
          <tbody class="text-gray-800">
            <!-- Table Row -->
            <tr class="border-t bg-gray-100 border-gray-300 hover:bg-gray-50 [&>td]:py-2 [&>td]:px-4">
              <td>RHPO-1651244214</td>
              <td>Fidson Healthcare</td>
              <td>Trade</td>
              <td>5/21/2024</td>
              <td>₦2,055,043.00</td>
              <td>93</td>
              <td>1</td>
              <td>
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-2">
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>

            <tr class="border-t bg-white border-gray-300 hover:bg-gray-50">
              <td class="px-4 py-2">RHPO-1651244211</td>
              <td class="px-4 py-2">Fidson Healthcare</td>
              <td class="px-4 py-2">Trade</td>
              <td class="px-4 py-2">3/25/2024</td>
              <td class="px-4 py-2">₦423,369.55</td>
              <td class="px-4 py-2">120</td>
              <td class="px-4 py-2">2</td>
              <td class="px-4 py-2">
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Approved
                </span>
              </td>
              <td class="px-4 py-2">
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
            <tr class="border-t bg-white border-gray-300 hover:bg-gray-50 [&>td]:py-2 [&>td]:px-4">
              <td>RHPO-1651244214</td>
              <td>Fidson Healthcare</td>
              <td>Trade</td>
              <td>5/21/2024</td>
              <td>₦2,055,043.00</td>
              <td>93</td>
              <td>1</td> 
              <td>
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Approved
                </span>
              </td>
              <td>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
            <tr
              class="border-t bg-white border-gray-300 hover:bg-gray-50 [&>td]:px-4 [&>td]:py-2"
            >
              <td>RHPO-1651244211</td>
              <td>Fidson Healthcare</td>
              <td>Trade</td>
              <td>3/25/2024</td>
              <td>₦423,369.55</td>
              <td>120</td>
              <td>2</td>
              <td>
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Approved
                </span>
              </td>
              <td>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
            <tr
              class="border-t bg-white border-gray-300 hover:bg-gray-50 [&>td]:px-4 [&>td]:py-2"
            >
              <td>RHPO-1651244214</td>
              <td>Fidson Healthcare</td>
              <td>Trade</td>
              <td>5/21/2024</td>
              <td>₦2,055,043.00</td>
              <td>93</td>
              <td>1</td>
              <td>
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Approved
                </span>
              </td>
              <td>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
            <tr
              class="border-t bg-white border-gray-300 hover:bg-gray-50 [&>td]:px-4 [&>td]:py-2"
            >
              <td>RHPO-1651244211</td>
              <td>Fidson Healthcare</td>
              <td>Trade</td>
              <td>3/25/2024</td>
              <td>₦423,369.55</td>
              <td>120</td>
              <td>2</td>
              <td>
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Approved
                </span>
              </td>
              <td>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
            <tr class="border-t bg-white border-gray-300 hover:bg-gray-50 [&>td]:px-4 [&>td]:py-2">
              <td>RHPO-1651244211</td>
              <td>Fidson Healthcare</td>
              <td>Trade</td>
              <td>3/25/2024</td>
              <td>₦423,369.55</td>
              <td>120</td>
              <td>2</td>
              <td>
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Approved
                </span>
              </td>
              <td>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
            <tr class="border-t bg-white border-gray-300 hover:bg-gray-50 [&>td]:px-4 [&>td]:py-2">
              <td>RHPO-1651244211</td>
              <td>Fidson Healthcare</td>
              <td>Trade</td>
              <td>3/25/2024</td>
              <td>₦423,369.55</td>
              <td>120</td>
              <td>2</td>
              <td>
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Approved
                </span>
              </td>
              <td>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
            <tr class="border-t bg-white border-gray-300 hover:bg-gray-50 [&>td]:px-4 [&>td]:py-2">
              <td>RHPO-1651244211</td>
              <td>Fidson Healthcare</td>
              <td>Trade</td>
              <td>3/25/2024</td>
              <td>₦423,369.55</td>
              <td>120</td>
              <td>2</td>
              <td>
                <span
                  class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded"
                >
                  Confirm
                </span>
              </td>
              <td>
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
</template>

<script setup>
// Using Composition Api Here
import Layout from "../Layout/Layout.vue";
import { useRouter } from "vue-router";

const router = useRouter();

    const navigateTo  = (route) => {
      console.log("back");
      router.push(route);
    };

</script>
