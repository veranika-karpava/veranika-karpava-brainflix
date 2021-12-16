import './SearchForm.scss';
import search from '../../assets/images/search.svg';


const SearchForm = ({ submitHandler }) => {

    return (
        <form className="search" onSubmit={submitHandler}>
            <label className="search__label" htmlFor="search"></label>
            <button className='search__button' type='submit'>
                <img className="search__icon-search" src={search} alt='Search icon' />
            </button>
            <input type="search" className="search__input" placeholder="Search" id="search" name="search" />
        </form>
    );
};

export default SearchForm;