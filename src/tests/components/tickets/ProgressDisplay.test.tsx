import ProgressDisplay from '../../../components/tickets/ProgressDisplay'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('ProgressDisplay Components', () => {
    it.each([
       { progress: 0},
       { progress: 10},
       { progress: 20},
       { progress: 50},
       { progress: 70},
       { progress: 100},
    ])('Should show $progress if the props is $progress' , ({progress}) => {
        render(<ProgressDisplay progress={progress}/>)

        const style = window.getComputedStyle(screen.getByTestId('progress'))
        expect(style.width).toBe(`${progress}%`)
    })
})