import { render } from 'react-dom';
import React, { Component } from 'react'
import Puzzle from 'react-image-puzzle';

class PuzzleComp extends Component{
    render(){
        return(
            <Puzzle image={ require('./images/koala_game.jpg')} className='gamebackground' />
        )
    }
}

export default PuzzleComp