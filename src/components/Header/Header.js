import './Header.scss';
import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import upload from '../../assets/images/upload.svg';


const Header = () => {
    const clickHandler = (e) => {
        e.preventDefault();
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <header className='header'>
            <Logo />
            <div className='header__container-forms'>
                <SearchForm submitHandler={submitHandler} />
                <Button icon={upload} title='UPLOAD' clickHandler={clickHandler} />
                <Avatar className='avatar' />
            </div>
        </header>
    );
};

export default Header;