// * redux 
import { useSelector } from 'react-redux';
import { selectIsOpenCreateModal, selectIsOpenUpdateModal, selectIsOpenDeleteModal} from '../../redux/contacts/selectors';
import { selectUser} from '../../redux/user/selectors';

export function useLayout() {
    const isOpenCreateModal = useSelector(selectIsOpenCreateModal)
    const isOpenUpdateModal = useSelector(selectIsOpenUpdateModal)
    const isOpenDeleteModal = useSelector(selectIsOpenDeleteModal)
    const user = useSelector(selectUser)

    return {
        models: {
            isOpenCreateModal,
            isOpenUpdateModal,
            isOpenDeleteModal,
            user
        }
    }
}