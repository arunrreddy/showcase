import React, {Component} from 'react';
import '../../css/styles.css';
import {connect} from 'react-redux';
import {fetchImages, selectImage} from '../actions';
import GalleryImage from './GalleryImage';
import GalleryThumbs from './GalleryThumbs';

const debug = require('debug');

export class Gallery extends Component {
    componentDidMount(){
        this.props.loadImages();
    }
    render(){
        const {images, selectedImage, selectImage} = this.props;
        return (
            <div className="image-gallery" hidden={!selectedImage}>
                <GalleryImage image={selectedImage} />
                <GalleryThumbs selectImage={selectImage} images={images} />
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        images: state.images,
        selectedImage: state.selectedImage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadImages: () => dispatch(fetchImages()),
        selectImage: (image) => dispatch(selectImage(image))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)
