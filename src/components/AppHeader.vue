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

        }
    },

    methods: {

        hamburgerMenu() {

            const hamburger = document.querySelector(".hamburger");
            const navMenu = document.querySelector(".nav-menu");

            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

        },

    }
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

                    <li v-for="link in links">
                        <a  href="#">
                            <router-link :to="{ name: link.urlPage }">
                                {{ link.name }}
                            </router-link>
                        </a>
                    </li>

                </ul>

            </div>

            <!-- navbar section -->
            <div class="responsive">

                <!-- HAMBURGER MENU SECTION -->
                <div class="hamburger-menu" @click="hamburgerMenu()">

                    <!-- menu & menu items -->
                    <ul class="nav-menu">
                        <li v-for="link in links" class="nav-item">
                            <a class="nav-link"  href="#">
                                <router-link :to="{ name: link.urlPage }">
                                    {{ link.name }}
                                </router-link>
                            </a>
                        </li>
                    </ul>
                    <!-- /menu & menu items -->
                    

                    <!-- menu bars -->
                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <!-- /menu bars -->

                </div>
                <!-- HAMBURGER MENU SECTION -->

            </div>
            <!-- /navbar section -->

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

.router-link-active {
    border-bottom: 3px solid rgb(29, 29, 29);
}

.responsive {
    display: none;
}



@media only screen and (max-width: 768px) {

    nav#nav-custom {
        padding: 0 20px;
    }

    .links {
        display: none;
    }

    .responsive {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
    
        .hamburger-menu {
    
            li {
                list-style-type: none;
            }
    
            a {
                text-decoration: none;
                color: #0fe855;
            }
    
            .hamburger {
                display: none;
    
                .bar {
                    display: block;
                    width: 25px;
                    height: 3px;
                    margin: 5px auto;
                    -webkit-transition: all 0.3s ease-in-out;
                    transition: all 0.3s ease-in-out;
                    background-color: #fff;
                }
            }
    
            .nav-menu {
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                z-index: 2;
                left: -100%;
                top: 0;
                flex-direction: column;
                background-color: #020202bd;
                width: 100%;
                height: 100%;
                border-radius: 10px;
                text-align: center;
                transition: 0.3s;
                box-shadow:
                    0 10px 27px rgba(0, 0, 0, 0.05);
        
                .nav-link{
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #fff;
                }
        
                .nav-link:hover{
                    transition: 500ms linear all;
                    color: #0fe855;
                }
        
                .home {
                    color: #0fe855;
                }
            }
    
    
            .nav-menu.active {
                    left: 0;
            }
    
            .nav-item {
                margin: 1.1rem 0;
            }
    
            .hamburger {
                display: block;
                cursor: pointer;
            }
    
            .hamburger.active .bar:nth-child(2) {
                opacity: 0;
            }
    
            .hamburger.active .bar:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }
    
            .hamburger.active .bar:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
    
    
        }
    
    }
    
}




</style>