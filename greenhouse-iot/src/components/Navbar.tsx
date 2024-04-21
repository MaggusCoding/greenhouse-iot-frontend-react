import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ background: 'darkolivegreen', color: 'white', padding: '10px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    {/* React Router Link */}
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px' }}>
                        MyApp
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
