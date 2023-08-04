import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "66f4cb8d699240f6b16b4e196957a01b",
  },
});
