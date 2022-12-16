import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id="about">
    <div className='app__aboutus-overlay flex__center '>
      <img src={images.G} alt="g"/>
    </div>
    <div className='app__aboutus-content flex__center'>
    <div className='app__aboutus-content_about'>
    <h1 className='headtext__cormorant'>About us</h1>
    <img src={images.spoon} alt="about_spoon" className='spoon__img' />
   <p className='p__opensans'> about us narrr immpo kololol hamamama maroc hermano test nav js react mpmpm</p>
   <button type='button' className='custom__button'>know more</button>
    </div>
    <div className='app__aboutus-content_knife flex__center'>
      <img src={images.knife} alt='knifee' />
    </div>
    <div className='app__aboutus-content_history'>
    <h1 className='headtext__cormorant'>history</h1>
    <img src={images.spoon} alt="about_spoon" className='spoon__img' />
   <p className='p__opensans'> about us narrr immpo kololol hamamama maroc hermano test nav js react mpmpm</p>
   <button type='button' className='custom__button'>know more</button>
    </div>
    </div>
  </div>
);

export default AboutUs;
