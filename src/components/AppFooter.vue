<script>

export default {
    data() {
        return {

        }
    },
}

</script>


<template>

    <footer>

        <div class="copyright">

            <p>
                Built From Laravel With 
                <span>💚</span>    
                © Copyright 2023, CiccioDev. All Rights Reserved.
            </p>

        </div>

    </footer>

</template>


<style lang="scss" scoped>
    
footer {

    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    z-index: 10;
    background-color: #1f2128;

    .copyright {

        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        p {

            margin: 0;
            color: #0fe855;
            font-size: 18px;
            font-weight: bold;
            background: linear-gradient(90deg, #0fe855, #fff, #0fe855);
            letter-spacing: 5px;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            background-repeat: no-repeat;
            background-size: 80%;
            animation: shine 6s linear infinite;
            position: relative;

            span {

                animation: shine 2.5s infinite;
                display: inline-block;

            }

        }

    }

    }

    @keyframes shine {
    0% {
    background-position-x: -500%;
    }
    100% {
    background-position-x: 500%;
    }
}

</style>