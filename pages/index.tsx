import { NextPage } from "next"
import { PropsWithChildren } from "react"

type Props = {
	hello: string
}

const Home: NextPage<PropsWithChildren<Props>> = (props) => {
	const { hello } = props
	return <div>{hello}</div>
}

export const getStaticProps = async () => {
	const data = []
	try {
		// get data from API
		const res = await fetch("https://api.example.com")
    data.push(res.json())
		// return props
	} catch (error) {
		console.error(error)
  }
  console.log({data})
	return {
		props: {
			hello: "Hello Static props",
		},
	}
}

export default Home
