import react from "react";
import { NavLink } from "react-router-dom";
import '../styles/sidebar.css'

const Sidebar = () => {
  return (
    <section className="bg-light shadow-sm border">
          <div className="sidebar d-flex flex-column">
          <NavLink exact to="/" className="p-2 border">
          <i className="far fa-folder-open"></i> Files
          </NavLink>
          <NavLink exact to="/photos" className="p-2 border">
          <i className="fas fa-images"></i> Photos
          </NavLink>
          <NavLink exact to="/videos" className="p-2 border">
          <i className="far fa-file-video"></i> Videos
          </NavLink>

          <NavLink exact to="/shared" className="p-2 border">
          <i className="fas fa-share-alt"></i> Shared
          </NavLink>
          <NavLink exact to="/syncronization" className="p-2 border">
          <i className="fas fa-sync"></i> Syncronization
          </NavLink>
          </div>
    </section>
  );
};

export default Sidebar;
