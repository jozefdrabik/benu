<script setup lang="ts">
import CarouselComponent from "@/components/CarouselComponent.vue";
import SubscriptionForm from "@/components/SubscriptionForm.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import PackagesComponent from "@/components/PackagesComponent.vue";
</script>

<template>
  <main>
    <HeaderComponent />
    <PackagesComponent class="my-20 md:my-40" />
    <CarouselComponent class="py-10 md:py-20" />
    <SubscriptionForm />
    <FooterComponent class="mt-16 mb-10" />
  </main>
</template>
