import React from 'react';
import './Chef.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

type Props = {}

const Chef = (props: Props) => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef" />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word" />
        <h1 className='headtext__cormorant' >What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt='quote' />
            <p className='p__opensans'>Lorem ipsum dolor skit amet consectetur adipisicing elit.</p>
          </div>

          <p className='p__opensans'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil eius, error excepturi animi quibusdam qui? Maxime alias laudantium vero accusantium, totam, praesentium unde inventore et possimus amet iure dolor pariatur?</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt='chef-signature' />
        </div>
      </div>

    </div>
  )
}

export default Chef