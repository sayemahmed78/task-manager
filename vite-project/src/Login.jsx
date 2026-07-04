import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "123456") {
      onLogin(true);
    } else {
      alert("Invalid Email or Password");
    }
  }

  return (
    <div className="auth-layout">
      <div className="auth-hero">
        <p className="eyebrow">Task manager</p>
        <h1>Stay in control of everything.</h1>
        <p>
          Sign in to create, search, and organize your tasks in one calm workspace.
        </p>

        <ul className="hero-points">
          <li>Smart task tracking</li>
          <li>Fast search and editing</li>
          <li>Beautiful modern UI</li>
        </ul>
      </div>

      <div className="auth-form-panel">
        <div className="form-card">
          <p className="eyebrow">Welcome back</p>
          <h2>Login to your account</h2>

          <form onSubmit={handleLogin} className="auth-form">
            <input
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="button button-primary">
              Sign in
            </button>
          </form>
          <p>Email: admin@gmail.com</p>
          <p>Password: 123456</p>
        </div>
      </div>
    </div>
  );
}

export default Login;