import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import {} from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Content, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  label: string;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  label,
  children,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container style={containerStyle} data-testid="input-container">
      <Content>
        <div>
          <label htmlFor="inputRef">{label}</label>
          <input defaultValue={defaultValue} ref={inputRef} {...rest} />
        </div>
      </Content>
      {children && children}

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
