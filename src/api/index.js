import axios from "axios";
import { baseURL } from "./baseUrl";
const instance=axios.create({
    baseURL:baseURL,
    headers:{
        "X-Authorization":"pk_4408807793810c86b8ba5b1a62726a2be3f8b50d8cd69",
      }
})
export default instance;