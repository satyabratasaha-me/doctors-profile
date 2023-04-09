import React from 'react';
import ReactDOM from 'react-dom/client';
import './AutoSlider.css';
import slides from './data'

const AutoSldier = () => {
    const [index, setIndex] = React.useState(0);
    const delay = 2500;

    React.useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
      }, [index]);


    return(
        <div className='slideshow'>
            <div 
                className='slideshowSlider'
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
            {
                slides.map((obj,index) =>{
                    return (
                        <img key={index} className='slide' src={obj.image}></img>
                    )
                } )
            }
            </div>
            <div className='slideShowDots'>
                {
                    slides.map((_, i) => {
                        return(
                        <div 
                            key={i} 
                            className = 'slideshowDot'
                            // className={`slideshowDot${index === i ? " active" : ""}`}
                        >
                        </div>
                        )
                    })
                }

            </div>
        </div>
    )
    
}

export default AutoSldier;


// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react