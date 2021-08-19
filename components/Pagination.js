function Pagination({ usersPerPage, totalUsers, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className=" w-20 mx-auto mt-2 p-2 ">
      <ul className="flex border-b justify-center ">
        {pageNumbers.map((number) => (
          <li key={number} className="-mb-px mr-1">
            <a
              href="#"
              onClick={() => paginate(number)}
              className="bg-white inline-block border-l border-t border-t py-2 px-4 px-4 text-blue-700 font-semibold cursor-pointer hover:bg-red-300 "
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
