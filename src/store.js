import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiBaseUrl: "https://laravel-api-production-df5c.up.railway.app/api",
  //apiBaseUrl: "http://127.0.0.1:8000/api",
  //imgBaseUrl: "https://",
  projects: [],
  technologies: [],
  loader: false,
  params: {},// parametri di ricerca... va inizializzata come oggetto!
  techno: "",
  tecnoList: [
    "html.png",
    "css.webp",
    "javascript.webp",
    "php.webp",
    "vue.png",
    "laravel.webp",
  
  ],

  methods: {
    
    getAllProjects() {
      axios
        .get(store.apiBaseUrl + "/projects", { params: store.params })
        .then((res) => {
          store.projects = res.data.results;

          console.log(store.projects);
        })
        .catch((error) => {
          console.log("Error fetching projects", error);
        })
        .finally(() => {
          //loader
        });
    },

    getTechnologies() {
      axios.get(store.apiBaseUrl + "/technologies").then((res) => {
        store.technologies = res.data.results;
  
        console.log(res.data.results);
      });
    },


  },

  
});
