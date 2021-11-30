import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map((item) => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}