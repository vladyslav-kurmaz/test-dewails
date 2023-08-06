import { FC } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { User } from '../../types/types';
import { userClose } from '../../store/userSlice';

import './UserCard.scss';
import SkeletonCastom from '../SkeletonCastom/SkeletonCastom';
import Spinner from '../spiner/spiner';

const UserCard: FC = () => {
  const dispatch = useAppDispatch();
  const {user, loading} = useAppSelector(state => state.userInfo);

  const closeUser = () => {
    dispatch(userClose(null))
  }

  const renderCard = (user: User) => {
    // if (user && user.name !== null) {
      return (
        <>
          <span 
            className='card__close'
            onClick={closeUser}>X</span>
          <div className='card__img'>
            <img 
              src={user?.avatar_url ? user?.avatar_url : 'This user dont have avatar' } 
              alt={user.name}
              className='card__img-picture' />
          </div>
          <div className='card__container'>
            <div className="card__container-name">
              {user.name}
            </div>
            <div className="card__container-bio">
              {user.bio !== null ? user.bio : 'User don\'t wrote bio'}
            </div>
            {
              user.html_url ? 
              <a 
                href={user?.html_url} 
                className='card__container-link'
                rel="noreferrer"
                target='_blank'>
                Link to GitHub
              </a>
              :
              null
            }
          </div>
          
        </>
      )  
    // } else {
    //   return <div>User not found</div>
    // }
    
  }

  const isUser = user ? renderCard(user) : <SkeletonCastom/>

  return (
    <div className='card'>
      {loading ? <Spinner/> : isUser}
    </div>
  )
}

export default UserCard;