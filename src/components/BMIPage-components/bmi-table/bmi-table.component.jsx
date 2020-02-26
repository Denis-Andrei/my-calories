import React from 'react';
import './bmi-table.styles.scss';




const BMITable = ({...props}) => {

    return(
        <div className="bmi-table">
            <table className='bmi-table__table'>
                <caption className='bmi-table__caption'>{props.name}</caption>
                <tr>
                    <th>CATEGORY</th>
                    <th>BMI range ( kg/m&#178; )</th>
                </tr>
                <tr>
                    <td>Thiness</td>
                    <td>&#60; 16</td>
                </tr>
                <tr>
                    <td>Normal</td>
                    <td>18.5 - 25</td>
                </tr>
                <tr>
                    <td>Overweight</td>
                    <td>25 - 40</td>
                </tr>
            </table>
        </div>
    )
}

export default BMITable;