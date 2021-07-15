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
    console.log("calling onsubmit");
    addTodo(values.title, values.description);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="title" type="text" placeholder="Enter your title" />
        <ErrorMessage name="title" component="div" />
        <Field
          name="description"
          type="textarea"
          placeholder="Enter your description"
        />
        <button type="submit">Add Todo</button>
      </Form>
    </Formik>
  );
};

export default AddTodoBar;
