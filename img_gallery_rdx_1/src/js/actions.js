export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const LOAD_IMAGES = 'IMAGES_LOADED';

export function selectImage(image) {
    return {
        type: IMAGE_SELECTED,
        image
    }
}

export function loadFetchedImages(images) {
    return {
        type: LOAD_IMAGES,
        images
    }
}

export function fetchImages() {
    return function(dispatch,getState){
        const state = getState();
        return fetch('https://demo0813639.mockable.io/getPanos').then(function (response) {
            return response
                .json()
                .then(function (json) {
                    const images = json.map(({pano, name}) => pano);
                    dispatch(loadFetchedImages(images));
                    dispatch(selectImage(images[0]));
                })
        }).catch(err => {
            console.log(err);
        })
    };
}
