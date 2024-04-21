import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{
            background: 'darkolivegreen',
            color: 'white',
            padding: '10px',
            position: 'fixed',
            width: '100%',
            top: 0,
            left: 0,
            zIndex: 1000 // Ensures the navbar is above other content
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '50px' // Ensures the navbar has a consistent height
            }}>
                <div>
                    {/* React Router Link */}
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>
                        My Greenhouse
                    </Link>
                </div>
                <div>
                    <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
                        Dashboard
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
