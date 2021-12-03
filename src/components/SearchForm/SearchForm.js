import './SearchForm.scss';
import search from '../../assets/images/search.svg';


const SearchForm = (props) => {
    return (
        <form className="search" >
            <label className="search__label" htmlFor="search"></label>
            <img className="search__icon-search" src={search} alt='Search' onClick={props.submitHandler} />
            <input type="search" className="search__input" placeholder="Search" id="search" name="search" />
        </form>
    );
};

export default SearchForm;