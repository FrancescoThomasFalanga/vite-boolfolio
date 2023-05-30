<script>

export default {
    data() {

        return {



        }

    },
}

</script>



<template>

<main>

    <div class="container">
    
        <h1 class="text-shadow">
            Hey, I'm Francesco
        </h1>
    
        <p>A Full Stack Web Developer</p>
    
        <button class="btn-custom">

            <router-link :to="{name: 'projects'}">My Projects<span></span></router-link>
            
        </button>
    
    </div>

</main>

    
</template>



<style lang="scss" scoped>
    
main {
    
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: rgb(173, 173, 173);
        height: calc(100vh - 63px - 80px);


        .text-shadow {

            font-size: 50px;
            margin: 0;
            font-style: italic;
            text-transform: uppercase;
            color: transparent;
            -webkit-text-stroke: #0fe855;
            -webkit-text-stroke-width: 1px;
            text-shadow: 2px 2px 10px white;
            transition: all 0.5s ease-in-out;
            text-align: center;
            letter-spacing: 0.2em;
            animation: flicker 1.0s ease-in-out infinite alternate;

            &:hover {
                color: #fff;
            }

        }

        p {

            margin: 22px 0;

        }

        button {

            a {

                font-weight: bold;
                color: rgb(173, 173, 173);
                text-decoration: none;
                padding: 10px 20px;

            }
        }

    }

}

@keyframes flicker {
    0% {
        opacity: 0.4;
        text-shadow: 2px 2px 10px white;
    }
    100% {
        opacity: 1;
        text-shadow: 2px 2px 20px white;
    }
}




@media only screen and (max-width: 768px) {

    main {

        .container {

            .text-shadow {

                font-size: 25px;

            }

            p {

                font-size: 13px;
                
            }

            button {

                padding: 6px 14px;

            }

        }

    }

}

</style>