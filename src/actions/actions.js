import {createAction} from '@reduxjs/toolkit';

// export const setActiveProgram = (program) => ({
// 	type: 'SET_ACTIVE_PROGRAM',
// 	payload: program,
// });
// export const delModalClose = () => ({
// 	type: 'DEL_MODAL_CLOSE',
// });
// export const exListLoading = () => ({
// 	type: 'EX_LIST_LOADING',
// });
// export const exListError = () => ({
// 	type: 'EX_LIST_ERROR',
// });
// export const exListSuccess = (arr) => ({
// 	type: 'EX_LIST_SUCCESS',
// 	payload: arr,
// });
// export const programListLoading = () => ({
// 	type: 'PROGRAM_LIST_LOADING',
// });
// export const programListError = () => ({
// 	type: 'PROGRAM_LIST_ERROR',
// });
// export const programListSuccess = (programs) => ({
// 	type: 'PROGRAM_LIST_SUCCESS',
// 	payload: programs,
// });
// export const delModalOpen = (id) => ({
// 	type: 'SET_DEL_ID',
// 	payload: id,
// });

export const setActiveProgram = createAction('SET_ACTIVE_PROGRAM');
export const delModalClose = createAction('DEL_MODAL_CLOSE');
export const exListLoading = createAction('EX_LIST_LOADING');
export const exListError = createAction('EX_LIST_ERROR');
export const exListSuccess = createAction('EX_LIST_SUCCESS');
export const programListLoading = createAction('PROGRAM_LIST_LOADING');
export const programListError = createAction('PROGRAM_LIST_ERROR');
export const programListSuccess = createAction('PROGRAM_LIST_SUCCESS');
export const delModalOpen = createAction('SET_DEL_ID');
