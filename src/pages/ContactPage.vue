<template>
  <div class="container">
    <h1 class="text-center">Contact Me</h1>

    <div class="row d-flex justify-content-center">
      <form @submit.prevent="Sending()" class="w-50">
        <div class=" d-flex flex-column justify-content-center w-100">
          <label for="name">Inserisci il tuo nome</label>
          <input class=" mb-3" v-model="formData.name" type="text" name="name" id="name" placeholder="Name" required>
        </div>
        <div class=" d-flex flex-column justify-content-center">
          <label for="email">Inserisci la tua email</label>
          <input class="mb-3" v-model="formData.email" type="email" name="email" id="email"
            placeholder="example@domain.com" required>
        </div>
        <div class=" d-flex flex-column justify-content-center">
          <label for="message">Messaggio</label>
          <textarea class=" mb-3" v-model="formData.message" name="message" cols="30" rows="10" placeholder="Message"
            required></textarea>
        </div>
        <div class=" d-flex flex-column justify-content-center">
          <label for="file">Carica un'allegato</label>
          <input class="mb-3" type="file" name="file" id="file" accept=".jpg, .jpeg, .doc, .docx, .pdf," multiple
            @change="filesEvent()">
        </div>
        <div>
          <button type="submit" class="btn btn-secondary">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { store } from '../store.js';
  import axios from 'axios';

  export default {
    name: 'ContactComponent',
    data() {
      return {
        store,
        formData: {
          name: '',
          email: '',
          message: '',
          file: [],
        },
      }
    },
    methods: {
      filesEvent(e) {
        this.formData.file = e.target.files

      },
      Sending() {
        const formData = new FormData();
        formData.append('name', this.formData.name);
        formData.append('email', this.formData.email);
        formData.append('message', this.formData.message);
        formData.append('file', this.formData.file);

        console.log(formData);


        axios.post(`${this.store.apiBaseUrl}/contact`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Importante per gestire file upload
          }
        }).then((res) => {
          console.log(res.data);
          alert('Il tuo messaggio è stato inviato con successo!');
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
  .container {
    h1 {
      font-size: 6rem;
    }

    height: 100%;
    overflow-y: scroll;

    #file {
      background-color: white;
      border: 1px solid black;
    }
  }

  @media screen and (max-width: 768px) {

    h1 {
      font-size: 4rem;
    }

    form {
      width: 100% !important;

      button {
        width: 100% !important;
      }
    }

  }


</style>