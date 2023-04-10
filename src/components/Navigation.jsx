import React from 'react';
import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={s.mainNav}>
            <h2 class="text-lg font-bold">СамГТУ</h2>

            <div className={s.listContact}>
                <p style={{marginRight: '20px'}}>О нас</p>
                <p>Контакты</p>
            </div>
        </nav>
    );
}

export default Navigation;