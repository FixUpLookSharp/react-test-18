import React from 'react';

const AppHeader = () => {
    const links = ['База знаний', 'Рад', 'Мои закупки', 'Всякое разное'];

    return (
        <div className='row'>
            <div className='col-md-12 bg-light'>
               <ul className='d-flex list-unstyled'>
                   {links.map((link) => <li key={link} className='p-lg-2'>{ link }</li>)}
               </ul>
            </div>
        </div>
    );
};

export default AppHeader;