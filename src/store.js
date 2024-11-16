import { reactive } from "vue";

export const store = reactive({
  apiBaseUrl: "https://web-production-158d5.up.railway.app/api",
  imgBaseUrl: "https://portfolio-angelo.s3.eu-west-3.amazonaws.com/",
  projects: [],
  technologies: [],
  loader: false,

});
