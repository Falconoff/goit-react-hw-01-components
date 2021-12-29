import PropTypes from 'prop-types';
import { TableRow } from './TransactionRow.styled';

export default function TransactionRow({ type, amount, currency }) {
  return (
    <TableRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableRow>
  );
}

TransactionRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
