import { useInfiniteQuery } from "@tanstack/react-query";

type User = {
  name: string;
  age: number;
};

export function Infinite() {
  const users: User[] = [
    { name: "felipe", age: 23 },
    { name: "brian", age: 21 },
    { name: "jef", age: 28 },
  ];

  const fetchProjects = () => {};
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<User[]>({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    initialPageParam: 0,
    initialData: users,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  return (
    <div>
      {data.map((user, index) => (
        <div key={index}>
          Name: <p>{user.name}</p>
          Age: <p>{user.age}</p>
        </div>
      ))}
    </div>
  );
}
