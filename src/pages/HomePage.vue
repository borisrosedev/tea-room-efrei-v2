<template>
    <main class="custom-main">
        <figure class="custom-main__logo-figure animate__animated animate__slideInUp">
            <img 
                src="/logo.webp" 
                alt="Image du logo de l'application" 
            />
        </figure>
    </main>
</template>
<script setup lang="ts">

</script>
<style lang="scss">
.custom-main {
    align-items: center;
    justify-content: center;
    background-blend-mode: overlay;
    background-color: rgba($color: #000000, $alpha: 0.5);
    &__logo-figure {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        overflow: hidden;

    }
}
</style>