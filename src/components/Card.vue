<template>
  <div class="card p-4 border border-gray-300 rounded-lg">
    <h3 class="text-gray-500 text-sm sm:text-base">{{ card.title }}</h3>
    <div class="space-y-4 mt-4">
      <p class="text-lg sm:text-xl font-semibold text-gray-600">
        {{ card.value }}
      </p>
      <p class="text-sm text-gray-600"
          :class="!(card.percentage || card.compared) && 'invisible'">
        <span 
          class="px-2 py-1 font-bold rounded-md text-xs sm:text-sm"
          :class="card.color || 'bg-gray-100 text-gray-500'"
        >
          {{ card.percentage }}
        </span>
        {{ card.compared }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>
