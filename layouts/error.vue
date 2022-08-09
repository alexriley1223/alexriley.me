<template>
  <div class="h-screen w-screen flex justify-center">
    <div>
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
        <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'basic'
}
</script>