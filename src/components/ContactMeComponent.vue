<template>
  <div id="formContact" class="p-3">
    <h1 class="text-end">//Contact Me</h1>

    <div class="row d-flex justify-content-center">
      <form @submit.prevent="Sending()" class="w-50 ">
        <div class=" d-flex flex-column justify-content-center w-100">
          <label class="form-label" for="name">Inserisci il tuo nome</label>
          <input class="form-control mb-3" v-model="formData.name" type="text" name="name" id="name" placeholder="Name"
            required>
        </div>
        <div class=" d-flex flex-column justify-content-center">
          <label class="form-label" for="email">Inserisci la tua email</label>
          <input class="form-control mb-3" v-model="formData.email" type="email" name="email" id="email"
            placeholder="example@domain.com" required>
        </div>
        <div class=" d-flex flex-column justify-content-center">
          <label class="form-label" for="message">Messaggio</label>
          <textarea class="form-control mb-3" v-model="formData.message" name="message" cols="30" rows="10"
            placeholder="Message" required></textarea>
        </div>

        <div>
          <button type="submit" class="btn btn-secondary">Send</button>
        </div>
      </form>
      <div class="d-flex justify-content-center h-25">
        <h2 class="text-center w-100 px-3">{{ send }}</h2>
      </div>
    </div>
  </div>


</template>

<script>
  import { store } from '../store.js';
  import axios from 'axios';

  export default {
    name: 'ContactMeComponent',
    data() {
      return {
        store,
        send: '',
        formData: {
          name: '',
          email: '',
          message: '',
        },
      }
    },
    methods: {
      Sending() {
        const formData = new FormData();
        formData.append('name', this.formData.name);
        formData.append('email', this.formData.email);
        formData.append('message', this.formData.message);

        axios.post(`${this.store.apiBaseUrl}/contact`, formData).then((res) => {
          console.log(res.data);
          this.send = ('Il tuo messaggio è stato inviato con successo!');
          this.resetForm(); // Resetta il form dopo l'invio
        }).catch((error) => {
          //console.log(error);
          //this.errors = error.response.data.errors;
          //console.log(this.errors);
        }).finally(() => {

        });


      },
    },
  }
</script>


<style lang="scss" scoped>

  #formContact {
    height: 100vh;

    h1 {
      font-size: 6rem;
    }

    button {
      background-color: rgba(230, 69, 0, 0.836);
    }

  }

  @media screen and (max-width: 768px) {
    #formContact {
      h1 {
        font-size: 3rem;
      }

      form {
        width: 100% !important;

        button {
          width: 100% !important;
        }
      }
    }



  }


</style>