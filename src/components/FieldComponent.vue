<template>
   <article>
        <label v-bind:for="data.id"></label>
        <input 
            v-bind:type="data.type ? data.type : 'text'" 
            v-bind:placeholder="data.placeholder"
            v-bind:class="'input ' + (data.class ? data.class : '')"
        />
    </article>
</template>
<script setup lang="ts">
import type FieldInterface from '../interfaces/FieldInterface';


interface FieldComponentProperties {
    data: FieldInterface
}

defineProps<FieldComponentProperties>()

/* Créer un fichier qui représente 
un composant réutilisable : bouton 
aucune valeur codée en dur sauf ternaire
*/



</script>