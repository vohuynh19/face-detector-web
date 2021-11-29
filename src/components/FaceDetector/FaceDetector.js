import React from 'react';
import './FaceDetector.css'
const FaceDetector = ({ imgUrl, rounding }) => {
    return (
        <div >
            <div className='center pa3'>
                <div className='absolute'>
                    {
                        imgUrl === '' ?
                            <div></div>
                            : <div>
                                <img id='faceImg' alt='facedetector' src={imgUrl} width='600px' height='auto' />
                                <div className='bounding-box' style={{ top: rounding.top, right: rounding.right, bottom: rounding.bottom, left: rounding.left }}></div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}
export default FaceDetector