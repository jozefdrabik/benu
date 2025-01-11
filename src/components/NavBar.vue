<template>
  <nav
    class="flex items-center justify-between max-w-[1100px] mx-auto h-[100px] px-6 mb-10"
  >
    <div class="flex items-center">
      <div class="text-2xl font-bold text-blue-black mr-20">Brandname</div>
      <ul class="hidden md:flex space-x-5 text-gray font-bold">
        <li><a href="#" class="hover:text-gray-900">Home</a></li>
        <li><a href="#" class="hover:text-gray-900">Product</a></li>
        <li><a href="#" class="hover:text-gray-900">Pricing</a></li>
        <li><a href="#" class="hover:text-gray-900">Contact</a></li>
      </ul>
    </div>

    <div class="md:hidden flex items-center space-x-5">
      <button @click="toggleMenu" class="text-gray-700 hover:text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <div class="hidden md:flex items-center space-x-10">
      <a href="#" class="text-sm text-green hover:text-green-600 font-semibold"
        >Login</a
      >
      <ButtonComponent>
        JOIN US <ArrowRightIcon class="h-5 ml-2" />
      </ButtonComponent>
    </div>

    <div
      class="md:hidden fixed top-0 right-0 bottom-0 bg-white shadow-md w-4/5 md:w-2/3 h-screen flex flex-col items-center space-y-6 text-gray font-bold"
      v-if="isMenuOpen"
    >
      <div
        @click="toggleMenu"
        class="w-1/5 bg-black/25 fixed top-0 left-0 bottom-0"
      />
      <div class="self-end pt-3 pr-6">
        <button @click="toggleMenu" class="text-gray-700 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <ul
        class="flex flex-col items-center justify-center space-y-6 text-gray font-bold justify-items-center h-full"
      >
        <li><a href="#" class="hover:text-gray-900">Home</a></li>
        <li><a href="#" class="hover:text-gray-900">Product</a></li>
        <li><a href="#" class="hover:text-gray-900">Pricing</a></li>
        <li><a href="#" class="hover:text-gray-900">Contact</a></li>
        <li><a href="#" class="hover:text-gray-900">Login</a></li>
      </ul>
      <div class="flex items-center justify-center gap-6 pb-6">
        <a
          href="#"
          class="text-sm text-green hover:text-green-600 font-semibold"
          >Login</a
        >
        <ButtonComponent>
          JOIN US <ArrowRightIcon class="h-5 ml-2" />
        </ButtonComponent>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
import { ArrowRightIcon } from "@heroicons/vue/24/solid";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
