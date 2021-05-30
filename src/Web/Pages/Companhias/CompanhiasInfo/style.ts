import { Card, DatePicker, Input } from 'antd'
import styled from 'styled-components'

export const PageContainer = styled(Card)`
	width:85%;
	margin: auto;
`

export const SelectCompanhiaContainer = styled.div`
	margin-bottom:20px;
`


export const ContainerInfo = styled.div`
	margin-bottom:20px;
`

export const Filters = styled.div`
	display:flex;
	flex-direction:row;
	margin-bottom:10px;
`

export const WidthInput = styled(Input)`
	width:30%;
	margin-right:15px;
`


export const WidthDatePicker = styled(DatePicker)`
	width:30%;
`