import classNames from "classnames";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { connect } from "react-redux";
import { CONTACT_VALIDATION_SCHEMA } from "../../utils/validationSchema";
import { createContact } from "../../store/slices/contactsSlice";
import styles from "./TodoForm.module.scss";

function ContactsForm({ createNewContact }) {
  const initialValue = { fullName: "", date: "" };
  const submitHandler = (values, { resetForm }) => {
    createNewContact(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={submitHandler}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        const toDoListHead = classNames(styles.input, {
          [styles.valid]:
            formikProps.touched.fullName && !formikProps.errors.fullName,
          [styles.invalid]:
            formikProps.touched.fullName && formikProps.errors.fullName,
        });
        return (
          <Form className={styles.toDoForm}>
            <label>
              Task:{" "}
              <Field className={toDoListHead}
                name="fullName"
                type="text"
                placeholder="Enter Your Name"
              />
            </label>
            <button type="submit">Add</button>
            <ErrorMessage
              name="fullName"
              component="div"
              className={styles.errorDiv}
            />
            <Field name="date" type="date"></Field>
            <ErrorMessage component="div" name="date" className={styles.errorDiv} />
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createNewContact: (data) => {
    dispatch(createContact(data));
  },
});

export default connect(null, mapDispatchToProps)(ContactsForm);
