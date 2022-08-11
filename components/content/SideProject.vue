<template>
    <div>
        <p>{{ title }}</p>
    </div>
</template>

<script>

export default {
  name: 'SideProject',
  props: {
    title: {
        type: String,
        required: true,
        default: 'Project Title'
    },
    description: {
        type: String,
        required: true,
        default: 'Project Description'
    },
    imageUrl: {
        type: String,
        required: true,
        default: 'placeholder image'
    },
    techStack: {
        type: Array,
        required: true,
        default(rawProps) {
            return rawProps;
        }
    },
    url: {
        type: String,
        required: false,
        default: 'https://alexriley.me/'
    },
  }
}
</script>
