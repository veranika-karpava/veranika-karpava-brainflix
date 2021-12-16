import React from 'react';
import { Component } from 'react';
import { Redirect } from 'react-router';
import './VideoUploadPage.scss';
import Button from '../../components/Button/Button';
import UploadForm from '../../components/UploadForm/UploadForm';
import publish from '../../assets/images/publish.svg';


class VideoUploadPage extends Component {
    state = {
        onSubmit: false
    }
    clickHandler = (e) => {
        e.preventDefault();
        this.setState({ onSubmit: true }, () => {
            alert('Video is uploaded')
        }
        )
    }
    render() {
        if (this.state.onSubmit) {
            return <Redirect to='/' />
        }
        return (
            <section className='upload-video'>
                <h1 className='upload-video__title'>Upload Video</h1>
                <form className='form' >
                    < UploadForm />
                    <div className='form__button-container'>
                        <Button icon={publish} title='PUBLISH' clickHandler={this.clickHandler} />
                        <button type='reset' value='Reset' className='form__button-reset'>CANCEL</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default VideoUploadPage;