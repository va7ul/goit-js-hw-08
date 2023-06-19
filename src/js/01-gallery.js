// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
galleryEl.style.listStyle = 'none';

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup)

function createGalleryMarkup(items) {
    return items.map(({preview, original, description}) => 
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`)
    .join('');
};

imageFullscreenOpener();

function imageFullscreenOpener() {
    new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionDelay: 250,
    });
}

console.log(galleryItems);
