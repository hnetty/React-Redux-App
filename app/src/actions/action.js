import axios from "axios";

export const FETCH_CHARACTERS_START = 'FETCH_CHARACTERS_START';
export const FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS';


export const fetchCharacters = () => {

    return dispatch => {
        
        dispatch({type: FETCH_CHARACTERS_START});

        axios
            .get("https://anapioficeandfire.com/api/characters")
            .then(res => {
                console.log(res.data)
                dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data})
            })

    }
}