import './CommentBox.scss';
import axios from 'axios';
import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';
import add_comment from '../../assets/images/add_comment.svg';
const API_URL = process.env.REACT_APP_API_URL;

const CommentBox = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${API_URL}/videos/${props.id}/comments`, {
                name: "Veranika Karpava",
                comment: e.target.comment.value,
            })
            .then(res => {
                props.fetchVideoDetails(props.id)
            })
            .catch(err => {
                console.error(err);
            })
        e.target.reset()
    }


    return (
        <div className='comment-container'>
            <Avatar className='comment-avatar' />
            <form className='comment-container__form' onSubmit={handleSubmit} >
                <label htmlFor="comment" className="comment-container__label">JOIN THE CONVERSATION</label>
                <textarea className="comment-container__box" type="text" id="comment" name="comment"
                    placeholder="Add a new comment"></textarea>
                <Button icon={add_comment} title='COMMENT' />
            </form>
        </div>
    );
};

export default CommentBox;
