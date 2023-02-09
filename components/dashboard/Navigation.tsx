import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"
import { CalendarIcon, FolderIcon, UserIcon } from "@heroicons/react/24/outline"

const links = [
	{
		href: "/dashboard",
		label: "Calendar",
		icon: <CalendarIcon className="h-6 w-6 mr-2" />,
	},
	{
		href: "/dashboard/meals",
		label: "Your meals",
		icon: <FolderIcon className="h-6 w-6 mr-2" />,
  },
  {
    href: "/dashboard/ingredients",
    label: "Ingredients",
    icon: <FolderIcon className="h-6 w-6 mr-2" />,
  },
	{
		href: "/dashboard/profile",
		label: "Your profile",
		icon: <UserIcon className="h-6 w-6 mr-2" />,
	},
]

const Navigation = () => {
	const router = useRouter()
	const { pathname } = router

	return (
		<nav>
			<ul>
				{links.map(({ href, label, icon }, index) => (
					<li key={index}>
						<Link
							className={`flex items-center px-10 border-l-4  py-6 text-md font-semibold transition-colors hover:bg-neutral-200 ${clsx(
								href === pathname ? "bg-neutral-200 text-stone-900 border-neutral-800" : "border-transparent"
							)}`}
							href={href}
						>
							<>
								{icon && icon}
								{label}
							</>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
