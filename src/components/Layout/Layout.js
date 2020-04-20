import React from 'react';
import Aux from '../../hoc/Auxillary/Aux';
import Styles from './Layout.module.css'
const Layout = (props) =>{
    
        return (
            <Aux>
            <div>Toolbar,SideDrawer,Backdrop</div>
            <main className = {Styles.content}>
                {props.children}
            </main>
        </Aux>
        );
}

export default Layout;