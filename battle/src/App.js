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

    const battleMessage = (battleType) => {
        if (!battleType) return '';
        let message = '';
        if (battleType === 'attack') {
            message = character.name + 'のこうげき！';
        } else if (battleType === 'magic') {
            message = character.name + 'はまほうをとなえた！';
        } else if (battleType === 'escape') {
            message = character.name + 'たちはにげだした！';
        }
        return message;
    }

    const handleBattle = (type) => {
        //TODO battle logic & Model, Service
        battle.push({
            character_id: character.id,
            type: type,
            is_turn: true,
            message: battleMessage(type),
        });
        setBattle(battle);

        if (type === 'escape') {
            setBattleIndex(0);
            setIsBattle(true);
            setIsSelectBattle(false);
            return;
        }

        setBattleIndex(battleIndex + 1);
        setCharacter(characters[battleIndex + 1]);
        if (battleIndex === 3) {
            return startBattle();
        }
    }

    const selectBattle = () => {
        setBattleIndex(0);
        setCharacter(characters[0]);
        setIsSelectBattle(true);
        setBattle([]);
    }

    const startBattle = () => {
        selectCharacter(1);
        setBattleIndex(0);
        setIsSelectBattle(false);
        setIsBattle(true);
    }

    const endBattle = () => {
        setIsBattle(false);
        setBattle([]);
    }

    const nextCharacterBattle = () => {
        setBattleIndex(battleIndex + 1);
        setCharacter(characters[battleIndex + 1]);
    }

    const handleNextBattle = () => {
        if (!isBattle) return;
        attackByCharacter();

        //TODO monster model
        if (monster.hp < 0) {
            endBattle();
            return;
        } else {
            attackByMonster();
        }

        if (battleIndex === 3) {
            selectBattle();
        } else {
            nextCharacterBattle();
        }
    }

    const calculateDamage = (power) => {
        const max = power + 5;
        const min = power;
        return Math.round(Math.random() * (max - min)) + min;
    }

    const attackByCharacter = () => {
        monster.hp -= calculateDamage(character.power);
        setMonster(monster);
        console.log(monster);
    }

    const attackByMonster = () => {
        const index = Math.floor(Math.random() * 3);
        let _character = characters[index];
        _character.hp -= calculateDamage(monster.power);
        setCharacter(_character);
    }

    //state
    // let monster = monsters[0];
    const [monster, setMonster] = useState(monsters[0]);
    const [character, setCharacter] = useState(characters[0]);
    const [battle, setBattle] = useState([]);
    const [isBattle, setIsBattle] = useState(false);
    const [isSelectBattle, setIsSelectBattle] = useState(true);
    const [battleIndex, setBattleIndex] = useState(0);

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

                <Grid container justify="center" spacing={3}>
                    <Grid item xs={12} md={3}>
                        <CharacterStatus character={character} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Message
                            monster={monster}
                            battle={battle}
                            battleIndex={battleIndex}
                            isBattle={isBattle}
                            isSelectBattle={isSelectBattle}
                            handleNextBattle={handleNextBattle}
                        />
                    </Grid>
                    <Grid item xs={6} md={2}>
                        {(isSelectBattle === true) &&
                            <BattleControl
                                character={character}
                                handleBattle={handleBattle}
                            ></BattleControl>
                        }
                    </Grid>
                </Grid>

            </header>
        </div>
    );
}

export default App;
