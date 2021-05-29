import { Drawer, Menu } from 'antd';
import React, { Key, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
    isVisible: boolean
    closeSidebar(): void

}

function Sidebar({ isVisible, closeSidebar }: Props) {

    const [selected, setSelected] = useState<["Fundos" | "Companhias"]>(['Fundos'])
    return (
        <Drawer
            placement="right"
            closable={false}
            onClose={closeSidebar}
            visible={isVisible}
            getContainer={false}
            style={{ marginTop: '60px' }}
        >

            <Menu
                onClick={(e) => setSelected([e.key as "Fundos"|"Companhias"])}
                style={{
                    width: 256, position: "absolute",
                    left: 0
                }}
                selectedKeys={selected}
                mode="inline"
            >
                <Menu.Item key="Fundos"><Link to="fundos" onClick={closeSidebar}>Fundos de Investimento</Link></Menu.Item>
                <Menu.Item key="Companhias"><Link to="companhias" onClick={closeSidebar}>Companhias Abertas</Link></Menu.Item>
            </Menu>
        </Drawer>

    )
}

export default Sidebar
