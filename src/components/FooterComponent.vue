<template>
  <footer class="container">
    <div class="flex w-full justify-between mb-16 flex-wrap gap-8 lg:gap-4">
      <div v-for="(section, index) in footerSections" :key="index">
        <h4 class="font-bold text-lg text-blue-black">{{ section.title }}</h4>
        <ul class="mt-4 space-y-2 text-gray font-medium">
          <li
            class="flex items-center"
            v-for="(link, linkIndex) in section.links"
            :key="linkIndex"
          >
            <SVGComponent
              :name="link.img"
              v-if="link.img"
              class="w-8 h-8 mr-4"
            />
            <a class="max-w-[300px]" :href="link.url">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="text-gray font-semibold flex flex-col-reverse md:flex-row justify-between"
    >
      <p>
        &copy; Made With Love By Figmaland. All rights reserved.
        {{ currentYear }}
      </p>
      <div class="flex space-x-6 mb-4 md:mb-0">
        <SVGComponent name="FacebookIcon" class="w-6 cursor-pointer" />
        <SVGComponent name="InstagramIcon" class="w-6 cursor-pointer" />
        <SVGComponent name="TwitterIcon" class="w-6 cursor-pointer" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import SVGComponent from "@/components/SVGComponent.vue";
import type { Section } from "@/types/footer.ts";

export default {
  components: { SVGComponent },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerSections: [
        {
          title: "Company Info",
          links: [
            { text: "About Us", url: "#" },
            { text: "Carrier", url: "#" },
            { text: "We are hiring", url: "#" },
            { text: "Blog", url: "#" },
          ],
        },
        {
          title: "Legal",
          links: [
            { text: "About Us", url: "#" },
            { text: "Carrier", url: "#" },
            { text: "We are hiring", url: "#" },
            { text: "Blog", url: "#" },
          ],
        },
        {
          title: "Features",
          links: [
            { text: "Business Marketing", url: "#" },
            { text: "User Analytic", url: "#" },
            { text: "Live Chat", url: "#" },
            { text: "Unlimited Support", url: "#" },
          ],
        },
        {
          title: "Resources",
          links: [
            { text: "IOS & Android", url: "#" },
            { text: "Watch a Demo", url: "#" },
            { text: "Customers", url: "#" },
            { text: "API", url: "#" },
          ],
        },
        {
          title: "Get in Touch",
          links: [
            {
              text: "(480) 555-0103",
              url: "tel:(480) 555-0103",
              img: "ContactIcon",
            },
            {
              text: "4517 Washington Ave. Manchester, Kentucky 39495",
              url: "geo:37.786971,-122.399677;u=35",
              img: "LocationIcon",
            },
            {
              text: "debra.holt@example.com",
              url: "mailto:debra.holt@example.com",
              img: "EmailIcon",
            },
          ],
        },
      ] as Section[],
    };
  },
};
</script>
