import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Component } from 'react';
import { StyledButton } from './styles';
import Spinner from '../Spinner';

/**
 *
 * @param {{type: string, isLoading: boolean, disabled: boolean, children: Component}} param0
 * @returns {Component}
 */
export default function Button({
  type, isLoading, disabled, children,
}) {
  return (
    <StyledButton
      disabled={disabled || isLoading}
      type={type}
    >
      {isLoading ? <Spinner size={16} /> : children }
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
};
