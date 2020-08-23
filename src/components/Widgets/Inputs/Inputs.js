import React, {useEffect, useState} from 'react';

import s from './Input.module.scss';

export const Primary = ({
    placeholder = 'Enter...',
    value = '',
    onChange,
    children,
}) => {

    const [val, setVal] = useState('');

    return (
        <div className={s.primary}>
            <span className={s.primary_label}>
                <img
                 className={s.primary_label_img}
                 alt="Email"
                 src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/email.svg" 
                />
            </span>
            <input 
                className={s.primary_input}
                placeholder={placeholder}
                onChange={e=>setVal(e.target.value)}
                value={val}
            />
            <span className={s.primary_child}>
                {children}
            </span>
        </div>
    )
}