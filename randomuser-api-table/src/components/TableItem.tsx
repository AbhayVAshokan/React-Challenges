interface Props {
  name: string;
  gender: string;
  dob: Date;
  email: string;
  picture: string;
}

// Format date to Month (long) date (numeric), year (long) format
const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const TableItem: React.FC<Props> = ({ name, gender, dob, email, picture }) => {
  return (
    <tr className="cursor-pointer transform duration-200 hover:bg-gray-100 hover:scale-105">
      <td className="p-2">
        <div className="flex items-center">
          <img
            src={picture}
            alt={name}
            className="h-10 w-12 rounded-full py-1 px-2"
          />{" "}
          <p>{name}</p>
        </div>
      </td>
      <td className="p-2">{gender}</td>
      <td className="p-2">{getFormattedDate(dob)}</td>
      <td className="p-2">{email}</td>
    </tr>
  );
};

export default TableItem;
