import PropTypes from 'prop-types';
import { getRandomBackgroundColor } from '../../../helpers/makeRandomBackgroundColor';
import { StatListItem, Label, Percentage } from './StatItem.styled';

export default function StatItem({ label, percentage }) {
  return (
    <StatListItem style={getRandomBackgroundColor(0, 200)}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatListItem>
  );
}

StatItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
