import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import './VideoUploadPage.scss';
import Button from '../../components/Button/Button';
import publish from '../../assets/images/publish.svg';
import upload_video_preview from '../../assets/images/upload_video_preview.jpg';
const API_URL = process.env.REACT_APP_API_URL;


class VideoUploadPage extends Component {
    state = {
        videosData: [],
    }
    // submit form with redirect to homePage
    handleSubmitVideo = (e) => {
        e.preventDefault();
        axios
            .post(`${API_URL}/videos`,
                {
                    title: e.target.titleVideo.value,
                    description: e.target.descriptionVideo.value,
                })
            .then(response => {
                alert('Video is uploaded')
                e.target.reset()
                this.setState({
                    videosData: response.data
                })
                this.props.history.push('/');
            })
            .catch((error) => {
                let messageErr = error.response.data
                alert(messageErr);
                console.log(`Post request for upload video with: ${error}`)
            })
    };


    // clickHandler for reusable button
    clickHandler = (e) => { }

    // resetHandler for redirect to homePage
    resetHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }

    render() {
        return (
            <section className='upload-video'>
                <h1 className='upload-video__title'>Upload Video</h1>
                <form className='upload-video__form' id="upload-new-video-form" onSubmit={this.handleSubmitVideo} method="post">
                    <div className='upload-video__form-container'>
                        <fieldset className='upload-video__preview-image' form='upload-new-video-form' name='video-upload'>
                            <h3 className='upload-video__title-image'>VIDEO THUMBNAIL</h3>
                            <img className='upload-video__image' src={upload_video_preview} alt='Preview Upload Video' />
                        </fieldset>
                        <fieldset className='upload-video__video-description' form='upload-new-video-form' name='video-upload-title'>
                            <label htmlFor="title-video" className="upload-video__label">TITLE YOUR VIDEO</label>
                            <input type="text" className="upload-video__input-title" placeholder="Add a title to your video" id="titleVideo" name="titleVideo" />
                            <label htmlFor="description-video" className="upload-video__label">ADD A VIDEO DESCRIPTION</label>
                            <textarea type="text" className="upload-video__input-description" placeholder="Add a description to your video" id="descriptionVideo" name="descriptionVideo" />
                        </fieldset>
                    </div>
                    <div className='upload-video__button-container'>
                        <Button icon={publish} title='PUBLISH' clickHandler={this.clickHandler} />
                        <button className='upload-video__button-reset' value='reset' onClick={this.resetHandler}>CANCEL</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default VideoUploadPage;