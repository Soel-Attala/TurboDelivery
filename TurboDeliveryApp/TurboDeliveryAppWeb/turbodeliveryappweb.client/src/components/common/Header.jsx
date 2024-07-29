import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/order-form">Create Order</Link></li>
                    <li><Link to="/order-list">Order List</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
