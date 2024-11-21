import React, { useEffect } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../Assets/img/mariposa.png'
import { useState } from 'react';



export const Banner = () => {

  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const [text, setText] = useState('');
  const period = 2000;
  const [delta, setDelta] = React.useState(300 - Math.random() * 100);

  
  useEffect (( ) => {
    let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => {
        clearInterval(ticker);
    };

  })

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullTxt = toRotate[i];
    let updatedTxt = isDeleting ? fullTxt.substring(0, text.length - 1) : fullTxt.substring(0, text.length + 1);
    setText(updatedTxt);
    if( isDeleting ){
        setDelta(prevDelta => prevDelta / 2);
    }

    if(!isDeleting && text=== fullTxt){
        setDelta(period);
        setIsDeleting(true);
    }else if(isDeleting && text === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
}


let start = new Date().getTime();

const originPosition = { x: 0, y: 0 };

const last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition
}

const config = {
  starAnimationDuration: 1000,
  minimumTimeBetweenStars: 50,
  minimumDistanceBetweenStars: 25,
  glowDuration: 100,
  maximumGlowPointSpacing: 5,
  colors: ["249 146 253", "252 254 255"],
  sizes: ["1.2rem", "0.8rem", "0.4rem"],
  animations: ["fall-1", "fall-2", "fall-3"]
}

let count = 0;
  
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
      selectRandom = items => items[rand(0, items.length - 1)];

const withUnit = (value, unit) => `${value}${unit}`,
      px = value => withUnit(value, "px"),
      ms = value => withUnit(value, "ms");

const calcDistance = (a, b) => {
  const diffX = b.x - a.x,
        diffY = b.y - a.y;
  
  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
}

const calcElapsedTime = (start, end) => end - start;

const appendElement = element => document.body.appendChild(element),
      removeElement = (element, delay) => setTimeout(() => document.body.removeChild(element), delay);

const createStar = position => {
  const star = document.createElement("span"),
        color = selectRandom(config.colors);
  
  star.className = "star fa-solid fa-sparkle";
  
  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.starAnimationDuration = ms(config.starAnimationDuration);
  
  appendElement(star);

  removeElement(star, config.starAnimationDuration);
}

const createGlowPoint = position => {
  const glow = document.createElement("div");
  
  glow.className = "glow-point";
  
  glow.style.left = px(position.x);
  glow.style.top = px(position.y);
  
  appendElement(glow)
  
  removeElement(glow, config.glowDuration);
}

const determinePointQuantity = distance => Math.max(
  Math.floor(distance / config.maximumGlowPointSpacing),
  1
);

/* --  

The following is an explanation for the "createGlow" function below:

I didn't cover this in my video, but I ran into an issue where moving the mouse really quickly caused gaps in the glow effect. Kind of like this:

*   *       *       *    *      *    🖱️

instead of:

*************************************🖱️

To solve this I sort of "backfilled" some additional glow points by evenly spacing them in between the current point and the last one. I found this approach to be more visually pleasing than one glow point spanning the whole gap.

The "quantity" of points is based on the config property "maximumGlowPointSpacing".

My best explanation for why this is happening is due to the mousemove event only firing every so often. I also don't think this fix was totally necessary, but it annoyed me that it was happening so I took on the challenge of trying to fix it.

-- */
const createGlow = (last, current) => {
  const distance = calcDistance(last, current),
        quantity = determinePointQuantity(distance);
  
  const dx = (current.x - last.x) / quantity,
        dy = (current.y - last.y) / quantity;
  
  Array.from(Array(quantity)).forEach((_, index) => { 
    const x = last.x + dx * index, 
          y = last.y + dy * index;
    
    createGlowPoint({ x, y });
  });
}

const updateLastStar = position => {
  last.starTimestamp = new Date().getTime();

  last.starPosition = position;
}

const updateLastMousePosition = position => last.mousePosition = position;

const adjustLastMousePosition = position => {
  if(last.mousePosition.x === 0 && last.mousePosition.y === 0) {
    last.mousePosition = position;
  }
};

const handleOnMove = e => {
  const mousePosition = { x: e.clientX, y: e.clientY }
  
  adjustLastMousePosition(mousePosition);
  
  const now = new Date().getTime();
  const hasMovedFarEnough = calcDistance(last.starPosition, mousePosition) >= config.minimumDistanceBetweenStars;
  const hasBeenLongEnough = calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;
  
  if(hasMovedFarEnough || hasBeenLongEnough) {
    requestAnimationFrame(() => {
      createStar(mousePosition);
      updateLastStar(mousePosition);
    });
  }
  
  requestAnimationFrame(() => {
    createGlow(last.mousePosition, mousePosition);
  });
  
  updateLastMousePosition(mousePosition);
}

useEffect(() => {
  const handleMouseMove = e => handleOnMove(e);
  const handleTouchMove = e => handleOnMove(e.touches[0]);
  const handleMouseLeave = () => updateLastMousePosition(originPosition);

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('touchmove', handleTouchMove);
  document.body.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('touchmove', handleTouchMove);
    document.body.removeEventListener('mouseleave', handleMouseLeave);
  };
}, []);

  return (
    <section className='banner' id='home'>
        <Container>
            <Row className = "aling-items-center">
                <Col xs = {12} md = {7} xl = {7}  >
                    <span className='tagLine'> Welcome to my portfolio </span>
                    <h1>{`Hi! I'm Melissa`} <span className='wrap'>{text}</span></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </Col>

                <Col xs = {12} md = {5} xl = {5}>
                    <img src={headerImg} alt='Header Img'></img>
                </Col>

            </Row>
        </Container>

    </section>
  )
}


