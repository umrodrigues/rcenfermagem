import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { IFooter } from '../../types/footer/Footer';
import Accordion from './fragments/accordion-footer/accordion';
import { SocialMedia } from '../social-media/social-media';
import { Spacer } from '../spacer/spacer';
import { HorizontalSeparator } from '../separator/horizontal-separator';



// TODO: add quick links
export const Footer: React.FC<IFooter> = ({ developer, links }) => {
    
    return (
        <footer className={styles.footer}>
        <Spacer spacing={'2xl'} desktopSpacing={'2xl'} />
            <div className={styles.links}>
                {links.map((group, index) => (
                    <div key={index} className={styles.linkGroup}>
                        <h4>{group.title}</h4>
                        <ul>
                            {group.items.map((item, idx) => (
                                <li key={idx}>
                                    <Link href={item.url} passHref>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={styles.accordion}>
                {links.map((group, index) => (
                    <Accordion 
                        key={index} 
                        title={group.title} 
                        links={group.items.map(item => ({
                            href: item.url,
                            label: item.text
                        }))}
                        type='footer'
                    />
                ))}
                </div>
                <Spacer spacing={'l'} desktopSpacing={'l'} />
                <HorizontalSeparator className={styles.horizontalSeparator}/>
                <Spacer spacing={'l'} desktopSpacing={'l'} />
                <SocialMedia />
            <div className={styles.developer}>
                <div>
                    Desenvolvido por <a href='https://www.lunaristech.com.br/'>{developer}</a>
                </div> © Todos os direitos reservados.
            </div>
        </footer>
    );
};
