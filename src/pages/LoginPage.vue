<template>
    <main class="custom-main login__main">
        <section class="animate__animated animate__slideInUp">
            <FormComponent :data="formData"/>
            <small class="login-choice">Pas encore incrit(e) ? <a @click="shiftFormHandler">Inscrivez-vous</a></small>
        </section>
    </main>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue"
import FormComponent from
 "../components/FormComponent.vue"
import type FormInterface from "../interfaces/FormInterface";
import { useAuthStore } from "../stores/auth-store"
import { storeToRefs } from "pinia";

const authStore  = useAuthStore()
const { getToken } = storeToRefs(authStore)


// reactives/ ref

const shiftForm = ref(false)

const formData = reactive<FormInterface>({
    fields: [
        {
            id: "email",
            type: "email",
            placeholder: "Entrer votre email"
        },
        {
            id: "password",
            type: "password",
            placeholder: "Entrer votre mot de passe"
        }
    ],
    buttons: [
        {
            id: "submit-button",
            type: "submit",
            textContent: "Valider",
            class: "is-primary"
        },
        {
            id: "reset-button",
            type: "reset",
            textContent: "Réinitialiser",
            class: "is-danger"
        }
    ]
})

const shiftFormHandler = () => {

    if(shiftForm.value == false) {
        
        formData.fields.unshift(
            {
                id: "firstName",
                type: "text",
                placeholder: "Entrer votre prénom"
            },
            {
                id: "lastName",
                type: "text",
                placeholder: "Entrer votre nom"
            }
        ) 
    } else {
        formData.fields.shift()
        formData.fields.shift() 
    }

    shiftForm.value = !shiftForm.value
}

const submitHandler = () => {
    
}

</script>
<style lang="scss">

.login__main {
    background-blend-mode: overlay;
    background-color: rgba($color: #000000, $alpha: 0.5);
    align-items: center;
    justify-content: center;
    & > section {
       width: 350px;
       display: flex;
       flex-direction: column;
       
       .login-choice {
            align-self: center;
            margin-block: 20px;
       }
    }
}

.custom-form {
    display: flex;
    flex-direction: column;
    &__fields-section, &__buttons-section {
        display: flex;
    }

    &__fields-section {
        flex-direction: column;

        article {
            margin-block: 20px;
        }
    }

    &__buttons-section {
        justify-content: space-between;
    }
}
</style>