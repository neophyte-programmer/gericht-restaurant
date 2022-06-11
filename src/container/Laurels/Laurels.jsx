import React from 'react';
import { SubHeading } from '../../components'
import { images, data } from '../../constants'
import './Laurels.css';

const AwardCard = ({award: { imgUrl, title, subtitle}}) => (
  <div className="app__laurels-awards-card">
    <img src={imgUrl} alt="award" />
    <div className="awards__card-content">
      <p className="p__cormorant" style={{ color: '#dcca87' }}>{title}</p>
      <p className="p__cormorant" >{subtitle}</p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='awards'>
    <div className="app__wrapper-info">
      <SubHeading title='Awards &amp; recognition' />
      <h1 className="headtext__cormorant">
        Our Laurels
      </h1>
      <div className="app__laurels-awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>
    <div className="app__wrapper-img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
