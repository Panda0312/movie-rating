import { http, HttpResponse } from "msw";

import movies from "./data/movies.json";

export const handlers = [
  http.get("http://localhost:3000/mocks/movies.json", (request) => {
    return HttpResponse.json(movies);
  }),
];
