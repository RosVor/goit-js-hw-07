import { galleryItems } from './gallery-items.js';
// Change code below this line
document.addEventListener('DOMContentLoaded', createGallery);
function createGallery() {
    const galleryContainer = document.querySelector('.gallery');
  
    const galleryMarkup = galleryItems
      .map(item => createGalleryItem(item))
      .join('');
  
    galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
  
    const galleryLinks = document.querySelectorAll('.gallery__link');
    galleryLinks.forEach(link => link.addEventListener('click', openLightbox));
  }
  
  function openLightbox(event) {
    event.preventDefault();
  
    const clickedLink = event.target.closest('.gallery__link');
    const originalUrl = clickedLink.href;
    const originalAlt = clickedLink.querySelector('.gallery__image').alt;
  
    const lightboxHtml = `
      <div class="lightbox">
        <div class="lightbox__overlay"></div>
        <div class="lightbox__content">
          <img src="${originalUrl}" alt="${originalAlt}" class="lightbox__image">
        </div>
      </div>
    `;
  
    document.body.insertAdjacentHTML('beforeend', lightboxHtml);
  
    const lightbox = document.querySelector('.lightbox');
    lightbox.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', handleKeydown);
  }
  
  function closeLightbox(event) {
    if (event.target !== event.currentTarget) return;
  
    const lightbox = document.querySelector('.lightbox');
    lightbox.remove();
  
    document.removeEventListener('keydown', handleKeydown);
  }
  
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeLightbox(event);
    }
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
