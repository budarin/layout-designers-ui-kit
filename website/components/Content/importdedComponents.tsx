import React, { lazy, Suspense } from 'react';

// @ts-ignore
const OtherComponent = lazy(async () => {
    return await import(/* webpackChunkName: "Button" */ '../../../components/Button');
});

function MyComponent() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
        </Suspense>
    );
}

// export default MyComponent;
export default MyComponent;
