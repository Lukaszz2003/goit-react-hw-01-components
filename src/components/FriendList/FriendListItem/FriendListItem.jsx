import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} id={id} key={id}>
      {isOnline === true ? (
        <span className={`${css.status} ${css.online}`}></span>
      ) : (
        <span className={`${css.status} ${css.offline}`}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User Avatar" width="48" />
      <p className={css.name}> {name} </p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
