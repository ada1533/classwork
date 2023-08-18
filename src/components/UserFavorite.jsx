import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../store/usersSlice';

const UserFavorite = ({ user }) => {
    const dispatch = useDispatch();

    const toggleFavorite = () => {
        const updatedUser = { ...user, favorites: !user.favorites };
        dispatch(addToFavorites(updatedUser));
    };

    return (
        <div onClick={toggleFavorite}>
            {user.favorites ? (
                <img src="https://static-00.iconduck.com/assets.00/white-heart-emoji-2048x2008-1l7jbme4.png" alt="Favorite" width="20" height="20" />
            ) : (
                <img src="https://icon-library.com/images/white-heart-icon/white-heart-icon-23.jpg" alt="Not Favorite" width="20" height="20" />
            )}
        </div>
    );
};

export default UserFavorite;
