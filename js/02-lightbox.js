//import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    captionClass: 'caption-style',
    animationSlide: true,
    animationSpeed: 250,
    history: true,
  });
});
