import React from 'react';
import './HealthFacts.css';

function HealthFacts(){

const HealthFacts = {

laughing: {
image:'./images/laughter .png',
facts: ['Laughing is good for the heart and can increase blood flow by 20 percent.',
'Laughter can increase your overall sense of well-being. Doctors have found that people who have a positive outlook on life tend to fight diseases better than people who tend to be more negative. So smile, laugh, and live longer!',
'Laughing can help you stay safe from viruses by improving your immune system. Laughing releases more anti-infection antibodies to help protect your body from infection.',
'Laughing helps lighten your mood. It can lessen chronic depression and anxiety as well as make it easier to cope with challenging situations.']
},
brainBoost: {
image:'./images/brainboost.png',
facts: ['Learning a new language or playing a musical instrument gives your brain a boost.',
'The Centers for Disease Prevention and ControlTrusted Source notes that learning new dance moves can increase your brain’s processing speed and memory. In other words, bust a move on the dance floor and your brain will thank you.',
'Daily meditation can calm your body, slow your breathing, and reduce stress and anxiety.']
},
rosemary: {
image: './images/rosemary.png',
facts: ['Smelling rosemary may increase alertness and improve memory so catch a whiff before a test or important meeting.',
'The nutrients in rosemary help protect skin cells from damage often caused by the sun and free radicals.',
'Rosemary oil has been known to promote hair growth, prevent baldness, slow greying, treat dandruff and a dry scalp.',
'Rosemary is often used for digestion problems, including heartburn, intestinal gas, liver and gallbladder complaints, and loss of appetite.']
}
};


const images = [];

for (const HealthFact in HealthFacts) {
images.push(
<img
key = {HealthFact}
className = 'HealthFact'
alt = {HealthFact}
src={HealthFacts[HealthFact].image}
role = 'button'
onClick={displayFact}
width={200}
height={200}
/>
)
}

function displayFact(e) {
const selectedImage = e.target.alt;
const imageInfo = HealthFacts[selectedImage];
const optionIndex = Math.floor(Math.random() * imageInfo.facts.length);

const funFact = imageInfo.facts[optionIndex];
document.getElementById('fact').innerHTML = funFact;
}

return (

   

    <body>
    <div className="trainingPage">
    <div className="headerBackground">
    <h1 className="header">TRAINING ZONE</h1>
    <p className="trainingIntro">Here you will find the details of relevant training days all Bicomass Health staff memebers are required to attend.
    For further information about the training or anything else, please email the team at info@bicomasshealth.com</p></div>
    
    <div className='HealthFacts'>
    <h3>#HEALTHFACTS</h3>;
    <p className='healthfact' id='fact'></p>
    {images}
    </div>
    
    <section className="textbackground">
    <br/><h2>SCOPE</h2>
    <p className='Health__facts__paragraph'>For hundreds of years, clinicians have sought to make healthcare
    more effective and accessible. Recently, health professionals have
    begun to learn about formal methods to improve quality. This
    evidence scan summarises research about the types of training
    available and its impacts.</p>
    <h2>PURPOSE</h2>
    <p className='Health__facts__paragraph'>‘Not all changes are improvements but all
    improvement involves change. Changing
    the systems that deliver care has thus
    become the cornerstone of the movement
    that is now referred to as medical quality
    improvement.’</p>
    <h2>TRAINING DATES</h2>
    <p className='Health__facts__paragraph'>Training will be held over Zoom.
    26th November 2021 and 29th November 2021
    Zoom link will be sent via email closer to time</p>
    </section>
    </div>
    </body>
    );
    
    }
    
    export default HealthFacts;