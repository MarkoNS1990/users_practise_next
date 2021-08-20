import axios from "axios";
import { useEffect, useState } from "react";
import User from "../components/User";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

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
          <h2 className="text-3xl font-extrabold">{user.name}</h2>
          <Image src={user.image} height={300} width={300} />
        </>
      )}
      <Link href="/">Go back</Link>
    </div>
  );
};

export default userId;
