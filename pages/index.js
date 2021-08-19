import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAddUser,
  fetchDeleteUser,
  fetchUsers,
} from "../redux/users/usersActions";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import Popup from "../components/Popup";
import { fetchSingleUser } from "../redux/user/userActions";
import axios from "axios";
import Pagination from "../components/Pagination";

export default function Home() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [showInput, setShowInput] = useState(false);
  const [name, setName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [pages, setPages] = useState();

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const onUserClick = (user) => {
    setShowModal(true);
    dispatch(fetchSingleUser(user));
  };

  const onAddUserClick = () => {
    setShowInput((input) => !input);
  };

  const addUser = () => {
    if (users) {
      const Ids = users.map((user) => user.id);
      const IdsSorted = Ids.sort((a, b) => a - b);
      dispatch(
        fetchAddUser({ name: name, id: IdsSorted[IdsSorted.length - 1] + 1 })
      );
    }

    setName("");
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Head>
        <title>Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex">
          <input
            type="number"
            placeholder="users per page"
            onChange={(e) => setPages(e.target.value)}
            value={pages}
            className="shadow border m-2 flex-grow text-gray appearance-none rounded border-gray-200 focus:border-purple-500 focus:bg-white outline-none"
          />
          <button
            onClick={() => setUsersPerPage(pages)}
            className="bg-blue-200 py-2 px-3 rounded-xl font-semibold text-red-800"
          >
            Set
          </button>
        </div>

        <table className="table-auto bg-red-200 w-200 ">
          <thead>
            <tr className="border-2">
              <th className="text-3xl">Users</th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            {users &&
              currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="bg-emerald-200 border-2 border-gray-300"
                >
                  <td className="font-semibold text-2xl px-6 py-4 whitespace-nowrap">
                    {user.name}
                  </td>
                  <td>
                    <PencilIcon
                      className="h-7 w-7 text-blue-500 cursor-pointer ml-2"
                      onClick={() => onUserClick(user)}
                    />
                  </td>
                  <td>
                    <TrashIcon
                      className="h-7 w-7 text-red-500 cursor-pointer mr-2"
                      onClick={() => dispatch(fetchDeleteUser(user))}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onAddUserClick}
        >
          {!showInput ? "Add user" : "Close"}
        </button>
        {showInput && (
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="mt-2 flex-grow bg-gray-200 appearance-none border-2 border-gray-200 rounded w-1/3 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            />
            <button
              className="ml-2 bg-gray-300 font-bold py-1 px-2 rounded-md"
              onClick={addUser}
            >
              Add
            </button>
          </div>
        )}
      </div>
      <Pagination
        totalUsers={users.length}
        usersPerPage={usersPerPage}
        paginate={paginate}
      />
      <Popup showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
