import PropTypes from 'prop-types';
import StatItem from './StatItem/StatItem';
import s from './Statistics.module.scss';

export default function Statistics({ title, data }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {data.map(({ label, percentage, id }) => (
          <StatItem label={label} percentage={percentage} key={id} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
