const moviesReducerDefaultState = [];

export default (state = moviesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
            return [
                ...state,
                action.movie
            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id)
        case 'EDIT_MOVIE':
            return state.map((movie)=> {
                if (movie.id === action.id) {
                    return {
                        ...movie,
                        ...action.updates
                    }
                } else {
                    return movie;
                }
            })
        case 'SET_MOVIES':
            return action.movies;
        default:
            return state;
    };
};