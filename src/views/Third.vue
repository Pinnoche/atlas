<template>
    <Layout>
      <!-- Header Section -->
      <div class="flex flex-wrap items-center justify-between bg-white px-6 py-3 border-t border-gray-300">
        <button class="flex items-center text-gray-600 text-lg">
          <i class="bx bx-chevron-left text-2xl"></i>
          Back
        </button>
        <h1 class="text-lg font-semibold text-gray-700 text-center flex-1 sm:flex-none">
          SUPPLIER'S DASHBOARD
        </h1>
        <div class="flex items-center space-x-3">
          <button class="flex items-center rounded-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-700">
            <i class="bx bxs-pencil mr-1 text-xl"></i>
            Edit
          </button>
          <button class="flex items-center rounded-sm px-2 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300">
            <i class="bx bx-dots-horizontal-rounded text-2xl"></i>
          </button>
        </div>
      </div>
  
      <!-- Supplier Info Section -->
      <div class="flex flex-wrap items-center p-6 space-y-4 sm:space-y-0 sm:flex-nowrap">
        <div class="mr-8">
          <img src="../assets/fidson.png" alt="Fidson" class="w-16 h-16 object-contain" />
        </div>
        <div class="mr-20 flex-1 min-w-[200px]">
          <p class="font-bold text-lg mb-2">Supplier Info</p>
          <p class="font-medium text-gray-500">
            <i class="bx bx-store-alt text-gray-400"></i> Fidson Healthcare
          </p>
          <p class="font-medium text-gray-500">
            <i class="bx bx-current-location text-gray-400"></i> 4, Road 56, Lagos, Nigeria
          </p>
        </div>
        <div class="mr-20 flex-1 min-w-[200px]">
          <p class="font-bold text-lg mb-2">Contact Info</p>
          <p class="text-gray-500 font-medium">
            <i class="bx bx-envelope text-gray-400"></i> musa@example.com
          </p>
          <p class="text-gray-500 font-medium">
            <i class="bx bx-mobile text-gray-400"></i> +234 801 234 5678
          </p>
        </div>
        <div class="flex-1 min-w-[200px]">
          <p class="font-bold text-lg mb-2">Bank Info</p>
          <p class="font-medium text-gray-500">
            <i class="bx bxs-bank text-gray-400"></i> First Bank Plc
          </p>
          <p class="text-gray-500">
            <i class="bx bx-mobile text-gray-400"></i> -----
          </p>
        </div>
      </div>
  
      <!-- Stats Section -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 w-full p-6 font-medium mx-6 bg-white rounded-md mb-6"
      >
        <div>
          <p class="text-gray-500 font-medium text-lg mb-3">
            Purchase Order
            <span class="font-bold text-sm text-gray-700 ml-6 p-1 rounded-md bg-gray-100">40</span>
          </p>
          <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
        </div>
        <div>
          <p class="text-gray-500 font-medium text-lg mb-3">
            Invoices
            <span class="font-bold text-sm text-gray-700 ml-6 p-1 rounded-md bg-gray-100">20</span>
          </p>
          <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
        </div>
        <div>
          <p class="text-gray-500 font-medium text-lg mb-3">
            Payments
            <span class="font-bold text-sm text-gray-700 ml-6 p-1 rounded-md bg-gray-100">25</span>
          </p>
          <p class="font-bold text-lg text-gray-600">₦5,250,000</p>
        </div>
        <div>
          <p class="text-gray-500 font-medium text-lg mb-3">Purchase Qty</p>
          <p class="font-bold text-lg text-gray-600">12</p>
        </div>
        <div>
          <p class="text-gray-500 font-medium text-lg mb-3">Returns</p>
          <p class="font-bold text-lg text-gray-600">0</p>
        </div>
      </div>
  
      <!-- Table Section -->
      <div class="w-full bg-white px-6 pb-8 overflow-x-auto">
        <table class="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-50 text-left text-gray-600 font-semibold">
              <th class="px-4 py-2 border border-gray-300">Order No</th>
              <th class="px-4 py-2 border border-gray-300">Supplier's Name</th>
              <th class="px-4 py-2 border border-gray-300">Type</th>
              <th class="px-4 py-2 border border-gray-300">Date</th>
              <th class="px-4 py-2 border border-gray-300">Total</th>
              <th class="px-4 py-2 border border-gray-300">Quantity</th>
              <th class="px-4 py-2 border border-gray-300">Quantity Returned</th>
              <th class="px-4 py-2 border border-gray-300">Status</th>
              <th class="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody class="text-gray-800">
            <tr class="border-t bg-gray-100 border-gray-300 hover:bg-gray-50">
              <td class="px-4 py-2">RHPO-1651244214</td>
              <td class="px-4 py-2">Fidson Healthcare</td>
              <td class="px-4 py-2">Trade</td>
              <td class="px-4 py-2">5/21/2024</td>
              <td class="px-4 py-2">₦2,055,043.00</td>
              <td class="px-4 py-2">93</td>
              <td class="px-4 py-2">1</td>
              <td class="px-4 py-2">
                <span class="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                  Approved
                </span>
              </td>
              <td class="px-4 py-2">
                <button class="text-gray-500 hover:text-gray-700">
                  <i class="bx bx-dots-vertical-rounded"></i>
                </button>
              </td>
            </tr>
            <!-- Additional Rows -->
          </tbody>
        </table>
      </div>
    </Layout>
  </template>
  