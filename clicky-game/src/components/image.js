import React from 'react';
import './image.css';

function Image(props) {
	return (
		<span>
			<img src={props.src} alt={props.alt} id={props.id} key={props.id} onClick={() => props.clickme(props.id)} />
		</span>
	);
}

export default Image;