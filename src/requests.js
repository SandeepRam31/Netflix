const API_KEY = "27de06a6cd4ffbb320d8997d6c363dcd" ;

const requests={
    fetchTrending:'/trending/all/week?api_key=${API_KEY}&language=en-US',
    fetchNetflix0riginals: '/discover/tv?api_key=$(API_KEY}&with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=${API_KEY}&language=en-US',
    fetchActionMovies:'/discover/movie?api_key=${API_KEY}&with_genres=28',
    fetchComedyMovies:'/discover/movie?api key=${API _KEY}&with_genres=35',
    fetchHorrorMovies:'/discover/movie?api_key=${API_KEY}&with_genres=27',
    fetchRomanceMovies:'/discover/movie?api_key=${API_KEY}&with_genres=10749',
    fetchDocumentaries:'/discover/movie?api_key=${API_KEY}&with_genres=99',
}

export default requests;