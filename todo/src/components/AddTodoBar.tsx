import { ErrorMessage, Field, Form, Formik } from "formik";

interface Props {
  addTodo: (title: string, description: string) => void;
}

interface FormInterface {
  title: string;
  description: string;
}

const AddTodoBar: React.FC<Props> = ({ addTodo }) => {
  // Initial values of the form
  const initialValues = {
    title: "",
    description: "",
  };

  // Form validation
  const validate = (values: FormInterface) => {
    if (!values.title) return { title: "Title is required" };
  };

  // Form submission
  const onSubmit = (
    values: FormInterface,
    { resetForm }: { resetForm: () => void }
  ) => {
    addTodo(values.title, values.description);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      className="sticky top-20 shadow-lg"
    >
      <Form autoComplete="off">
        <div className="flex my-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#BDBDBD"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <div className="w-full">
            <Field
              name="title"
              type="text"
              placeholder="What do you need to remember?"
              className="w-full font-semibold outline-none text-xl px-2 rounded-lg"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-xs text-red-500 px-2 font-semibold"
            />
          </div>
        </div>

        <div className="relative">
          <Field
            name="description"
            type="textarea"
            placeholder="Enter your description"
            className="bg-yellow-50 rounded-2xl p-2 w-full h-20 outline-none text-sm text-gray-700 font-medium shadow-lg"
          />
          <button
            type="submit"
            className="z-10 absolute bottom-0 right-0 py-1 px-2 rounded-md shadow-md text-white m-2 transition duration-200 hover:scale-125 bg-yellow-500 hover:bg-yellow-600 font-semibold text-sm"
          >
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default AddTodoBar;
