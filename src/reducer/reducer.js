import {createReducer} from '@reduxjs/toolkit';
import {
	setActiveProgram,
	delModalClose,
	exListLoading,
	exListError,
	exListSuccess,
	programListLoading,
	programListError,
	programListSuccess,
	delModalOpen,
} from '../actions/actions';

const initialState = {
	activeProgram: '',
	delModalStatus: false,
	exerciseList: {},
	exerciseListStatus: 'loading',
	programList: [],
	programListStatus: 'loading',
};

const reducer = createReducer(initialState, (builder) => {
	builder
		.addCase(setActiveProgram, (state, action) => {
			state.activeProgram = action.payload;
		})
		.addCase(delModalClose, (state) => {
			state.delModalStatus = false;
		})
		.addCase(exListLoading, (state) => {
			state.exerciseListStatus = 'loading';
		})
		.addCase(exListError, (state) => {
			state.exerciseListStatus = 'error';
		})
		.addCase(exListSuccess, (state, action) => {
			state.exerciseListStatus = 'idle';
			state.exerciseList = action.payload;
		})
		.addCase(programListLoading, (state) => {
			state.programListStatus = 'loading';
		})
		.addCase(programListError, (state) => {
			state.programListStatus = 'error';
		})
		.addCase(programListSuccess, (state, action) => {
			state.programListStatus = 'idle';
			state.programList = action.payload;
		})
		.addCase(delModalOpen, (state, action) => {
			state.delModalStatus = action.payload;
		});
});

export default reducer;

// export default function reducer(state = initialState, action) {
// 	switch (action.type) {
// 		case 'EX_LIST_LOADING':
// 			return {
// 				...state,
// 				exerciseListStatus: 'loading',
// 			};
// 		case 'EX_LIST_ERROR':
// 			return {
// 				...state,
// 				exerciseListStatus: 'error',
// 			};
// 		case 'EX_LIST_SUCCESS':
// 			return {
// 				...state,
// 				exerciseListStatus: 'idle',
// 				exerciseList: action.payload,
// 			};
// 		case 'PROGRAM_LIST_LOADING':
// 			return {
// 				...state,
// 				programListStatus: 'loading',
// 			};
// 		case 'PROGRAM_LIST_ERROR':
// 			return {
// 				...state,
// 				programListStatus: 'error',
// 			};
// 		case 'PROGRAM_LIST_SUCCESS':
// 			return {
// 				...state,
// 				programListStatus: 'idle',
// 				programList: action.payload,
// 			};
// 		case 'SET_ACTIVE_PROGRAM':
// 			return {
// 				...state,
// 				activeProgram: action.payload,
// 			};
// 		case 'DEL_MODAL_CLOSE':
// 			return {
// 				...state,
// 				delModalStatus: false,
// 			};
// 		case 'SET_DEL_ID':
// 			return {
// 				...state,
// 				delModalStatus: action.payload,
// 			};
// 		default:
// 			return state;
// 	}
// }
