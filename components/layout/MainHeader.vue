<template>
    <header class="fixed w-full h-fit z-50 bg-white">
      <nav class="top-0 container mx-auto px-4 py-6">
        
        <!-- Nav Flex Row -->
        <div class="flex justify-between items-center">
          <!-- Alex Riley Home -->
          <a class="font-bold link-underline" href="/">alexriley.me</a>

          <!-- Nav Items -->
          <ul class="flex flex-row space-x-8">
            <!-- <NuxtLink to="/page">Page</NuxtLink> -->
            <li><a class="link link-underline" href="#hero">Home</a></li>
            <li><a class="link link-underline" href="#projects">Projects</a></li>
            <li><a class="link link-underline" href="#tech">Tech</a></li>
            <li><a class="link link-underline" href="#">About</a></li>
            <li><PrimaryButton href="mailto:alexriley1223@gmail.com" text="Let's Chat" /></li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
import PrimaryButton from '../elements/PrimaryButton.vue';
export default {
    name: "MainHeader",
    components: { PrimaryButton }
}
</script>
