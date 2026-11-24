import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

/* Lazy Imports */
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading page...</p>
    </div>
  );
}

function ErrorFallback() {
  return (
    <div className="error-box">
      <h2>Something went wrong</h2>
      <p>Please try again.</p>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <BrowserRouter>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/settings">Settings</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>

        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<h1 className="hero">Home Page</h1>} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </ErrorBoundary>
  );
}