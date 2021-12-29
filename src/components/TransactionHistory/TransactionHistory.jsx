import PropTypes from 'prop-types';
import TransactionRow from './TransactionRow/TransactionRow';
import { TransactionHistoryTable } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionRow
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
