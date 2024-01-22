const apikey: string = '7a9f421cb76fdaffa849068a5a1e5f01'
export const baseImage = (size: string, path: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}&language=vi-VN&page=1`
export const popularMovies: string = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=vi-VN&page=1`
export const upcomingMovies: string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=vi-VN&page=1`
export const searchMovies = (keyword: string) => {
    return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}&language=vi-VN&page=1`
};
export const movieDetails = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&language=vi-VN&page=1`
};
export const movieCredits = (id: number) => {
    return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=vi-VN&page=1`
}
