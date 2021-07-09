import { put , takeLatest, all } from 'redux-saga/effects';


const API_KEY = "ca4f5c4eb86bd911df493a6cffee314a";
const baseURL = "https://api.themoviedb.org/3";

const request = {
  fetchTrending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `${baseURL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `${baseURL}/movie/popular?api_key=${API_KEY}&language=en-US`
}


// worker sagas
function* getTrendingMovies(){
    const records = yield fetch(request.fetchTrending)
    .then(response => response.json());
    yield put({type:"TRENDING_MOVIES_RECEIVED", movies : records})
}

function* getTopRatedMovies(){
    const records = yield fetch(request.fetchTopRated)
    .then(response => response.json());
    yield put({type:"TOP_RATED_MOVIES_RECEIVED", movies : records})
}


function* getPopular(){
    const records = yield fetch(request.fetchPopular)
    .then(response => response.json());
    yield put({type:"POPULAR_MOVIES_RECEIVED", movies : records})
}



// watcher saga
function* actionWatcher(){
    yield takeLatest('GET_TRENDING_MOVIES', getTrendingMovies)
    yield takeLatest('GET_TOP_RATED_MOVIES', getTopRatedMovies)
    yield takeLatest('GET_POPULAR_MOVIES', getPopular)
}

// root saga
export default function* rootSaga(){
    yield all([actionWatcher()])
}

