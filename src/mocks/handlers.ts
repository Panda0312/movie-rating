import { http, HttpResponse } from "msw";

import movies from "./data/movies.json";

const MOCK_SERVER = process.env.MOCK_SERVER;

export const handlers = [
  http.get(`${MOCK_SERVER}/movies`, () => {
    return HttpResponse.json(movies);
  }),
];
