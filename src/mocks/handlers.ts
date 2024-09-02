import { http, HttpResponse } from "msw";

import movies from "./data/movies.json";
import { API_SERVER } from "@/configs";

export const handlers = [
  http.get(`${API_SERVER}/movies.json`, () => {
    return HttpResponse.json(movies);
  }),
];
