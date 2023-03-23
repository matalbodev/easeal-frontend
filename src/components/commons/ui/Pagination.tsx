import { useRouter } from "next/router";
import clsx from "clsx";

type PropsTypes = {
  total: number;
};

const UIPagination = (props: PropsTypes) => {
  const pages = [];

  const router = useRouter();

  const { total } = props;

  const handleChangePage = (i: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: i,
      },
    });
  };

  const activePage = Number(router.query.page) || 0;

  for (let i = 0; i < props.total; i++) {
    pages.push(
      <button
        type="button"
        key={`page-${i}`}
        className={clsx(
          "rounded-md border border-gray-300   px-3 py-2 text-sm font-medium",
          i === activePage
            ? "bg-blue-500 text-white"
            : "bg-white text-gray-700 hover:bg-gray-50"
        )}
        onClick={() => handleChangePage(i)}
      >
        {i + 1}
      </button>
    );
  }
  return total > 1 ? (
    <div className="flex items-center space-x-3 py-6"> {pages}</div>
  ) : null;
};

export default UIPagination;
