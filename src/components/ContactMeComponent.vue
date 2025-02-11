<template>
  <div id="formContact" class="p-3 ">
    <h1 class="text-end">//Contact Me</h1>

    <div class="d-flex flex-column justify-content-center glass py-5">
      <form @submit.prevent="Sending()" class="w-50">
        <div class=" d-flex flex-column justify-content-center w-100">
          <label class="form-label" for="name">Enter your name</label>
          <input class="form-control mb-3" v-model="formData.name" type="text" name="name" id="name" placeholder="Name"
            required>
        </div>
        <div class=" d-flex flex-column justify-content-center">
          <label class="form-label" for="email">Enter your email</label>
          <input class="form-control mb-3" v-model="formData.email" type="email" name="email" id="email"
            placeholder="example@domain.com" required>
        </div>
        <div class=" d-flex flex-column justify-content-center">
          <label class="form-label" for="message">Messagge</label>
          <textarea class="form-control mb-3" v-model="formData.message" name="message" cols="30" rows="10"
            placeholder="Message" required></textarea>
        </div>

        <div>
          <button type="submit" class="btn btn-secondary">Send</button>
        </div>
      </form>
      <div class="d-flex justify-content-center mt-5">
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

        axios.post(`${this.store.apiBaseUrl}/send-email`, formData).then((res) => {
          //console.log(res.data);
          this.send = ('Your message has been sent successfully!');
          this.resetForm(); // Resetta il form dopo l'invio
        }).catch((error) => {
          //console.log(error);
          //this.errors = error.response.data.errors;
          //console.log(this.errors);
        }).finally(() => {
          this.formData = {
            name: '',
            email: '',
            message: '',
          };

        });
      
      
      },
    },
  }
</script>


<style lang="scss" scoped>

  #formContact {
    height: 100%;

    h1 {
      font-size: 6rem;
    }

    form {
      margin: auto;
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
        width: 90% !important;
        margin: auto;

        button {
          width: 100% !important;
        }
      }
    }



  }


</style>