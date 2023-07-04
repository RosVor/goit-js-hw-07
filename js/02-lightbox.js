import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');
    const galleryMarkup = galleryItems
      .map(item => `
        <li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
          </a>
        </li>
      `)
      .join('');
  
    gallery.innerHTML = galleryMarkup;

    const lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
      captionClass: 'caption-style',
      animationSlide: true,
      animationSpeed: 250,
      history: true,
    });
  });
