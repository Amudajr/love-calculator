import React from 'react'
import Calc from './Calc';

export default class Logic extends React.Component{

	constructor(){
		super();
		this.names=["Your love burns as hot as the sun, blazing through the vastness of space, and searing itself into your being.", 
        "There's probably something there. Just make sure your presence is known so your feelings don&#39t get trampled like a 4'8 NBA player.",
         'Your love is comparable to rush hour traffic. Slow and frustrating, but possible to navigate through persistence and sheer force of will.', 
         "Good enough. Might as well check love off your list of things society believes you should've accomplished by now.",
        "Your love is like that which a parent with a newborn baby feels for sleep – distant and beyond consideration.",
        "Sorry, but your love is as likely to bear fruit as a mango tree planted on an Antarctic glacier.",
        "Love like this can be seen in the eyes of a dog wanting to continue playing fetch with its exhausted owner – longing, yet not currently viable.",
        "This level of love is equivalent to a cat's love of boxes. It may not be immediately evident, but take a look in the box and you might just find something ready to jump out at you.",
        "Your love is as strong as that between an owner and their pet! Unyielding in its loyalty and comfort, albeit with less than optimal odors",
        "Your love is as strong as the love between most children and their vegetables – insubstantial.",
        "Your love is like that which a parent with a newborn baby feels for sleep – distant and beyond consideration.",
        "We found truly amazing connections between you",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. You guys are blessed with both!!",
        "To be brave is to love unconditionally without expecting anything in return. You guys need to put a little effort in your relation. The nature will conspire, then!!",
        "You look at each other and see the rest of your life in each others eyes. A God given blessing!!",
        "You both are two people in love, alone, isolated from the world, that’s beautiful.",
        "You guys would rather spend a lifetime with each other than face all the ages of this world alone.",
        "For you guys, one’s heart is, and always will be for the other."
        ];
		this.state = {
			name:'',
		}
        this.myRef = React.createRef();
	}

	shuffle = () => {
		const i = Math.floor(Math.random() * this.names.length);
		this.setState({ name: this.names[i]});
	}

	render(){
		return(
			<div>
                <Calc onCheckclick={() => this.shuffle()} name={this.state.name}/>
			</div>
		)
	}
}

