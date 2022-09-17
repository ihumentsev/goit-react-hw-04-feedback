import PropTypes from 'prop-types';

import css from '../Notification/Notification.module.css';
export default function Notification({ message }) {
  return <p className={css.message}>{message}</p>;
}

Notification.propTypes = {
  optionalString: PropTypes.string,
};
