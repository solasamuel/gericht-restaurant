import React, { useRef } from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Gallery.css';

type Props = {}

const Gallery = (props: Props) => {

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: string) => {
    const { current } = scrollRef;

    if (current) {
      if (direction === 'left') {
        current.scrollLeft -= 300;
      } else {
        current.scrollLeft += 300;
      }
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram" />
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorem, aut voluptatum optio nemo quaerat rerum quasi expedita assumenda similique. Et harum unde expedita numquam facere, soluta sed cum fugiat.</p>
        <button type="button" className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => {
            return (
              <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
                <img src={image} alt='gallery_image' />
                <BsInstagram className='gallery__image-icon' />
              </div>
            )
          })}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>

      </div>

    </div>
  )
}

export default Gallery