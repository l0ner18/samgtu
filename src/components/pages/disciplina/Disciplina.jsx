import React from 'react';
import s from './Disciplina.module.css'
import Charts from '../../charts/Chart';

const Disciplina = () => {
    return (
        <div className={s.main}>
            <p className={s.label}>Свод по дисциплинам</p>

            <div className='totalElements'>
                <div className="element">
                    <Charts/>
                </div>
            </div>
        </div>
    );
}

export default Disciplina;