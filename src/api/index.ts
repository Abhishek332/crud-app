import axios from "axios";

const userInfo = localStorage.getItem("userInfo") || null;

type Headers = {
  "Content-Type": string;
  Authorization: string;
};

let headers = {
  "Content-Type": "application/json",
} as Headers;

if (userInfo) {
  headers = {
    ...headers,
    Authorization: `Bearer ${JSON.parse(userInfo).authorization}`,
  };
}

export const API = axios.create({ headers });
