import React from 'react'


const Frontend = () => {
  return (
    <div className='skills__content'>
        <h3 className='skills__title'>Frontend developer</h3>

        <div className='skills__box'>
            <div className='skills__group'>
                <div className='skills__data '>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>HTML</h3>
                    <span className='skills__level'>Advanced</span>

                </div>
            </div> 
            <div className='skills__data '>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>CSS</h3>
                    <span className='skills__level'>Advanced</span>

                </div>
            </div> 
            <div className='skills__data '>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>JavaScript</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div>  
            {/* <div className='skills__data '>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>Nextjs</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div>           */}
            </div>
            <div className='skills__group'>
                <div className='skills__data '>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>Flutter</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div> 
            {/* <div className='skills__data '>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>SASS</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div>  */}
            <div className='skills__data '>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>Reactjs</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div>  
            <div className='skills__data '>
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className='skills__name'>Bootstrap</h3>
                    <span className='skills__level'>Intermediate</span>
                </div>
            </div>           
            </div>
        </div>
    </div>
  )
}
export default Frontend