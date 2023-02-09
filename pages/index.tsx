import { NextPage } from "next"
import { PropsWithChildren } from "react"

type Props = {
	hello: string
}

const Home: NextPage<PropsWithChildren<Props>> = (props) => {
	const { hello } = props
	return <div>{hello}</div>
}



export default Home
