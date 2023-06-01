<script>
import axios from "axios";
import ProjectCard from "../components/ProjectCard.vue";

export default {
    data() {
        return {
            projects: [],

            pagination: [],

            apiURL: "http://127.0.0.1:8000/api/projects?page=1",
            
            pageNumber: 0,

            types: [],

            selectedTypeId: '',

            projectFound: false,

        }
    },

    components: {
        ProjectCard,
    },

    created() {
        this.getProjects(this.apiURL);
    },

    methods: {
        getProjects(url) {
            
            axios.get(url + "&type_id=" + this.selectedTypeId).then((res) => {

                console.log(res.data.results);

                if(res.data.success) {

                    this.projects = res.data.results.data;

                    this.types = res.data.allTypes;

                    this.pagination = res.data.results;

                    this.projectFound = true;

                } else {

                    this.projectFound = false;

                }
                
                // console.log(res.data);

            });
        },
    },
}

</script>



<template>

<main>

<section>

    <form action="">
        <select name="type_id" id="type_id" class="form-select" v-model="selectedTypeId" @change="getProjects(this.apiURL)">
            <option value="">Tutte</option>
            <option v-for="type in types" :value="type.id">{{ type.name }}</option>
        </select>
    </form>


    <div v-if="projectFound">
        <ProjectCard v-for="project in projects" :project="project" class="my-5"></ProjectCard>
    </div>
    <div v-else class="alert alert-warning" role="alert">
        No Project Found with this Type
    </div>



    <div class="d-flex">

        <button @click="getProjects(link.url)" :class="link.active ? 'active' : '' "  v-for="link in pagination.links" class="btn-custom" v-html="link.label"></button>

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


    .active {
        background-color: #03f40f;
        border-radius: 5px;
    }

</style>