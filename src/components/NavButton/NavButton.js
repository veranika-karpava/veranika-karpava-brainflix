import { Link } from 'react-router-dom';
import './NavButton.scss';

const NavButton = (props) => {
    const { icon, title, path } = props;

    return (
        <div className='nav-button'>
            <Link to={path} className='nav-button__link'>
                <img className="nav-button__icon" src={icon} alt={title} />
                {title}
            </Link>
        </div>
    );
};

export default NavButton;