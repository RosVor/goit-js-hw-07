import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', createGallery);
function createGallery() {
  const galleryContainer = document.querySelector('.gallery');
  const galleryMarkup = galleryItems
    .map(item => createGalleryItem(item))
    .join('');
    
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

  const gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionDelay: 250,
    captionsData: 'alt',
  });
}
function createGalleryItem(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>
  `;
}
console.log(galleryItems);
