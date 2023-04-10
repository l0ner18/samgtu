import React from 'react';
import s from './Menu.module.css'

const Menu = () => {

    const links = [
        { url: '/profil', title: 'Свод по профилям' },
        { url: '/disciplina', title: 'Свод по дисциплинам' }
    ]

    return (
        <div className={s.mainMenu}>
            <ul class="">
                {
                    links.map((link) => (
                        <li class="mr-4 mb-4"><a href={link.url}>{link.title}</a></li>
                    ))
                }

            </ul>
        </div>
    );
}

export default Menu;
