import React from 'react';

/**
 * PUBLIC_INTERFACE
 * LoginGlass
 * A React component that reproduces the "Glass Effect Login Page - Original (2:173)" static design
 * using the provided CSS tokens and styles. This component is intentionally minimal and keeps
 * inline styles where the original asset encoded absolute positioning.
 *
 * Notes:
 * - Styles are imported from the assets directory. They are largely self-contained with prefixed classes.
 * - There are no figmaimages referenced in the provided HTML; if added later, place images under public/assets and reference as /assets/filename.
 */
import '../assets/common.css';
import '../assets/glass-effect-login-page-original-2-173.css';

// PUBLIC_INTERFACE
function LoginGlass() {
  /** Render the static layout using JSX (no inline HTML strings). */
  return (
    <div className="login-glass-wrapper" style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
      <div className="screen-glass-effect-login-page-original-2-173" id="screen-root" role="main" aria-label="Login screen">
        <h1 className="title" style={{ left: '32px', top: '120px' }}>Welcome Back</h1>

        <input
          className="input-glass"
          type="email"
          placeholder="Email"
          style={{ left: '32px', top: '220px', width: '366px', height: '56px' }}
          aria-label="Email"
          autoComplete="username"
        />
        <input
          className="input-glass"
          type="password"
          placeholder="Password"
          style={{ left: '32px', top: '292px', width: '366px', height: '56px' }}
          aria-label="Password"
          autoComplete="current-password"
        />
        <button
          className="btn-primary"
          type="button"
          style={{ left: '32px', top: '372px', width: '366px', height: '56px' }}
          aria-label="Login"
          onClick={() => {
            // Placeholder handler for now
            // eslint-disable-next-line no-alert
            alert('Login clicked (demo)');
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginGlass;
