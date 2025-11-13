import React from 'react';

/**
 * PUBLIC_INTERFACE
 * LoginGlass
 * Accessible, responsive glass-morphism login screen aligned with
 * "Glass Effect Login Page - Original (2:173)".
 */
import '../assets/common.css';
import '../assets/glass-effect-login-page-original-2-173.css';

// PUBLIC_INTERFACE
function LoginGlass() {
  return (
    <div className="screen-glass-effect-login-page-original-2-173" id="screen-root">
      {/* Decorative shapes approximating the PNG */}
      <div className="blob blob--left" aria-hidden="true" />
      <div className="blob blob--right" aria-hidden="true" />
      <div className="blob blob--bottom" aria-hidden="true" />

      <main className="glass-card" role="main" aria-label="Login form">
        <header className="glass-header">
          <div className="brand" aria-label="Brand placeholder">Your logo</div>
        </header>

        <h1 className="title">Login</h1>

        <form className="glass-form" action="#" method="post" aria-describedby="form-help">
          <div>
            <label className="label" htmlFor="email">Email</label>
            <input id="email" name="email" className="input" type="email" placeholder="Email" autoComplete="username" required />
          </div>
          <div>
            <label className="label" htmlFor="password">Password</label>
            <input id="password" name="password" className="input" type="password" placeholder="Password" autoComplete="current-password" required />
          </div>

          <div className="form-footer">
            <span id="form-help">Use your account to sign in.</span>
            <a href="#forgot" aria-label="Forgot your password link">Forgot Password?</a>
          </div>

          <button className="btn-primary" type="submit" aria-label="Sign in">
            Sign in
          </button>

          <div className="divider" role="separator" aria-label="Or continue with">Or continue with</div>

          <div className="social-row">
            <button className="social-btn" type="button" aria-label="Continue with Google">
              <img src="/assets/figmaimages/google.svg" width="18" height="18" loading="lazy" alt="" aria-hidden="true" />
              Google
            </button>
            <button className="social-btn" type="button" aria-label="Continue with Apple">
              <img src="/assets/figmaimages/apple.svg" width="18" height="18" loading="lazy" alt="" aria-hidden="true" />
              Apple
            </button>
            <button className="social-btn" type="button" aria-label="Continue with Facebook">
              <img src="/assets/figmaimages/facebook.svg" width="18" height="18" loading="lazy" alt="" aria-hidden="true" />
              Facebook
            </button>
          </div>

          <div className="form-footer" style={{ justifyContent: 'center', gap: 6 }}>
            <span>Don’t have an account?</span>
            <a href="#register" aria-label="Register link">Register for free</a>
          </div>
        </form>
      </main>
    </div>
  );
}

export default LoginGlass;
