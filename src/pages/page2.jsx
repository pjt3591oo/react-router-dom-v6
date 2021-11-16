import { NavLink, Outlet, Link } from 'react-router-dom';

const Page2 = () => {
  return (
    <div>
      <h1>Page 2</h1>
      <ul>
        <li><NavLink to="/page1" style={({ isActive }) => ({ color: isActive ? 'black' : '#8e8e8e' })}>page1</NavLink></li>
        <li><NavLink to="/page2" style={({ isActive }) => ({ color: isActive ? 'black' : '#8e8e8e' })}>page2</NavLink></li>
      </ul>

      <hr />
      
      <div>
        <h1>nested dom</h1>
        
        <div>
          <ul>
            <li><Link to="" > blank</Link></li>
            <li><Link to="b" > b</Link></li>
          </ul>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Page2;