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
//   data() {
//     return {
//       nav_items: [
//         {
//           title: "Dashboard",
//           url: "/home",
//           icon: "menu/dashboard.svg",
//           isFixed: false,
//         },

//         {
//           title: "Schools",
//           url: "/schools",
//           icon: "menu/school-structure.svg",
//           isFixed: false,
//         },

//         {
//           title: "Notifications",
//           url: "/notifications",
//           icon: "menu/notifications.svg",
//           isFixed: true,
//           mobileNav: true,
//         },

//         {
//           title: "Settings",
//           url: "/settings",
//           icon: "menu/settings.svg",
//           isFixed: true,
//           mobileNav: true,
//         },

//         {
//           title: "logout",
//           url: "/logout",
//           icon: "menu/logout.svg",
//           isFixed: true,
//           mobileNav: true,
//           method: "post",
//         },
//       ],
//     };
//   },
};
</script>

<style>
header {
  padding: 20px;
}
</style>
