<template>
  <div class="bg-pink">
    <NavBar />
    <div class="flex flex-col md:flex-row lg:items-center lg:h-[700px] pl-6">
      <div class="flex xl:ml-28 2xl:ml-60">
        <div class="space-y-4 md:space-y-8">
          <h2 class="text-green text-sm font-bold">Welcome</h2>
          <h1
            class="text-4xl md:text-5xl xl:text-6xl font-bold text-blue-black"
          >
            Best Learning Opportunities
          </h1>
          <p class="text-gray text-lg md:text-xl md:w-[300px]">
            Our goal is to make online education work for everyone
          </p>
          <div class="flex justify-start space-x-4 w-[300px]">
            <ButtonComponent class="px-8"> Join Us </ButtonComponent>
            <ButtonComponent :white-variant="true" class="px-8"
              >Learn More</ButtonComponent
            >
          </div>
        </div>
      </div>
      <div class="flex justify-end w-full self-end">
        <img
          src="../assets/hero-cover-1.png"
          alt="Happy Student"
          width="704"
          height="682"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import ButtonComponent from "@/components/ButtonComponent.vue";
</script>
