import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import TableItem from "./components/TableItem";

// Interface for API response
interface APIResponse {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  dob: {
    date: string;
  };
  email: string;
  picture: {
    thumbnail: string;
  };
}

// Interface for table data
interface User {
  name: string;
  gender: string;
  dob: string;
  email: string;
  picture: string;
}

// Interface for sortConfig
interface SortConfig {
  name: Direction;
  gender: Direction;
  dob: Direction;
  email: Direction;
}

// Direction of arrow inside table header element
enum Direction {
  UP,
  DOWN,
  HIDDEN,
}

// Sort users according to the selected sort config
// @ts-ignore
const sortUsers: Array<User> = (users: Array<User>, sortConfig: SortConfig) => {
  // Sort by name
  if (sortConfig.name !== Direction.HIDDEN)
    return users.sort((user1: User, user2: User) => {
      return sortConfig.name === Direction.DOWN
        ? user1.name < user2.name
          ? -1
          : 1
        : user1.name > user2.name
        ? -1
        : 1;
    });
  // Sort by gender
  if (sortConfig.gender !== Direction.HIDDEN)
    return users.sort((user1: User, user2: User) => {
      return sortConfig.gender === Direction.DOWN
        ? user1.gender < user2.gender
          ? -1
          : 1
        : user1.gender > user2.gender
        ? -1
        : 1;
    });
  // Sort by email
  if (sortConfig.email !== Direction.HIDDEN)
    return users.sort((user1: User, user2: User) => {
      return sortConfig.email === Direction.DOWN
        ? user1.email < user2.email
          ? -1
          : 1
        : user1.email > user2.email
        ? -1
        : 1;
    });
  // Sort by dob
  if (sortConfig.dob !== Direction.HIDDEN)
    return users.sort((user1: User, user2: User) => {
      return sortConfig.dob === Direction.DOWN
        ? new Date(user1.dob) < new Date(user2.dob)
          ? -1
          : 1
        : new Date(user1.dob) > new Date(user2.dob)
        ? -1
        : 1;
    });
};

const App: React.FC<{}> = () => {
  // List of all users fetched by API
  const [users, setUsers] = useState<Array<User>>([]);

  // Table header items
  const headers = ["Name", "Gender", "DOB", "Email"];

  // Search item value
  const [value, setValue] = useState<string>("");

  // Function to perform filtering operation on search
  const onSearchItemChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (e) => {
    setValue(e.target.value);
  };

  // Config to sort table items
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    name: Direction.DOWN,
    gender: Direction.HIDDEN,
    dob: Direction.HIDDEN,
    email: Direction.HIDDEN,
  });

  // Function to return all users filtered by the entered value
  const filterUsers = (search: string) => {
    // @ts-ignore
    return sortUsers(
      users.filter((user) =>
        JSON.stringify(Object.values(user))
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
      sortConfig
    );
  };

  // Populating users on first render
  useEffect(() => {
    axios.get("https://randomuser.me/api?results=500").then((res) => {
      setUsers(
        res.data.results.map((item: APIResponse) => ({
          name: `${item.name.title}. ${item.name.first} ${item.name.last}`,
          gender: item.gender,
          dob: item.dob.date,
          email: item.email,
          picture: item.picture.thumbnail,
        }))
      );
    });
  }, []);

  // Return table header item
  const getTableHeaderItem = (title: string) => {
    // Key for sortConfig
    const headerKey = `${title.toLowerCase()}`;

    // @ts-ignore
    let direction = sortConfig[headerKey];

    const onClick = () => {
      if (direction === Direction.HIDDEN) direction = Direction.DOWN;
      else
        direction = direction === Direction.UP ? Direction.DOWN : Direction.UP;

      const config = {
        name: Direction.HIDDEN,
        gender: Direction.HIDDEN,
        dob: Direction.HIDDEN,
        email: Direction.HIDDEN,
      };

      if (headerKey === "name") config.name = direction;
      else if (headerKey === "email") config.email = direction;
      else if (headerKey === "dob") config.dob = direction;
      else config.gender = direction;

      setSortConfig({
        ...config,
      });
    };

    return (
      <th key={title} onClick={onClick}>
        <div className="flex items-center cursor-pointer py-3 px-10">
          <p
            className={[
              "font-bold",
              "transform",
              "duration-200",
              "hover:scale-125",
              "hover:text-black",
              direction !== Direction.HIDDEN ? "text-black" : "text-gray-500",
            ].join(" ")}
          >
            {title}
          </p>
          {direction === Direction.UP ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 11l5-5m0 0l5 5m-5-5v12"
              />
            </svg>
          ) : direction === Direction.DOWN ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 13l-5 5m0 0l-5-5m5 5V6"
              />
            </svg>
          ) : (
            <div />
          )}{" "}
        </div>
      </th>
    );
  };

  return (
    <div className="flex flex-col justify-center mx-20">
      <SearchBar
        onChange={onSearchItemChange}
        value={value}
        exportData={filterUsers(value)}
      />
      <table>
        <thead className="bg-gray-300 mb-5 rounded-full sticky top-20 z-10">
          {headers.map((header) => getTableHeaderItem(header))}
        </thead>
        <tbody>
          {filterUsers(value).map((user: User) => (
            <TableItem
              key={`${user.name}__${Math.random().toString().substr(2)}`}
              name={user.name}
              gender={user.gender}
              email={user.email}
              dob={new Date(user.dob)}
              picture={user.picture}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
