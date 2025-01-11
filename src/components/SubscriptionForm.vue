<template>
  <section
    class="bg-pink h-[500px] md:h-[600px] flex flex-col justify-center text-center px-6 md:px-0"
  >
    <h4 class="title-green mb-4">Newsletter</h4>
    <h2 class="title-blue mb-2">Watch our Course</h2>
    <p class="text-gray max-w-[470px] mx-auto mb-20">
      Problems trying to resolve the conflict between the two major realms of
      Classical physics: Newtonian mechanics
    </p>
    <form
      class="flex justify-center items-center"
      @submit.prevent="handleSubmit"
    >
      <input
        type="email"
        v-model="email"
        placeholder="Your Email"
        class="h-[52px] max-w-[700px] w-full px-5 focus-visible:outline-0"
      />
      <ButtonComponent class="rounded-l-none" type="submit"
        >Subscribe</ButtonComponent
      >
    </form>
    <p v-if="error" class="text-red-500">{{ errorMessage }}</p>
    <p v-if="success" class="text-green-500 mt-4">{{ successMessage }}</p>
  </section>
</template>

<script lang="ts">
import ButtonComponent from "@/components/ButtonComponent.vue";

export default {
  components: { ButtonComponent },
  data() {
    return {
      email: "",
      error: false,
      success: false,
      errorMessage: "",
      successMessage:
        "Thank you for subscribing! Your email has been successfully sent.",
    };
  },
  methods: {
    validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    handleSubmit() {
      if (this.validateEmail(this.email)) {
        this.success = true;
        this.error = false;
        this.errorMessage = "";
        this.email = "";
      } else {
        this.success = false;
        this.error = true;
        this.errorMessage = "Please enter a valid email address";
      }
    },
  },
};
</script>
