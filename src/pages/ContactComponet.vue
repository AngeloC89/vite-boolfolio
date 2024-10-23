<template>
    <div>
        <h1>Contact Me</h1>

        <div class="row">
            <form @submit.prevent="Sending()" class="text-start">
                <div class="w-100">
                    <input v-model="name" type="text" name="name" id="name" placeholder="Name">
                </div>
                <div>
                    <input v-model="email" type="email" name="email" id="email" placeholder="Email">
                </div>
                <div>
                    <textarea v-model="message" name="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-secondary">Send</button>
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
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    Sending() {
      const data = {
        name: this.name,
        address: this.email,
        message: this.message
      }
       axios.post(`${this.store.apiBaseUrl}/contacts`, data).then((res) => {
                console.log(res.data);
                
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


<style lang="scss" scoped></style>