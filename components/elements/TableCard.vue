<template>
    <div class="flex flex-col p-4 bg-white shadow-sm">
        <div class="mx-auto">
            <slot></slot>
        </div>

        <div class="text-center mt-4">
            <p class="uppercase font-semibold text-red-500 mb-2">{{ title }}</p>
            <p class="text-sm">{{ description }}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ProjectCard',
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
    }
  }
}
</script>
