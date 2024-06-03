function ProductImage(imageName, imagePath) {
    return new URL(imagePath + imageName, import.meta.url);
}

export default ProductImage;