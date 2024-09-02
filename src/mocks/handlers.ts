import { http, HttpResponse } from "msw";

import movies from "./data/movies.json";

const API_SERVER = process.env.API_SERVER;

export const handlers = [
  http.get(`${API_SERVER}/movies.json`, () => {
    return HttpResponse.json(movies);
  }),
];
