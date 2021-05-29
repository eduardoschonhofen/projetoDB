import React, { useMemo } from 'react'
import beforeFundosInfoLoad from '../../../../Store/beforeFundoInfoLoad'
import FundosInfoStore from '../../../../Store/fundosInfoStore'

function FundosInfoLoader() {
    const Page = useMemo(
        () =>
            React.lazy(async () => {
               // await beforeFundosInfoLoad()
                return import('./FundosInfo.page')
            }),
        []
    )

    return (
        <FundosInfoStore.Provider>
            <Page />
        </FundosInfoStore.Provider>
    )
}

export default FundosInfoLoader
