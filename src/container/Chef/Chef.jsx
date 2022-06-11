import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Chef.css'

const Chef = () => (
	<div className='app__bg app__wrapper section__padding'>
		<div className='app__wrapper-img app__wrapper-img-reverse app__chef'>
			<img src={images.chef} alt='Chef' />
		</div>
		<div className='app__wrapper-info'>
			<SubHeading title={"Chef's word"} />
			<h1 className='headtext__cormorant'>What we believe in</h1>
			<div className='app__chef-content'>
				<div className='app__chef-content_quote'>
					<img src={images.quote} alt='quote' />
					<p className='p__opensans'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
						auctor sit.
					</p>
				</div>
				<p className='p__opensans'>
					auctor sit iaculis in arcu. Vulputate nulla lobortis mauris
					eget sit. Nulla scelerisque scelerisque congue ac consequat,
					aliquam molestie lectus eu. Congue iaculis integer curabitur
					semper sit nunc.
				</p>
				<div className='app__chef-sign'>
					<p className=''>Kevin Luo</p>
					<p className='p__opensans'>Chef &amp; Founder</p>
					<img src={images.sign} alt='sign' />
				</div>
			</div>
		</div>
	</div>
)

export default Chef
