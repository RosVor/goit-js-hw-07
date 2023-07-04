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
      showCounter: false,
      showNav: true,
      navText: ['&lsaquo;', '&rsaquo;'],
      closeText: '&times;',
      docClose: true,
      swipeClose: true,
      closeTimeout: 0,
    });
  
    gallery.on('show.simplelightbox', () => {
      const closeButton = document.querySelector('.sl-close');
      closeButton.style.top = '10px';
      closeButton.style.right = '10px';
  
      const navButtons = document.querySelectorAll('.sl-navigation button');
      navButtons.forEach(button => (button.style.display = 'block'));
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
