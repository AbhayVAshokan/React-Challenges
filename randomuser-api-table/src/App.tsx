import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

// Interface for API response
interface APIResponse {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  dob: Date;
  email: string;
}

// Interface for table data
interface Data {
  name: string;
  gender: string;
  dob: Date;
  email: string;
}

const App: React.FC<{}> = () => {
  const [data, setData] = useState<Array<Data>>();

  // Populating data on first render
  useEffect(() => {
    axios.get("https://randomuser.me/api?results=500").then((res) => {
      setData(
        res.data.results.map((item: APIResponse) => ({
          name: `${item.name.title}. ${item.name.first} ${item.name.last}`,
          gender: item.gender,
          dob: item.dob,
          email: item.email,
        }))
      );
    });
  }, []);

  return (
    <div>
      {data?.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </div>
  );
};

export default App;
