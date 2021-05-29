import React from 'react'
import { AppTitle, Header } from './style'
import {
    DollarCircleOutlined as Logo,
    MenuOutlined
} from '@ant-design/icons';


type Props = {
    openSidebar(): void
}

function AppHeader({openSidebar}:Props) {
    return (
        <Header>
            <Logo style={{ fontSize: "38px", marginLeft: "11px", marginTop: "11px" }} />
            <AppTitle>
                Análise de Investimentos
            </AppTitle>
            <MenuOutlined style={{ fontSize: "38px", marginLeft: "11px", marginTop: "11px",position:"absolute",right:".75rem" }} onClick = {openSidebar}></MenuOutlined>
        </Header>
    )
}

export default AppHeader
