<template>
    <button class="btn"> {{text}}</button>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        text: String
    },
    data() {
        return {}
    },
    methods: {
    }
}
</script>

<style scoped>
.btn {
  padding: 15px 32px;
  margin: 30px;
  text-align: center;
  font-size: 40px;
}

</style>