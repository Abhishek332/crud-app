import axios from "axios";

export const API = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});
