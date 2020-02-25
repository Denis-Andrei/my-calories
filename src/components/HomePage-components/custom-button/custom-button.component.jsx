import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({...props})=>(
    <button className={`custom-button 
                        ${props.green ? 'custom-button--green' : '' }
                        ${props.greenDarker ? 'custom-button--green-darker': ''}
                        ${props.blue ? 'custom-button--blue': ''}
                        ${props.orange ? 'custom-button--orange': ''}
                        `}>{props.name}</button>
)

export default CustomButton;