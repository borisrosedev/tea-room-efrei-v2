<template>

    <header class="custom-header">
        <a href="">
            <figure>
                <img src="/logo.webp" alt="Image du logo de TeaRoom" />
            </figure>
        </a>
        <nav>
            <RouterLink to="/login">Connexion</RouterLink>
        </nav>
    </header>

</template>
<script setup lang="ts">

</script>
<style lang="scss">
.custom-header {
    background-color: rgba($color: #161515, $alpha: 0.8);
    z-index: 20;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding-inline: 10px;
    height: 15vh;

    nav > a {
        color: #ffffff;
        position: relative;


        &::before {
            content: "";
            width: 0%;
            position: absolute;
            background-color: #fff;
            height: 2px;
            position: absolute;
            bottom: -10px;
            transition: all ease-in-out 300ms;
        }  
        &:hover {
            content: "";
            width: 100%;

            &::before {
                content: "";
                width: 100%;
            }  
            
        }
    }

    figure {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        overflow: hidden;

        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
