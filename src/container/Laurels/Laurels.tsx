import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import './Laurels.css';

type AwardCardProps ={
  award: {
    imgUrl: string,
    title: string,
    subtitle: string
  }
}
type LaurelsProps = {}

const AwardCard = (props: AwardCardProps) => {
  return (
    <div className='app__laurels_award-card'>
      <img src={props.award.imgUrl} alt='awards' />
      <div className='app__laurels_award-card_content'>
        <p className='p__cormorant' style={{ color: '#DCCA87' }}>{props.award.title}</p>
        <p className='p__opensans'>{props.award.subtitle}</p>

      </div>
    </div>
  )
}

const Laurels = (props: LaurelsProps) => {
  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className='app__wrapper_info'>
        <SubHeading title='Awards & recognition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>

        <div className='app__laurels_awards'>
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
        </div>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.laurels} alt='laurels_img' />
      </div>
    </div>
  )
}

export default Laurels