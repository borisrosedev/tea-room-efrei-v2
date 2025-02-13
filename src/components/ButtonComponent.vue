<template>
    <button
        :id="data.id"
        :type="data.type ? data.type : 'button'" 
        :class="'button ' + (data.class ? data.class : '')"
    >{{ data.textContent  }}
    </button>
</template>
<script setup lang="ts">
import type ButtonInterface from '../interfaces/ButtonInterface';


interface ButtonComponentProperties {
    data: ButtonInterface
}

defineProps<ButtonComponentProperties>()

</script>