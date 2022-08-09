<template>
    <header>
      <nav class="container mx-auto px-4 py-6">
        
        <!-- Nav Flex Row -->
        <div class="flex justify-between items-center">
          <!-- Alex Riley Home -->
          <a class="flex flex-row items-center" href="/">
            <img class="rounded-full h-6 w-6 sm:w-9 sm:h-9 mr-3" src="~/assets/img/alexriley.jpg" alt="Alex Riley Portrait">
            <span class="font-bold">Alex Riley</span>
          </a>

          <!-- Nav Items -->
          <ul class="flex flex-row space-x-8">
            <!-- <NuxtLink to="/page">Page</NuxtLink> -->
            <li><a href="#">Home</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Tech</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#" class="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">Let's Chat</a></li>
          </ul>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>
