<script setup>
import { defineProps } from 'vue';
// Props to make the component reusable
defineProps({
  cardWidth: {
    type: String,
    default: '25rem',
  },
  cardHeight: {
    type: String,
    default: 'auto',
  },
  bg: {
    type: String,
    default: 'white',
  },
  defaultHeaderImage: {
    type: String,
    default: 'https://primefaces.org/cdn/primevue/images/usercard.png',
  },
  defaultTitle: {
    type: String,
    default: 'Default Title',
  },
  defaultSubtitle: {
    type: String,
    default: 'Default Subtitle',
  },
  defaultContent: {
    type: String,
    default: 'This is default card content. Replace it by using the content slot.',
  },
  borderRadius: {
    type: String,
    default: '0.5rem',
  },
});
</script>

<template>
    <Card :style="{ width: cardWidth, overflow: 'hidden', height: cardHeight, backgroundColor: bg, borderRadius: borderRadius }" >
      <!-- Header Slot -->
      <template #header>
        <slot name="header">
          <img alt="card header" :src="defaultHeaderImage" />
        </slot>
      </template>
  
      <!-- Title Slot -->
      <template #title>
        <slot name="title">{{ defaultTitle }}</slot>
      </template>
  
      <!-- Subtitle Slot -->
      <template #subtitle>
        <slot name="subtitle">{{ defaultSubtitle }}</slot>
      </template>
  
      <!-- Content Slot -->
      <template #content>
        <slot name="content">
          <p class="m-0">{{ defaultContent }}</p>
        </slot>
      </template>
  
      <!-- Footer Slot -->
      <template #footer>
        <slot name="footer">
          <div class="flex gap-4 mt-1">
            <Button label="Cancel" severity="secondary" outlined class="w-full" />
            <Button label="Save" class="w-full" />
          </div>
        </slot>
      </template>
    </Card>
  </template>
  

  