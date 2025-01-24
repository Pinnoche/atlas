<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-gray-100 to-gray-200">
    <h1 class="p-2 text-4xl font-semibold text-blue-600 text-center flex items-center justify-center">
      <img src="../assets/atlas.png" alt="Atlas" width="50" class="inline-block rounded-full" />
      Atlas
    </h1>
    <div class="flex justify-center items-center h-screen">
      <div class="w-full max-w-lg bg-white rounded-lg shadow-md p-6 my-auto">
        <p class="text-gray-500 font-semibold mt-1">PROCUREMENT</p>
        <h2 class="text-3xl font-semibold text-gray-700 my-2">
          Sign in to your account
        </h2>
        <form class="mt-6 space-y-4">
          <!-- Phone Input -->
          <div>
            <label for="phone" class="block font-medium text-gray-600 mb-1">
              Phone
            </label>
            <div class="relative w-full">
              <p
                class="absolute inset-y-0 left-2 flex items-center space-x-2 text-gray-500"
                ><span><img src="../assets/flag.png" alt="NGN" width="20"></span> <span>+234|</span></p
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
                v-if="showPassword"
                type="button"
                class="absolute inset-y-0 right-2 flex items-center text-gray-500 cursor-pointer"
                @click="togglePasswordVisibility()"
              >
                <img src="../assets/visibility_off.svg" alt="visiblity_off">
              </button>
              <button
                v-else
                type="button"
                class="absolute inset-y-0 right-2 flex items-center text-gray-500 cursor-pointer"
                @click="togglePasswordVisibility()"
              >
                <img src="../assets/visibility_onn.svg" alt="visiblity_on">
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
