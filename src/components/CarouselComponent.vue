<template>
  <section class="container">
    <h3 class="title-green mb-4">Team</h3>
    <h2 class="title-blue">Get Quality Education</h2>
    <p class="mt-2 md:w-2/5 mb-5 md:mb-20">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </p>
    <Splide :options="options" aria-label="My Favorite Images">
      <SplideSlide
        class="flex flex-col justify-center items-center shadow-xl rounded-2xl !mb-20"
        v-for="(profile, index) in profiles"
        :key="index"
      >
        <img
          class="object-cover w-full rounded-t-2xl mb-6"
          :src="profile.image"
          alt="Sample 1"
        />
        <h4 class="font-bold text-blue-black">{{ profile.name }}</h4>
        <p class="text-gray my-3 text-sm">{{ profile.description }}</p>
        <div class="flex space-x-4">
          <SVGComponent name="FacebookIcon" class="w-6 cursor-pointer" />
          <SVGComponent name="InstagramIcon" class="w-6 cursor-pointer" />
          <SVGComponent name="TwitterIcon" class="w-6 cursor-pointer" />
        </div>
      </SplideSlide>
    </Splide>
  </section>
</template>

<script lang="ts">
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import SVGComponent from "@/components/SVGComponent.vue";

export default {
  components: { SVGComponent, Splide, SplideSlide },
  data() {
    return {
      profiles: [
        {
          name: "Julian Jameson",
          description: "Profession",
          image: "/src/assets/user-cover-1.png",
        },
        {
          name: "Julian Jameson",
          description: "Profession",
          image: "/src/assets/user-cover-2.png",
        },
        {
          name: "Julian Jameson",
          description: "Profession",
          image: "/src/assets/user-cover-3.png",
        },
        {
          name: "Julian Jameson",
          description: "Profession",
          image: "/src/assets/user-cover-4.png",
        },
        {
          name: "Julian Jameson",
          description: "Profession",
          image: "/src/assets/user-cover-1.png",
        },
        {
          name: "Julian Jameson",
          description: "Profession",
          image: "/src/assets/user-cover-2.png",
        },
        {
          name: "Julian Jameson",
          description: "Profession",
          image: "/src/assets/user-cover-3.png",
        },
        {
          name: "Julian Jameson",
          description: "Profession",
          image: "/src/assets/user-cover-4.png",
        },
      ],
    };
  },
  setup() {
    const options = {
      rewind: true,
      perMove: 1,
      perPage: 4,
      pagination: false,
      autoplay: true,
      height: "25rem",
      gap: "1rem",
      breakpoints: {
        1100: {
          perPage: 3,
          height: "30rem",
        },
        800: {
          perPage: 2,
        },
        500: {
          perPage: 1,
          height: "35rem",
        },
        400: {
          height: "30rem",
        },
      },
    };

    return {
      options,
    };
  },
};
</script>
