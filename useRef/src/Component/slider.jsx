import React, { useRef } from 'react';

import "./style.css"


function slider() {
    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)

    function HandleFirst() {
        first.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    function HandleSecond() {
        second.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }
    function HandleThird() {
        third.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

  
    return (
        <>


        <div className='d-flex justify-content-center'>
                <ul style={{ width: 450 }} className=' overflow-auto'>
                    <li>
                        <img
                            src="https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/cat2-1024x676.jpg"
                            alt="Neo" onClick={HandleFirst}
                            ref={first} style={{ width: 300 }}

                        />
                    </li>
                    <li>
                        <img
                            src="https://www.cats.org.uk/media/13136/220325case013.jpg?width=500&height=333.49609375"
                            alt="Millie" onClick={HandleSecond}
                            ref={second} style={{ width: 300 }}


                        />
                    </li>
                    
                    <li>
                        <img
                            src="https://www.vetstreet.com/wp-content/uploads/2022/09/shutterstock_772334182.jpg"
                            alt="Bella" onClick={HandleThird}
                            ref={third} style={{ width: 300 }}

                        />
                    </li>
                </ul>
        </div>


           

        </>
    )
}

export default slider