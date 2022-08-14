import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")
const galleryMarkUp = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>
        `
    ).join('')
};
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp)


console.log(createGalleryMarkup(galleryItems))


// console.log(galleryContainer)