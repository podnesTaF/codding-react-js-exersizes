import React from 'react';
import './NavBar.scss';
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {Layout, Menu, Row} from 'antd';

const NavBar = () => {
    const {user, isAuth} = useTypedSelector(state => state.auth);
    const {logout} = useActions();
    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            {user.username}
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>

                            <Menu.Item
                                onClick={logout}
                                key={1}
                            >
                                Logout
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Link to='/login'>
                            <Menu.Item
                                key={1}
                            >
                                Login
                            </Menu.Item>
                        </Link>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default NavBar;