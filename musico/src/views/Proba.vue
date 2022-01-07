<template>
    <div class="container">
        <h1>{{id}}</h1>
        <h2>{{name}}</h2>
        <h4>{{genre}}</h4>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        genre: {
            type: Array,
            required: true,
        }
    }
}
</script>