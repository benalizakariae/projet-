import React from 'react';
import{images} from'../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="chef's word"/>
      <h1 className='headtext__cormorant'>what we belive in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote'/>
          <p className='p__opensans'>jvjeuhvuhe ahffjafjan azhfiauzhfoaf ozeifjaizekijfakenf azhfhahfjaznef aozjfazfjalkzjfkafj  azhfjazefjafkj auzyegfhahzfkjahf azhfjanfkja azhfkazjefhakjfn jazfjahfjakhfna akezhfjaf hazebfazef kjazhfekjaf</p>
        </div>
        <div className='app__chef-signe'>
          <p> zakaria ben ali</p>
          <p className='p__opensans'> chef & founder</p>
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
