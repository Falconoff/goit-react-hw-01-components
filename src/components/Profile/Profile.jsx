import PropTypes from 'prop-types';
// import css from './Profile.module.scss';
import {
  Card,
  Description,
  Avatar,
  UserName,
  UserTag,
  UserLocation,
  StatsList,
  StatsItemName,
  StatsItemQuantity,
} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <StatsList>
        <li>
          <StatsItemName>Followers</StatsItemName>
          <StatsItemQuantity>{stats.followers}</StatsItemQuantity>
        </li>
        <li>
          <StatsItemName>Views</StatsItemName>
          <StatsItemQuantity>{stats.views}</StatsItemQuantity>
        </li>
        <li>
          <StatsItemName>Likes</StatsItemName>
          <StatsItemQuantity>{stats.likes}</StatsItemQuantity>
        </li>
      </StatsList>
    </Card>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
