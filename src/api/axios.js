import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "4ecb791e148cce187f7e42a21b2f4960",
    language: "ko-KR",
  },
});

export default instance;
