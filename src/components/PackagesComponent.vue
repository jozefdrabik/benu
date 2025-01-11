<template>
  <section
    class="flex flex-col lg:flex-row items-center justify-between container"
  >
    <div class="space-y-10 lg:w-1/2">
      <div class="w-[94px] h-[7px] bg-[#E74040]" />
      <h2 class="text-4xl text-blue-black font-bold">Approachable Packages</h2>
      <p class="text-gray md:w-2/3">
        Problems trying to resolve the conflict between the two major realms of
        Classical physics: Newtonian mechanics
      </p>
      <a
        href="#"
        class="text-sm flex text-green hover:text-green-800 font-semibold group w-fit"
        >Learn More
        <ArrowRightIcon
          class="w-5 ml-1 transition group-hover:translate-x-[5px]"
        />
      </a>
    </div>
    <div class="flex flex-col md:flex-row gap-4 w-full lg:w-1/2 mt-10 lg:mt-0">
      <div
        class="transition ease-in-out duration-500 hover:translate-x-2 shadow-xl p-8 space-y-6"
        v-for="(item, index) in packages"
        :key="index"
      >
        <div
          class="bg-green w-[70px] h-[70px] flex items-center justify-center rounded-lg"
        >
          <SVGComponent :name="item.img" class="bg-green w-8" />
        </div>
        <h3 class="text-blue-black font-bold">{{ item.title }}</h3>
        <div class="w-[50px] h-0.5 bg-[#E74040]" />
        <p class="text-gray">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/solid";
import SVGComponent from "@/components/SVGComponent.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      packages: [
        {
          title: "Certified Teacher",
          description: "The gradual accumulation of information about",
          img: "BlackBoard",
        },
        {
          title: "Expert Instruction",
          description: "The gradual accumulation of information about",
          img: "TelescopeIcon",
        },
      ],
    };
  },
};
</script>
