import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")
const galleryMarkUp = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
        `
    ).join('')
};
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp)

galleryContainer.addEventListener("click", selectImageOnClick)

function selectImageOnClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
  const imageEl = event.target
  const instance = basicLightbox.create(
    `<img src="${imageEl.dataset.source
    }" width="800" height="600">`
  )
  instance.show();

  document.addEventListener('keydown', closeModalOnEscape)

  function closeModalOnEscape(event) {
    if (!event.key === "Escape") {
      return
    }
    instance.close()
    document.removeEventListener('keydown', closeModalOnEscape)
  }

}