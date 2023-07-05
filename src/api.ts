const API_KEY = "f7a78a42da1220e778079ece954d5f72";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IResults {
  release_date: string;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  id: number;
  name: string;
}

export interface IGetResult {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IResults[];
  total_pages: number;
  total_results: number;
  release_date: string;
  vote_average: number;
}

export interface IGetDetails {
  id: number;
  backdrop_path: string;
  poster_path: string;

  overview: string;
  vote_average: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  // ------ 영화 정보
  title: string;
  original_title?: string;
  // ------ TV 정보
  name: string;
  original_name?: string;
  first_air_date: string;
  release_date: string;
}

export interface IGetCredits {
  id: number;
  cast: [
    {
      id: number;
      name: string;
      original_name: string;
      character: string;
    }
  ];
  crew: [
    {
      id: number;
      known_for_department: string;
      name: string;
    }
  ];
}
//영화 api 내보내기
export function getMovies(category: string) {
  return fetch(
    `${BASE_PATH}/movie/${category}?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => response.json());
}
export function getMovieDetail(id: string) {
  return fetch(
    `${BASE_PATH}/movie/${id}?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => {
    return response.json();
  });
}
export function getMovieCredit(id: string) {
  return fetch(
    `${BASE_PATH}/movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => {
    return response.json();
  });
}

//TV api 내보내기
export function getSeries(tvCategory: string) {
  return fetch(
    `${BASE_PATH}/tv/${tvCategory}?api_key=${API_KEY}&language=ko-KR&page=1`
  ).then((response) => {
    return response.json();
  });
}

export function getSeriesDetail(tv_id: string) {
  return fetch(
    `${BASE_PATH}/tv/${tv_id}?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => {
    return response.json();
  });
}

export function getSeriesCredit(tv_id: string) {
  return fetch(
    `${BASE_PATH}/tv/${tv_id}/credits?api_key=${API_KEY}&language=ko-KR`
  ).then((response) => {
    return response.json();
  });
}
