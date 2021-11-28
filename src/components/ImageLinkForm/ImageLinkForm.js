import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <div className='f4 toCenter'>
                <div className='colorFont'> This Magic Brain will detect faces in your pictures. Give it a try! </div>
            </div>
            <div className='toCenter'>
                <div className='form toCenter pa4 br3 shadow-5'>
                    <input type='tex' className='f4 pa2 w-70 center' onChange={onInputChange} />
                    <button
                        className='w-30 grow f4 link ph3 pv dib white bg-red'
                        onClick={onSubmit}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    );
}
export default ImageLinkForm