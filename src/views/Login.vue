<template>
    <div class="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-200">
      <h1 class="text-2xl font-semibold text-blue-600 text-center">Atlas</h1>
      <div class="flex justify-center items-center h-screen">
        <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-6 my-auto">
          <p class="text-gray-500 mt-1">PROCUREMENT</p>
          <h2 class="text-xl font-bold text-gray-700 mt-4">
            Sign in to your account
          </h2>
          <form class="mt-6 space-y-4">
            <!-- Phone Input -->
            <div>
              <label for="phone" class="block font-medium text-gray-600 mb-1">
                Phone
              </label>
              <div class="relative w-full">
                <span
                  class="absolute inset-y-0 left-2 flex items-center text-gray-500"
                  >NG +234|</span
                >
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter phone number"
                  class="w-full border border-gray-300 pl-20 px-4 py-2 rounded-md outline-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
  
            <!-- Password Input -->
            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-600 mb-1"
              >
                Password
              </label>
              <div class="relative w-full">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  placeholder="Enter your password"
                  class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  class="absolute inset-y-0 right-2 flex items-center text-gray-500 cursor-pointer"
                  @click="togglePasswordVisibility()"
                >
                    👁️‍🗨️
                </button>
              </div>
            </div>
  
            <!-- Keep me signed in -->
            <div class="flex items-center">
              <input
                type="checkbox"
                id="remember"
                class="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label for="remember" class="ml-2 text-sm text-gray-600">
                Keep me signed in
              </label>
            </div>
  
            <!-- Proceed Button -->
            <div class="border-b pb-8 border-gray-300">
              <button
                type="submit"
                aria-label="Proceed to Submit"
                class="w-full cursor-pointer bg-blue-600 text-white py-2 sm:py-3 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 transition"
              >
                Proceed
              </button>
            </div>
          </form>
  
          <!-- Forgot Password -->
          <a
            href="#"
            class="block text-center text-sm text-blue-600 mt-8 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        showPassword: false,
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      },
    },
  };
  </script>
  