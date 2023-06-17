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

    <div class="card">
        <img :src="getImgSrc" alt="Project IMG">
        <div class="main-content">
            <div class="header">
                <span class="title">{{project.title}}</span>
                <h5 class="type">Type: <span class="text-decoration-underline">{{project.type ? project.type.name : 'none'}}</span></h5>
            </div>

            <h5 class="type mt-4">Description: <span class="heading">{{project.description}}</span></h5>

            <div class="categories mt-4">
                <h5>Technologies: <span v-for="technology in project.technologies" class="badge rounded-pill mx-1 my-1" :style="{backgroundColor: technology.color}">{{technology.name}}</span></h5>
            </div>
        </div>
        <div class="footer">
            <router-link class="project-show" :to="{name: 'singleProject', params: {slug: project.slug}}">View Project</router-link>
            <a class="project-show" :href="project.repo">GitHub</a>
        </div>
    </div>

</template>


<style lang="scss" scoped>

.card {
    width: 520px;
    height: 550px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transform-origin: right bottom;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);

    h5 {
        color: #7196ff;
    }
}

.card .main-content {
  flex: 1;
  padding: 20px;
}

.card .header span:first-child {
  font-weight: 700;
  color: #40c9ff;
  margin-right: 4px;
}

.card .header .title {
    font-size: 22px;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card .heading {
  font-size: 16px;
  margin: 24px 0 16px;
  font-weight: 600;
  color: #40c9ff;
}

.card .categories {
  display: flex;
  gap: 8px;
}

.card .categories span {
  background-color: #e81cff;
  padding: 4px 8px;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 50em;
}

.card .footer {
  font-weight: 600;
  color: #717171;
  margin-right: 4px;
  padding: 20px;
  display: flex;
  gap: 10px;
}

.card:hover {
  rotate: 8deg;
}

</style>