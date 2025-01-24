<template>
  <!-- Navigation Bar -->
  <nav class="bg-white border-b border-gray-300">
    <div class="w-full flex items-center justify-between p-6">
      <div class="flex items-center justify-center space-x-6">
        <img
          src="../assets/menu.png"
          alt="Menu"
          width="20"
          class="inline-block cursor-pointer"
        />

        <div class="flex items-center justify-center space-x-2">
          <img
            src="../assets/atlas.png"
            alt="Atlas"
            width="30"
            class="inline-block rounded-full"
          />
          <h1 class="text-lg font-bold text-blue-600 cursor-default">Atlas</h1>
        </div>
        <select
          class="bg-gray-200 border border-gray-300 rounded-md px-3 py-1 cursor-pointer"
        >
          <option>Branch</option>
        </select>
      </div>
      <div class="flex items-center space-x-4">
        <div class="relative p-1">
          <div
            class="absolute z-20 top-0 px-2 text-xs bg-red-500 text-white rounded-lg cursor-pointer"
          >
            9+
          </div>
          <img
            src="../assets/bell.png"
            alt="Notification"
            width="20"
            class="inline-block rotate-45 cursor-pointer"
          />
        </div>
        <div>
          <img
            src="../assets/messenger.png"
            alt="Message"
            width="20"
            class="inline-block cursor-pointer"
          />
        </div>
        <div>
          <img
            src="../assets/user.png"
            alt="Profile"
            width="20"
            class="inline-block cursor-pointer"
          />
        </div>
      </div>
    </div>
  </nav>
</template>
