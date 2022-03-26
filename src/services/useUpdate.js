import {useDispatch, useSelector} from 'react-redux';

import useRequests from './useRequests';
import {
	exListError,
	exListSuccess,
	exListLoading,
	programListSuccess,
	programListError,
	setActiveProgram,
} from '../actions/actions';

export default function useUpdate() {
	const dispatch = useDispatch();
	const {getExercises, getProgramList} = useRequests();

	const activeProgram = useSelector((state) => state.activeProgram);

	const updateExercises = (path = activeProgram) => {
		dispatch(exListLoading());
		dispatch(setActiveProgram(path));

		getExercises()
			.then((res) => {
				if (!res[path]) {
					return;
				}
				dispatch(exListSuccess(res[path]));
			})
			.catch((e) => dispatch(exListError()));
	};

	const updatePrograms = () => {
		getProgramList()
			.then((res) => dispatch(programListSuccess(res)))
			.catch((e) => dispatch(programListError()));
	};

	return {updateExercises, updatePrograms};
}
