import './SearchForm.scss';
import search from '../../assets/images/search.svg';


const SearchForm = ({ submitHandler }) => {

    return (
        <form className="search" >
            <label className="search__label" htmlFor="search"></label>
            <button className='search__button' type='submit' onClick={submitHandler}>
                <img className="search__icon-search" src={search} alt='Search' />
            </button>
            <input type="search" className="search__input" placeholder="Search" id="search" name="search" />
        </form>
    );
};

export default SearchForm;