const API_KEY = "f7a78a42da1220e778079ece954d5f72";
const BASE_PATH = "https://api.themoviedb.org/3";
export const LIST_TYPE = [
  "nowPlaying",
  "upcomingMovies",
  "popularMovies",
  "latest",
  "tvShow",
];

interface IMovie {
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  id: number;
}

export interface IGetMoviesResult {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  release_date: string;
  vote_average: number;
}
export interface IGetMoviesLatest {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  release_date: string;
  vote_average: number;
}
export interface IGetMoviesTopRated {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  release_date: string;
  vote_average: number;
}
export interface IGetMoviesUpComming {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  release_date: string;
  vote_average: number;
}

export interface IGetTvResult {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
  release_date: string;
  vote_average: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getMoviesLatest() {
  return fetch(`${BASE_PATH}/movie/latest?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getMoviesTop() {
  return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getMoviesUpComing() {
  return fetch(`${BASE_PATH}/movie/upcoming?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getTvshows() {
  return fetch(`${BASE_PATH}/tv/latest?api_key=${API_KEY}`).then((response) =>
    response.json()
  );
}
