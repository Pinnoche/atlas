<template>
  <div class="bg-gray-100 font-family-karla">
    <div class="w-full flex flex-col min-h-screen">
      <!-- Header -->
      <Navbar />

      <!-- Main Content -->
      <main class="w-full flex-grow">
        <!-- Page Content -->
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");
</style>
