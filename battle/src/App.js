import './App.css';
import React, { useState, useEffect } from 'react'
import characters from './json/characters'
import CharacterList from './CharacterList'
import BattleControl from './BattleControl'
import CharacterStatus from './CharacterStatus'

import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

function App() {
    const selectCharacter = (id) => {
        const character = characters.find(element => element.id == id);
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
        console.log('handleBattle');
        battle[character.id] = type;
        setBattle(battle)

        if (type == 'escape') {
            startBattle();
            return;
        }
        if (character.id == 4) {
            startBattle();
            return;
        } else {
            let next_id = character.id + 1;
            if (next_id > 4) next_id = 1;
            selectCharacter(next_id);
        }
    };

    const startBattle = () => {
        console.log('Start Battle');

        setIsBattle(true);
        setCharacter(characters[0]);
        console.log(message);
    }

    const escape = () => {
        console.log('Escape!!');
    }

    let monsterName = 'スライム';
    const initialMessage = monsterName + 'があらわれた！';

    //state
    const [character, setCharacter] = useState(characters[0]);
    const [message, setMessage] = useState(initialMessage);
    const [battle, setBattle] = useState({});
    const [isBattle, setIsBattle] = useState(false);
    const [isOpenStatus, setIsOpenStatus] = useState(false);

    useEffect(() => {
        if (isBattle == true) {
            const battleType = battle[character.id];
            let message = '';
            //TODO
            if (battleType == 'attack') {
                message = character.name + 'のこうげき！';
            } else if (battleType == 'magic') {
                message = character.name + 'はまほうをとなえた！';
            } else if (battleType == 'escape') {
                message = character.name + 'はにげだした！';
            }
            setMessage(message);
        }
    });

    return (
        <div className="App">
            <header className="App-header">
                <CharacterList
                    characters={characters}
                    battle={battle}
                />

                <Box align="center" mt={3}>
                    <img src="images/slime.png" width="200" />
                </Box>

                {(isOpenStatus == true && character.id) && 
                    <CharacterStatus
                        character={character}
                        handleCloseStatus={handleCloseStatus} />
                }
                <Grid container justify="center">
                    <Grid item xs={6}>
                        <Box border={1} borderColor="white" borderRadius={8} padding={2}>
                            {message}
                        </Box>
                    </Grid>
                </Grid>
                {(isBattle != true) && 
                <BattleControl
                    character={character}
                    message={message}
                    handleBattle={handleBattle}
                    handleShowStatus={handleShowStatus} />
                }
            </header>
        </div>
    );
}

export default App;
