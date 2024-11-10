import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: "https://web-production-158d5.up.railway.app/api",
  imgBaseUrl: "https://web-production-158d5.up.railway.app//storage/",
  projects: [],
  technologies: [],
  loader: false,

});
