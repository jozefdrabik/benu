<template>
  <button
    :type="buttonType"
    class="flex items-center h-[52px] px-6 rounded-lg font-bold text-sm"
    :class="{
      'hover:bg-white text-green bg-transparent border-green': whiteVariant,
      'hover:bg-green-800 bg-green text-white': !whiteVariant,
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonType = "button" | "submit" | "reset";

const props = defineProps<{
  whiteVariant?: boolean;
  type?: ButtonType;
}>();

const buttonType = props.type || "button";
const whiteVariant = props.whiteVariant || false;
</script>
