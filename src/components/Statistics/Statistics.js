import PropTypes from 'prop-types'
import StatItem from './StatItem'
// import data from '../../db/data.json'

export default function Statistics({ title, data }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {data.map((item) => (
          <li className="item" key={item.id}>
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
