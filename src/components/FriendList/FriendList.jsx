import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
