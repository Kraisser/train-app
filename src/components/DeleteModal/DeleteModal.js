import './deleteModal.css';

import {useSelector, useDispatch} from 'react-redux';

import {delModalClose} from '../../actions/actions';
import useUpload from '../../services/useUpload';

export default function DeleteModal() {
	const dispatch = useDispatch();
	const {deleteExercise} = useUpload();

	const delModalStatus = useSelector((state) => state.delModalStatus);
	const activeProgram = useSelector((state) => state.activeProgram);

	const onDeleteEx = () => {
		deleteExercise(delModalStatus, activeProgram);
		dispatch(delModalClose());
	};

	return (
		<>
			<div className='modalOverlay'>
				<div className='modalWrapper'>
					<div className='modalDescription'>Вы действительно хотите удалить это упражнение</div>
					<div className='modalButWrapper'>
						<button className='modalBut greenBut but' onClick={onDeleteEx}>
							Да
						</button>
						<button className='modalBut redBut but' onClick={() => dispatch(delModalClose())}>
							Нет
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
