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
