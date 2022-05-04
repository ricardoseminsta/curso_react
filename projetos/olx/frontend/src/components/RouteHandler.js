import react from 'react';
import { Route, Routes } from 'react-router-dom';

export default ({ chidren, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => chidren}
        />
    );
}