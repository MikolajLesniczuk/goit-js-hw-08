import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const Gallery = document.querySelector('.gallery')



const createGallery = () => {
  
    let newGallery = [];

galleryItems.forEach((e ,i) =>{
const {preview , original , description} = galleryItems[i]

const li = document.createElement('li');
const a = document.createElement('a')
const img = document.createElement('img')

a.classList.add('gallery__item')
img.classList.add('gallery__image')

a.setAttribute('href' , original)
img.setAttribute('src', preview)
img.setAttribute('alt',description )

li.append(a)
a.append(img)

newGallery.push(li)


})
Gallery.append(...newGallery)

}


createGallery()

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'outside',
    captionDelay: 250,
  });

  const Event = (event) => {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG') {
      return;
    }

lightbox.open(event.target);

  }

Gallery.addEventListener("click",Event );



console.log(galleryItems);
