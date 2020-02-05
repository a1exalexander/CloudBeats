import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CloudBadge = props => {
  const { label, className, children, color = 'green' } = props;

  return (
    <div className={classNames('cloud-badge', color, className)}>
      <span className={classNames('cloud-badge__text')}>
        {label || children}
      </span>
    </div>
  );
};

CloudBadge.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  optionalEnum: PropTypes.oneOf(['green', 'red'])
};

export default CloudBadge;
