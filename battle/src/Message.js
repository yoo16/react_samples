import './App.css';
import React, { useState, useEffect } from 'react'

import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Message({ monster, battle, isBattle, isSelectBattle, battleIndex, handleNextBattle }) {
    const initMessage = monster.name + 'があらわれた!';
    const [message, setMessage] = useState(initMessage);

    useEffect(() => {
        showMessage();
    });

    const showMessage = () => {
        if (isSelectBattle) {
            setMessage('こうどうをせんたくしてください');
            return;
        }
        if (monster.hp < 0) {
            setMessage(monster.name + 'をたおした！');
            return;
        }
        const _battle = battle[battleIndex];
        if (_battle && _battle.message) {
            setMessage(_battle.message);
        }
    }

    return (
        <Box border={1} borderColor="white" borderRadius={8} padding={2}>
            {message}
            <p align="right">
                {(!isSelectBattle && isBattle && battleIndex < 4) && 
                    <Button
                        onClick={handleNextBattle}
                        color="inherit"
                        size="small"
                        disableElevation>▼</Button>
                }
            </p>
        </Box>
    );
}

export default Message;
