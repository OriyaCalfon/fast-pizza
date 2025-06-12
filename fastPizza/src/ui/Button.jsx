import { Link } from 'react-router-dom';
import '../index.css';

function Button({ children, disabled, to, type, onClick }) {
  const styles = {
    primary: 'button button-primary',
    small: 'button button-primary button-small',
    round: 'button button-primary button-round',
    secondary: 'button button-secondary',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;



