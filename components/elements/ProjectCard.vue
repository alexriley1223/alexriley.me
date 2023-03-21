<template>
    <div class="shadow-sm rounded-b-sm rounded-br-sm border border-[#f7f7f7]">

        <!-- Image Row -->
        <div class="w-full h-44" :style="{ 'background-color': backgroundHex }">
            <div class="w-7/12 h-full mx-auto pt-7">
                <img class="w-full h-full object-cover object-top rounded-t-md rounded-tr-md" :src="image" :alt="title + ' Web Screenshot'">
            </div>
        </div>

        <div class="h-96 border-t p-6 border-[#ddd] flex flex-col">
            <h3 class="text-center font-semibold mb-4 uppercase text-sm">{{ title }}</h3>
            <!-- Description -->
            
            <div class="flex-grow leading-7">
                <slot></slot>
            </div>

            <!-- Skills -->
            <p class="text-xs text-gray-400">Skills: {{ skills.join(', ') }}</p>
        </div>
        
    </div>
</template>

<script>

export default {
  name: 'ProjectCard',
  props: {
    backgroundHex: {
        type: String,
        required: true,
        default: '#ffffff'
    },
    title: {
        type: String,
        required: true,
        default: ''
    },
    image: {
        type: String,
        required: true,
        default: ''
    },
    skills: {
        type: Array,
        required: true,
        default() {
            return []
        }
    }
  }
}
</script>
