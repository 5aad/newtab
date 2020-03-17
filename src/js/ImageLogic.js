var imageArray = [
    "https://new-tab-images.sfo2.digitaloceanspaces.com/space-1582086567693-669.jpg",
    "https://new-tab-images.sfo2.digitaloceanspaces.com/temp-image-block.jpg",
    "https://new-tab-images.sfo2.digitaloceanspaces.com/background-photo.jpg",
    "https://new-tab-images.sfo2.digitaloceanspaces.com/boris-baldinger-VEkIsvDviSs-unsplash.jpg",
    "https://new-tab-images.sfo2.digitaloceanspaces.com/lucas-benjamin-wQLAGv4_OYs-unsplash.jpg",
    "https://new-tab-images.sfo2.digitaloceanspaces.com/nasa-Q1p7bh3SHj8-unsplash.jpg",
    "https://new-tab-images.sfo2.digitaloceanspaces.com/01.jpg",
    "https://new-tab-images.sfo2.digitaloceanspaces.com/02.jpg"
]

var adArray = [
    "https://new-tab-images.sfo2.digitaloceanspaces.com/ads/ad-01.png",
    "https://new-tab-images.sfo2.digitaloceanspaces.com/ads/ad-02.png"
]



function get_index(arrayLength){
    var today = new Date();
    var hour =  today.getMinutes();
    console.log(hour);
    // The larger number should be before the modulo. Eventually we'll want 25 photos in an array.
    // Array length would go first
    var index = (hour % arrayLength) ;
    console.log(index);
    return index;
}
export function pull_image(){
    var index = get_index(imageArray.length)
    return imageArray[index];
}

export function pull_ad(){
    var index = get_index(adArray.length);
    return adArray[index];
}


