import getFundosInfo from "./getFundosInfo"

async function beforeFundosInfoLoad() {
	const promises: Promise<void>[] = [getFundosInfo()]


	await Promise.all(promises)
}

export default beforeFundosInfoLoad
