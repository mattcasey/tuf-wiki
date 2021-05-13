/**
 * Write-only the password as cookie
 */
import React, { useState } from 'react';
import { setSessionPassword } from '@mkitio/gatsby-theme-password-protect/src/utils/utils';

const styles = {
  wrapper: {
    height: '100vh',
    background: '#273755',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    border: '0 none',
    fontSize: '22px',
    padding: '4px 8px',
    textAlign: 'center',
    width: '100%',
    height: '48px',
    borderRadius: '4px'
  },
  button: {
    width: '100%',
    height: '48px',
    background: '#364F6F',
    color: '#FFCB05',
    cursor: 'pointer',
    border: '1px solid #364F6F',
    borderRadius: '4px',
    marginTop: '16px',
    textTransform: 'uppercase',
    fontWeight: '300',
    fontFamily: 'sans-serif'
  },
  buttonHover: {
    background: '#14254b',
    //color: '#000000'
  },
  link: {
    color: '#FFCB05',
    fontFamily: 'sans-serif'
  },
  linkHover: {
    color: 'dodgerblue'
  }
};

const PasswordProtect = () => {
  const [password, setPassword] = useState('');
  const [isButtonHovered, buttonHover] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setSessionPassword(password);
    window.location.reload(); // eslint-disable-line
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={{ color: '#FFCB05' }}>Welcome</h1>
      <h4 style={{ color: '#FFCB05' }}>Enter Password</h4>

      <form onSubmit={onSubmit} style={{ width: '320px' }}>
        <input
          autoFocus
          name="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          style={styles.input}
        />

        <button
          type="submit"
          style={{
            ...styles.button,
            ...(isButtonHovered ? styles.buttonHover : null)
          }}
          onMouseEnter={() => buttonHover(true)}
          onMouseLeave={() => buttonHover(false)}
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default PasswordProtect;
