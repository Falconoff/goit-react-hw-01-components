import PropTypes from 'prop-types'
import StatItem from './StatItem'
import s from './Statistics.module.scss'

export default function Statistics({ title, data }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {data.map((item) => (
          <li className={s.item} key={item.id}>
            <StatItem label={item.label} percentage={item.percentage} />
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
}
