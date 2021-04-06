import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, showExpense}) => {
    return  (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showExpense ? 'red' : 'green'} text={showExpense ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Expense Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;