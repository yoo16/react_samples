import './App.css';
import React, { useState, useEffect } from 'react'
import CharacterList from './CharacterList'
import BattleControl from './BattleControl'
import Message from './Message'
import CharacterStatus from './CharacterStatus'
import characters from './json/characters'
import monsters from './json/monsters'

import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';

function App() {
    const selectCharacter = (id) => {
        const character = characters.find(element => element.id === id);
        if (character.id) setCharacter(character);
    }

    const handleShowStatus = (e) => {
        const id = e.currentTarget.getAttribute('data-character-id');
        selectCharacter(id);
        if (character.id) setIsOpenStatus(true);
    };

    const handleCloseStatus = (e) => {
        setIsOpenStatus(false);
    }

    const handleBattle = (type) => {
        battle.push({ character_id: character.id, type: type });
        setBattle(battle)

        let index = battle.length;
        setCharacter(characters[index]);

        if (type === 'escape' || battle.length === 4) {
            return startBattle();
        }
    }

    const startBattle = () => {
        selectCharacter(1);
        setIsBattle(true);
    }

    //state
    let monster = monsters[0];

    const [character, setCharacter] = useState(characters[0]);
    const [battle, setBattle] = useState([]);
    const [isBattle, setIsBattle] = useState(false);
    const [isOpenStatus, setIsOpenStatus] = useState(false);

    useEffect(() => {

    });

    return (
        <div className="App">
            <header className="App-header">
                <CharacterList
                    characters={characters}
                    battle={battle}
                />

                <Box align="center" mt={3}>
                    <img src={monster.image} width={200} alt={monster.name} />
                </Box>

                {(isOpenStatus === true && character.id) &&
                    <CharacterStatus
                        character={character}
                        handleCloseStatus={handleCloseStatus} />
                }
                <Grid container justify="center" spacing={3}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <Message monster={monster} battle={battle} isBattle={isBattle} />
                    </Grid>
                    <Grid item xs={2}>
                        {(isBattle !== true) &&
                            <BattleControl
                                character={character}
                                handleBattle={handleBattle}
                                handleShowStatus={handleShowStatus} />
                        }
                    </Grid>
                </Grid>

            </header>
        </div>
    );
}

export default App;
