import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: "http://127.0.0.1:8000/api",
  imgBaseUrl: "http://127.0.0.1:8000/storage/",
  projects: [],
  technologies: [],
  loader: false,

});
