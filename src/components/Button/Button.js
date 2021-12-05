import './Button.scss';

const Button = (props) => {
    const { clickHandler, icon, title } = props;

    return (
        <div className='button' onClick={clickHandler}>
            <button className="button__component">
                <img className="button__icon" src={icon} alt={title} />
                <p className="button__label">{title}</p>
            </button>
        </div>
    );
};

export default Button;