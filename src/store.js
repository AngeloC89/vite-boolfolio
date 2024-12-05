import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiBaseUrl: "https://web-production-158d5.up.railway.app/api",
  //apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBaseUrl: "https://portfolio-angelo.s3.eu-west-3.amazonaws.com/",
  projects: [],
  
  technologies: [],
  loader: false,
  params: {},// parametri di ricerca... va inizializzata come oggetto!
  techno: "",

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
