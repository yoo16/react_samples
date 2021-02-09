import './App.css';
import React, { useState, useEffect } from 'react'
import characters from './json/characters'

import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Message({ monster, battle, isBattle }) {
    const initMessage = monster.name + 'があらわれた!';
    const [message, setMessage] = useState(initMessage);
    const [battleIndex, setBattleIndex] = useState(0);


    useEffect(() => {
        showMessage();
    });

    const showMessage = () => {
        if (isBattle === true) {
            let character = characters[battleIndex];
            const _battle = battle[battleIndex];
            if (_battle.type) {
                let _message = '';
                if (_battle.type === 'attack') {
                    _message = character.name + 'のこうげき！';
                } else if (_battle.type === 'magic') {
                    _message = character.name + 'はまほうをとなえた！';
                } else if (_battle.type === 'escape') {
                    _message = character.name + 'はにげだした！';
                }
                setMessage(_message);
            }
        };
    }

    const handleNextMessage = () => {
        if (battleIndex === 3) return;
        setBattleIndex(battleIndex + 1);
    }

    return (
        <Box border={1} borderColor="white" borderRadius={8} padding={2}>
            {message}
            <p align="right">
                {isBattle &&
                    <Button
                        onClick={handleNextMessage}
                        color="inherit"
                        size="small"
                        disableElevation>▼</Button>
                }
            </p>
        </Box>
    );
}

export default Message;
