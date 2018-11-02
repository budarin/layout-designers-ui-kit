// @ts-ignore
import { useEffect } from 'react';

const useStyles = <T extends ICSSModule>(css: T): T['locals'] => {
    useEffect(() => {
        css.use();

        return () => css.unuse();
    }, []);

    return css.locals;
};

export default useStyles;
