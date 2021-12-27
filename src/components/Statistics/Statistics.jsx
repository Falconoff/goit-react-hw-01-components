import PropTypes from 'prop-types';
import StatItem from './StatItem/StatItem';
// import css from './Statistics.module.scss';
import { Section, Title, StatList } from './Statistics.styled';

export default function Statistics({ title, data }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList>
        {data.map(({ label, percentage, id }) => (
          <StatItem label={label} percentage={percentage} key={id} />
        ))}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
