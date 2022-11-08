<template>
  <div class="h-screen w-screen flex justify-center">
    <div class="bg-[url('~/assets/img/error.jpg')] bg-cover bg-[position:75%] lg:bg-center w-screen h-screen">
      <div class="ml-4 lg:ml-16 absolute bottom-96 lg:bottom-1/3">
        <h1 class="text-6xl lg:text-9xl font-bold text-white italic">{{ error.statusCode }}</h1>
        <h2 class="text-4xl lg:text-7xl font-bold text-white">Join in if you'd like.</h2>
        <h3 class="text-xl lg:text-4xl text-white mt-4 lg:mt-6 mb-6 lg:mb-6">But there's nothing else to see here.</h3>
        <NuxtLink to="/" class="text-white text-center bg-red-600 transition-colors hover:bg-red-500 focus:ring-4 focus:ring-red-300 w-28 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">Back to alexriley.me</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'basic',
  props: {'error': {
    type: Object,
    required: true,
    default() {
      return {}
    }
  }}
}
</script>