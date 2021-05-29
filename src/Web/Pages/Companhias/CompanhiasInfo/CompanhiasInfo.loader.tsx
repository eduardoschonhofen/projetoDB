import React, { useMemo } from 'react'
import beforeCompanhiasInfoLoad from '../../../../Store/beforeCompanhiaInfoLoad'
import CompanhiasInfoStore from '../../../../Store/companhiasInfoStore'

function CompanhiasInfoLoader() {
    const Page = useMemo(
        () =>
            React.lazy(async () => {
               // await beforeCompanhiasInfoLoad()
                return import('./CompanhiasInfo.page')
            }),
        []
    )

    return (
        <CompanhiasInfoStore.Provider>
            <Page />
        </CompanhiasInfoStore.Provider>
    )
}

export default CompanhiasInfoLoader
