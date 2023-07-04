import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');
const createGalleryItem = ({ preview, original, description }) => {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
};

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const galleryImages = document.querySelectorAll('.gallery__image');
galleryImages.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.preventDefault();
  });
});


