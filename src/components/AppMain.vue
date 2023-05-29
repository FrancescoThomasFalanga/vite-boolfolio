<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";

export default {
    data() {
        return {
            projects: [],

            currentPage: 1,
            lastPage: 0,
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
            axios.get("http://127.0.0.1:8000/api/projects?page=" + this.currentPage ).then((res) => {

                console.log(res.data.results);
                this.projects = res.data.results.data;
                this.lastPage = res.data.results.last_page;

            });
        },

        nextPage() {

            if(this.lastPage != this.currentPage) {

                this.currentPage++;

                this.getProjects();

            }

        },

        prevPage() {

            if(this.currentPage != 1) {

                this.currentPage--;

                this.getProjects();

            }

        },
    },
}

</script>


<template>

<main>

    <section>

        <ProjectCard v-for="project in projects" :project="project"></ProjectCard>


        <div class="d-flex gap-5">

            <button @click="prevPage" class="btn-custom">Previous Page <span></span></button>
            <button @click="nextPage" class="btn-custom">Next Page <span></span></button>

        </div>

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

    .btn-custom {
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #ffffff;
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        overflow: hidden;
        transition: .5s;
        letter-spacing: 4px;
        border: none;
        background-color: #050810;

        &:hover {

            background: #03f40f;
            color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 5px #03f40f,
                        0 0 25px #03f40f,
                        0 0 50px #03f40f,
                        0 0 100px #03f40f;

        }

        span {

            position: absolute;
            display: block;

            &:nth-child(1) {

                bottom: 2px;
                left: -100%;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, transparent, #03f40f);
                animation: btn-anim1 2s linear infinite;

            }
        }

    }

    @keyframes btn-anim1 {
        0% {
        left: -100%;
        }
    
        50%,100% {
        left: 100%;
        }
    }

</style>