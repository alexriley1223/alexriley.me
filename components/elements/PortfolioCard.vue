<template>
    <a class="group" :class="{ 'cursor-default': link.length == 0 }" :href="link" :target="target">
        <div class="flex flex-col transition shadow-md rounded-b-lg">
            <div class="w-full h-48 flex items-center overflow-hidden relative rounded-t-lg">
                <p v-if="link.length > 0" class="opacity-0 group-hover:opacity-100 transition absolute w-full h-full bg-opacity-50 bg-black flex items-center justify-center text-2xl font-bold uppercase text-white z-20 shadow-lg">{{ visit }}</p>
                <img class="rounded-t-md object-cover object-center grayscale-0 transition group-hover:grayscale h-48 w-full" :src="image" :alt="title">
            </div>
            <div class="bg-white rounded-b-lg p-4 h-[11.5rem] flex flex-col">
                <p class="font-semibold text-xl">{{ title }}</p>
                <p class="mb-4 mt-2 flex-grow">{{ description }}</p>

                <!-- Chips -->
                <div class="flex space-x-2">
                    <span v-for="(chip, index) in chips" :key="index" class="px-4 py-1.5 rounded-full text-white font-semibold text-xs pointer-events-none" :class="'bg-' + chip.toLowerCase()">{{ chip }}</span>
                </div>
            </div>
        </div>
    </a>
</template>

<script>

export default {
  name: 'PortfolioCard',
  props: {
    title: {
        type: String,
        required: true,
        default: ''
    },
    description: {
        type: String,
        required: true,
        default: ''
    },
    link: {
        type: String,
        required: false,
        default: ''
    },
    target: {
        type: String,
        required: false,
        default: '_blank'
    },
    image: {
        type: String,
        required: true,
        default: ''
    },
    visit: {
        type: String,
        required: false,
        default: 'VISIT LIVE'
    },
    chips: {
        type: Array,
        required: true,
        default() {
            return []
        }
    }
  }
}
</script>
