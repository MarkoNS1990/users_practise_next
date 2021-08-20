import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import MyCarousel from "../components/MyCarousel";

const userId = () => {
  const router = useRouter();
  const [user, setUser] = useState();

  const { userId } = router.query;
  console.log(userId);
  useEffect(() => {
    if (userId) {
      axios.get(`/api/users/${userId}`).then((res) => setUser(res.data.user));
    }
  }, [userId]);
  return (
    <div className="flex flex-col items-center justify-center">
      {user && (
        <>
          <h2 className="text-3xl font-extrabold mb-2">{user.name}</h2>
          <div>
            <MyCarousel />
          </div>
        </>
      )}
      <Link href="/">
        <a className="font-semibold text-red-900 mt-3">Go back</a>
      </Link>
    </div>
  );
};

export default userId;
