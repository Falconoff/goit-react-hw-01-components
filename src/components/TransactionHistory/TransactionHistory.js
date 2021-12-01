import PropTypes from 'prop-types'
import TransactionRow from './TransactionRow'
import s from './TransactionHistory.module.scss'

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <TransactionRow
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
}
