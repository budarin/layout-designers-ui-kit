import React, { lazy, Suspense } from 'react';

import contentCSS from './index.css';
import useStyles from '../../hooks/useStyles';

interface IContentProps {
    getPage: () => Promise<{ default: React.ComponentType<any> }>;
}

const loading = <div>Loading...</div>;

const Content = (props: IContentProps) => {
    const styles = useStyles([contentCSS]);
    const Component = lazy(async () => props.getPage());

    return (
        <>
            <div className={styles.top_bar}>
                <svg className={styles.menu_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                    <path d="M0 382.5h459v-51H0v51zM0 255h459v-51H0v51zM0 76.5v51h459v-51H0z" />
                </svg>
                <h3>Layout UI-Kit</h3>
            </div>

            <div className={styles.content}>
                <Suspense fallback={loading}>
                    <Component />
                </Suspense>
            </div>
        </>
    );
};

export default Content;
