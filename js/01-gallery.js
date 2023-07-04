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
const openModal = (url) => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `, {
    onShow: (instance) => {
      const modalImage = instance.element().querySelector('img');
      modalImage.addEventListener('click', () => {
        instance.close();
      });
    }
  });

  instance.show();
};
galleryList.addEventListener('click', (event) => {
  event.preventDefault();
  const target = event.target;

  if (target.classList.contains('gallery__image')) {
    const largeImageURL = target.dataset.source;
    openModal(largeImageURL);
  }
});

const galleryImages = document.querySelectorAll('.gallery__image');
galleryImages.forEach((image) => {
  image.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
