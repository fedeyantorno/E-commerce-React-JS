import "./NavMobile.css"

export const NavMobile = () => {
  return (
    <button type="button" className="nav-icon-toggle" id="nav-icon-toggle" data-toggle="collapse" data-target="#navbar-collapse">
      <span className="nav-icon-toggle-bar"></span>
      <span className="nav-icon-toggle-bar"></span>
      <span className="nav-icon-toggle-bar"></span>
    </button>
  )
}
