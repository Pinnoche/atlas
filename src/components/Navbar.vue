<template>
    <!-- Navigation Bar -->
    <nav class="bg-white">
        <div class="container flex items-center justify-between p-4">
          <div class="flex items-center space-x-8">
            <!-- <img src="/path-to-logo.png" alt="Logo" class="h-8 mr-4" /> -->
            <h1 class="text-lg font-bold text-blue-600">Atlas</h1>
            <select class="bg-gray-200 border border-gray-300 rounded-md px-2 py-1">
              <option>Branch</option>
            </select>
          </div>
          <div class="flex items-center space-x-4">
            
            <ul class="flex space-x-6 text-gray-600">
              <li><a href="#" class="hover:text-blue-600">Dashboard</a></li>
              <li><a href="#" class="hover:text-blue-600">All Suppliers</a></li>
              <li><a href="#" class="hover:text-blue-600">Purchase Order</a></li>
              <li><a href="#" class="hover:text-blue-600">Payments</a></li>
              <li><a href="#" class="hover:text-blue-600">Supplier's Return</a></li>
              <li><a href="#" class="hover:text-blue-600">Product Request</a></li>
            </ul>
          </div>
        </div>
      </nav>
</template>