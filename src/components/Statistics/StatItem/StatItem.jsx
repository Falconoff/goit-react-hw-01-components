import PropTypes from 'prop-types';
import { StatListItem, Label, Percentage } from './StatItem.styled';

export default function StatItem({ label, percentage }) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <StatListItem
      style={{
        backgroundColor:
          'rgb(' +
          getRandomInt(0, 200) +
          ', ' +
          getRandomInt(0, 200) +
          ', ' +
          getRandomInt(0, 200) +
          ')',
      }}
    >
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatListItem>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
