<script>

export default {
    data() {
        return {

            links: ["Home", "About", "Projects", "Contact"],

            links: [
                {
                    name: "Home",
                    urlPage: "home",
                },
                {
                    name: "About",
                    urlPage: "about",
                },
                {
                    name: "Projects",
                    urlPage: "projects",
                },
                {
                    name: "Contact",
                    urlPage: "contact",
                },
            ],

            isHome: 0,

        }
    },
}

</script>


<template>
    <nav id="nav-custom" class="fixed-top mb-5">

            <div class="logo">

                <a href="">
                    <img src="/img/ciccio.gif" alt="LOGO">
                </a>

            </div>


            <div class="links">

                <ul>

                    <li v-for="(link, index) in links">
                        <a @click="this.isHome = index" :class="index == this.isHome ? 'active' : '' " href="#">
                            <router-link :to="{ name: link.urlPage }">
                                {{ link.name }}
                            </router-link>
                        </a>
                    </li>

                </ul>

            </div>

    </nav>
</template>


<style lang="scss" scoped>
    
    nav#nav-custom {

    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 10px;

    background-color: #0fe855;

    .logo {

        a {

            img {

                width: 80px;
                object-fit: cover;
                padding: 10px;

            }

        }

    }



    .links {

        ul {

            list-style: none;
            display: flex;
            align-items: center;
            gap: 20px;
            margin: 0;
            padding: 0;

            li {

                a {
                    text-decoration: none;
                    color: #1d2027;
                    font-weight: bold;
                    font-size: 18px;

                    padding: 18px;

                    &:hover {
                        border-bottom: 3px solid rgb(29, 29, 29);
                    }

                }

            }

        }

    }

}

.active {
    border-bottom: 3px solid rgb(29, 29, 29);
}

</style>