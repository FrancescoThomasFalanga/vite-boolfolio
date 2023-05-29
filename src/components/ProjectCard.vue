<script>

export default {
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000/",
        }
    },

    props: {
        project: Object,
    },

    methods: {

    },

    computed: {

        getImgSrc() {
            return this.baseUrl + "storage/" + this.projects.url_img;
        }

    }
}

</script>


<template>



</template>


<style lang="scss" scoped>
    
</style>