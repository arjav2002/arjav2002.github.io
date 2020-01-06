/*Theres only one action to manage as of now so doing everything in the same file*/

import { createStore } from 'redux';

export const TOGGLE = 'TOGGLE';
export function toggleAction() {
	return {
		type: TOGGLE
	}
}

export function reducer(state={view: true}, action) {
	switch(action.type) {
		case TOGGLE:
			return Object.assign({}, {view: !state.view});
		default:
			return state;
	}
}

export const store = createStore(reducer);
