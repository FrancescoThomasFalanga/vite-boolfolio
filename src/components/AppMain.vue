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

<main>

    <section>

        <ProjectCard v-for="project in projects" :project="project"></ProjectCard>

    </section>

</main>

</template>


<style lang="scss" scoped>
    
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 70px;
        margin: 100px auto;
        max-width: 1000px;
    }

</style>