// components/Layout.jsx
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      {/* 顶部导航 */}
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">My App</Link>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/editable-table">可编辑表格</Link>
          </li>
          <li>
            <Link to="/useReducer-task-app">useReducer任务管理</Link>
          </li>
          <li>
            <Link to="/ctx-and-reducer">上下文和useReducer</Link>
          </li>
          <li>
            <Link to="/form-page">表单页面</Link>
          </li>
          <li>
            <Link to="/temp">临时页面</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
