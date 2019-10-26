const defaultState = {
    images: []
}

export default function images(state=defaultState, action) {
    switch (action.type) {
        case 'IMAGE_SELECTED':
            return {...state, selectedImage: action.image};
            break;
        case 'IMAGES_LOADED':
            return {...state, images: action.images}
            break;
        case 'IMAGE_LOAD_FAILURE':
            return state;
            break;
        default:
            return state;
    }
}
