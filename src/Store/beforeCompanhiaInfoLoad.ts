import getCompanhiasInfo from "./getCompanhiasInfo"

async function beforeCompanhiasInfoLoad() {
	const promises: Promise<void>[] = [getCompanhiasInfo()]


	await Promise.all(promises)
}

export default beforeCompanhiasInfoLoad
