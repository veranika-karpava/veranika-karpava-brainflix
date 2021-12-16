import './Button.scss';

const Button = ({ icon, title, clickHandler }) => {
    return (
        <button className="button" onClick={clickHandler} type='submit' value='Submit'>
            <img className="button__icon" src={icon} alt={title} />
            {title}
        </button>
    );
};

export default Button;