import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import {Header, StyledLynk, Nav} from './NavBar.styled'



export const NavBar = () => {
    return (
        <div>
            <Header>
                <Nav>
                    <StyledLynk to='/' end>
                        Home
                    </StyledLynk>
                    <StyledLynk to='/movies'>
                        Movies
                    </StyledLynk>
                </Nav>
            </Header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};