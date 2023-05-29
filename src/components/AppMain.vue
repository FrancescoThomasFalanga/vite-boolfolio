<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
    data() {
        return {
            projects: [],
        }
    },

    components: {
        ProjectCard,
    },

    created() {
        this.getProjects();
    },

    methods: {
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects").then((res) => {

                console.log(res.data.results);
                this.projects = res.data.results;

            });
        }
    },
}

</script>


<template>



</template>


<style lang="scss" scoped>
    
</style>