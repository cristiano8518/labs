import { useState, useEffect } from "react";

/*
useEffect explanation:
useEffect runs after render.
If dependency array contains userId, effect runs every time userId changes.
Cleanup function prevents memory leaks by aborting unfinished requests.
*/

// Shape of the fields we use from https://jsonplaceholder.typicode.com/users/:id
interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
}

// UserProfile Component
function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal: abortController.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data: User = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        const e = err as Error;
        if (e.name !== "AbortError") {
          setError(e.message);
          setLoading(false);
        }
      }
    };

    fetchUser();

    // Cleanup
    return () => {
      abortController.abort();
    };
  }, [userId]); // runs when userId changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ border: "1px solid gray", padding: "15px", margin: "10px" }}>
      {user && (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </>
      )}
    </div>
  );
}

// Parent Component
function UserApp() {
  const [userId, setUserId] = useState<number>(1);

  return (
    <div>
      <h1>User Profile Viewer</h1>

      <button onClick={() => setUserId(1)}>User 1</button>
      <button onClick={() => setUserId(2)}>User 2</button>
      <button onClick={() => setUserId(3)}>User 3</button>
      <button onClick={() => setUserId(Math.floor(Math.random() * 10) + 1)}>
        Random User
      </button>

      <UserProfile userId={userId} />
    </div>
  );
}

export default function App() {
  return <UserApp />;
}
