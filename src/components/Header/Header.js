import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { GiHamburgerMenu } from 'react-icons/gi';

import s from './Header.module.scss';
import { SecondaryButton, PrimaryButton } from '../Widgets/Buttons/Buttons';

const Header = () => {

    return(
        <header className={s.main}>
            <div className={s.main_partA}>
                <div className={s.main_partA_logo}>
                <img alt="OnJuno Logo"
                 src="https://juno-public.s3-us-west-1.amazonaws.com/on-juno.png"
                 srcSet="https://juno-public.s3-us-west-1.amazonaws.com/on-juno%402x.png, 
                 https://juno-public.s3-us-west-1.amazonaws.com/on-juno%403x.png"
                 className={s.main_partA_logo_img} 
                />
                </div>
                <nav className={s.main_partA_options}>
                    <span className={s.main_partA_options_choice}>
                        Home
                    </span>
                    <span className={s.main_partA_options_choice}>
                        Company
                        <RiArrowDropDownLine />
                    </span>
                    <span className={s.main_partA_options_choice}>
                        Learn
                        <RiArrowDropDownLine />
                    </span>
                    <span className={s.main_partA_options_choice}>
                        Legal
                        <RiArrowDropDownLine />
                    </span>
                </nav>
            </div>
            <div className={s.main_partB}>
                <div className={s.main_partB_container}>
                    <SecondaryButton 
                     text='Login'
                    />
                </div>
                <div className={s.main_partB_container}>
                    <PrimaryButton 
                     text='Signup'
                    />
                </div>
            </div>
            <div className={s.ham}>
                <GiHamburgerMenu color='#888' />
            </div>
            
        </header>
    )
};


export default Header;