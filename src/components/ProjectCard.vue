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
            if(this.project.url_img == null) {
                return "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
            } else {
                return this.baseUrl + "storage/" + this.project.url_img;
            }
        }

    }
}

</script>


<template>


    <div class="project">
            <div class="left">

                <a href="">
                    <img :src="getImgSrc" alt="Project IMG">
                </a>

            </div>

            <div class="right">

                <h2>{{project.title}}</h2> 

                
                <h5>Type: <span class="text-decoration-underline">{{project.type ? project.type.name : 'nessuna'}}</span></h5>
                
                <h6>Technologies: 
                    
                    <span v-for="technology in project.technologies" class="badge rounded-pill mx-1 my-1" :style="{backgroundColor: technology.color}">{{technology.name}}</span>
                    
                </h6>
                
                <strong>GitHub Link: </strong><a href="">{{project.repo}}</a>
                
                <p>{{project.description}}</p>
                
                <button class="button">
                    <a href="">View Project</a>
                </button>

            </div>
    </div>

</template>


<style lang="scss" scoped>
    
    .project {
        display: flex;
        justify-content: center;
        gap: 40px;
        color: #0fe855;
        background-color: #000e06;
        box-shadow: 0px 3px 5px #0fe855;

        .left {

            width: 40%;
            
            a {

                img {

                    width: 100%;
                    max-width: 400px;
                    height: 100%;
                    object-fit: cover;

                }

            }

        }

        .right {

            width: 60%;

            h2 {
                
                padding-top: 20px;
                text-transform: uppercase;

            }

            p {

                line-height: 30px;

            }

        }
    }

</style>