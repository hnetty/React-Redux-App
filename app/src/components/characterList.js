import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCharacters } from "../actions/action"

const CharacterList = props => {

    useEffect(() => {
        props.fetchCharacters();
    }, []);


    return(
        <div>
            {props.characters.length > 0 && (
                <div>
                {props.characters.map(characters => (
                    <div key={characters.characters_id}>
                        <h5>{characters.aliases}</h5>
                        <p>{characters.culture} {characters.gender}</p>
                    </div>

                ))}
                </div>
            )}

        </div>
    );
};

const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      characters: state.characters,
      error: state.error
    };
  };
  
  export default connect( 
    mapStateToProps,
    { fetchCharacters }
)(CharacterList);