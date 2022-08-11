<template>
    <a :href="href" :target="target" class="text-white text-center bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 w-28 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none">{{ text }}</a>
</template>

<script>

export default {
  name: 'SideProject',
  props: {
    href: {
        type: String,
        required: true,
        default: '#'
    },
    text: {
        type: String,
        required: true,
        default: 'Button'
    },
    target: {
        type: String,
        required: false,
        default: '_self'
    }
  }
}
</script>
