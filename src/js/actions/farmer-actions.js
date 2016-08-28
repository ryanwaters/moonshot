import R from 'ramda'
import React from 'react'
import { ACTIONS } from '../constants/actions'

export const addNewFarmer = (text)=> {
	return {
		type: ACTIONS.ADD_USER_NAME,
		text: 'Your Name'
	}
}

export const addFarmerEmail = (text)=> {
	return {
		type: ACTIONS.ADD_EMAIL,
		text: 'Your Email'
	}
}

export const deleteFarmer = (id)=> {
	return {
		type: ACTIONS.DELETE_FARMER,
		id
	}
}

/*
list of farmers: [
	{
		id: 23123,
		name: `smokey`,
		desc: `bandit weed`,
		whatever: `cool shit`
	}, {
		id: 23123,
		name: `smokey`,
		desc: `bandit weed`,
		whatever: `cool shit`
	}
]

const ADD_NEW_FARMER = `ADD_NEW_FARMER`

const addNewFarmer = (payload) => {
	return {
		type: ADD_NEW_FARMER,
		payload
	}
}

addNewFarmer({
	id: 234234,
	name: `evan the racist`,
	desc: `something offensive`,
	whatever: `divorce`
})


// dispatch(addNewFarmer())
// flux-standard-action => ({type, [payload], [meta]})

(state, action) => newState
reducers = {
	[ADD_NEW_FARMER] : (state, action) => {
		if (!state) {
			return [action.payload]
		}
		if (!action || !action.payload) {
			return state
		}
		// /*
		const newState = state
		newState.push(action.payload)
		return newState
		// * /
		return [...state, action.payload]
	}

}
import expect from 'must'

describe(`reducer your mom`, () => {
	it(`should reduce stuff`, () => {
		const newState = reducer([{id: `dumdum`}], {payload: {id: `ken the farmer`}})
		expect(newState).to.eql([{id: `dumdum`}, {id: `ken the farmer`}])
	})
})
*/
