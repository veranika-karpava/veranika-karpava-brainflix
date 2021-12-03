import './Button.scss';

const Button = (props) => {
    return (
        <form className='button' onClick={props.clickHandler}>
            <button className="button__component">
                <img className="button__icon" src={props.icon} alt={props.title} />
                <p className="button__label">{props.title}</p>
            </button>
        </form>
    );
};

export default Button;