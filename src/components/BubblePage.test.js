import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

import fetchColorService from '../services/fetchColorService'
jest.mock('../services/fetchColorService')

test("Renders without errors", ()=> {
    render(<BubblePage />)
    // this no longer passes with the introduction of jest.mock
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    fetchColorService.mockResolvedValueOnce({
        colors: [
            {
                color: "aliceblue",
                code: {
                  hex: "#f0f8ff",
                },
                id: 1,
              },
              {
                color: "limegreen",
                code: {
                  hex: "#99ddbc",
                },
                id: 2,
              },
              {
                color: "aqua",
                code: {
                  hex: "#00ffff",
                },
                id: 3,
              }
        ]
    })

    // arrange
    render(<BubblePage />)
    // act
    let colors = await screen.findAllByTestId('color')
    // assert
    expect(colors).toHaveLength(3)
});