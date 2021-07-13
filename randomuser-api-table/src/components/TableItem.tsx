interface Props {
  name: string;
  gender: string;
  dob: Date;
  email: string;
}

// Format date to Month (long) date (numeric), year (long) format
const getFormattedDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const TableItem: React.FC<Props> = ({ name, gender, dob, email }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{gender}</td>
      <td>{getFormattedDate(dob)}</td>
      <td>{email}</td>
    </tr>
  );
};

export default TableItem;
