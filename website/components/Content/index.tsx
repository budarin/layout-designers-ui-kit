import React, { lazy, Suspense } from 'react';

import contentCSS from './index.css';
import useStyles from '../../hooks/useStyles';

interface IContentProps {
    page: () => Promise<{ default: React.ComponentType<any> }>;
}

const Content = (props: IContentProps) => {
    const styles = useStyles([contentCSS]);
    const Component = lazy(async () => props.page());

    return (
        <>
            <div className={styles.top_bar}>
                <svg className={styles.menu_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                    <path d="M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z" />
                </svg>
                <h3>Layout UI-Kit</h3>
            </div>

            <div className={styles.content}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                </Suspense>
            </div>
        </>
    );
};

export default Content;
