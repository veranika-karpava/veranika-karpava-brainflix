import './Header.scss';
import Logo from '../Logo/Logo';
import SearchForm from '../SearchForm/SearchForm';
import NavButton from '../NavButton/NavButton';
import Avatar from '../Avatar/Avatar';
import upload from '../../assets/images/upload.svg';

const Header = () => {
    const submitHandler = (e) => {
        e.preventDefault()
        e.target.reset()
    };

    return (
        <header className='header'>
            <Logo path="/" />
            <div className='header__container-forms'>
                <SearchForm submitHandler={submitHandler} />
                <NavButton icon={upload} title='UPLOAD' path="/video-upload" />
                <Avatar className='avatar' />
            </div>
        </header>
    );
};

export default Header;