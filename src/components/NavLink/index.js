import "./index.scss";

export default function NavLink({ to, children }) {
  return (
    <a className="nav-link" href={to}>
      {children}
    </a>
  );
}
