import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-clone-c6527.cloudfunctions.net/api'

    //" https://clone-c6527.web.app",https://us-central1-clone-c6527.cloudfunctions.net/api
});

export default instance;