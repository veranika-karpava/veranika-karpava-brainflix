import './Header.scss';
import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import upload from '../../assets/images/upload.svg';


const Header = () => {

    const clickHandler = (e) => {
        e.preventDefault();
        console.log('click')
    };
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('click search');
        // e.target.reset();
    };

    return (
        <header className='header'>
            <Logo />
            <div className='header__container-forms'>
                <SearchForm submitHandler={submitHandler} />
                <Button icon={upload} title='UPLOAD' clickHandler={clickHandler} />
                <Avatar />
            </div>
        </header>
    );
};

export default Header;