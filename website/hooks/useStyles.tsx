import React from 'react';

// UnionToIntersection does what is says, transforming A | B |C to A & B &C
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

// A[number] is a trick to get a union of all values of a tuple
const useStyles = <A extends ICSSModule[]>(css: A): UnionToIntersection<A[number]['locals']> => {
    React.useEffect(() => {
        css.forEach(item => {
            item.use();
        });

        return () => css.forEach(item => item.unuse());
    }, []);

    return css.reduce((acc: object, item) => (acc = { ...acc, ...item.locals }), {}) as any;
};

export default useStyles;
