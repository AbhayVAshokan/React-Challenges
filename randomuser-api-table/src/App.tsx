import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
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
}

// Interface for table data
interface Data {
  name: string;
  gender: string;
  dob: string;
  email: string;
}

// Direction of arrow inside table header element
enum Direction {
  UP,
  DOWN,
  HIDDEN,
}

// Return table header item
const getTableHeaderItem = (title: string, direction = Direction.HIDDEN) => {
  return (
    <th key={title}>
      <div className="flex">
        <p>{title}</p>
        {Direction.UP ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        ) : Direction.DOWN ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

const App: React.FC<{}> = () => {
  // List of all users fetched by API
  const [users, setUsers] = useState<Array<Data>>([]);

  // Table header items
  const headers = ["Name", "Gender", "Email", "DOB"];

  // Search item value
  const [value, setValue] = useState<string>("");

  // Function to perform filtering operation on search
  const onSearchItemChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (e) => {
    setValue(e.target.value);
  };

  // Function to return all users filtered by the entered value
  const filterUsers = (search: string) => {
    return users.filter((user) =>
      JSON.stringify(Object.values(user))
        .toLowerCase()
        .includes(search.toLowerCase())
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
        }))
      );
    });
  }, []);

  return (
    <>
      <SearchBar onChange={onSearchItemChange} value={value} />
      <table>
        <thead>
          {headers.map((header) => getTableHeaderItem(header, Direction.DOWN))}
        </thead>
        <tbody>
          {filterUsers(value).map((user) => (
            <TableItem
              key={`${user.name}__${Math.random().toString().substr(2)}`}
              name={user.name}
              gender={user.gender}
              email={user.email}
              dob={new Date(user.dob)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
