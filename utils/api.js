const BASE_API = 'https://yts.lt/api/v2/';

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}list_movies.json?movie_id=${id}`);
    const {data} = await query.json();
    return data.movies;
  }
  async getMovies() {
    const query = await fetch(`${BASE_API}list_movies.json`);
    const {data} = await query.json();
    return data.movies;
  }
  async searchMovie(title) {
    const query = await fetch(
      `${BASE_API}list_movies.json?query_term=${title}&limit=1&sort_by=rating`,
    );
    const {data} = await query.json();
    return data.movies;
  }
}
export default new Api();
