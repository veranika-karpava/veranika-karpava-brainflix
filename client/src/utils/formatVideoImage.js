// function for format video url adress 

const API_URL = process.env.REACT_APP_API_URL;

function formatVideoImage(image) {
    const videoImage = image.includes('http') ? image : `${API_URL}/${image}`;

    return videoImage;
}

export default formatVideoImage;