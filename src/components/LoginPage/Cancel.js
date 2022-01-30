import React from 'react';
import profile from '../../img/login/profile.png';

function Cancel(){
	return (
		<div>
			<h3 syle={{padding:'20px'}}>If you decide Netflix isn't for you - no problem. No commitment. Cancel online anytime.</h3>
			<a className="button caps cta-btn">watch free for 30 days</a>
			<img style={{width:'50vw'}} src={profile} />
		</div>
		)
};

export default Cancel;