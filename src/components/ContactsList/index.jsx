import classNames from "classnames";
import { connect } from "react-redux";
import { deleteContact, updateContact } from "../../store/slices/contactsSlice";
import styles from "./ContactList.module.scss";

function ContactsList({ contacts, deleteContactById, updateContactById }) {
  const changeIsDone = (id, checked) => {
    updateContactById(id, { isDone: checked });
  };
  return (
    <ul className={styles.todoList}>
      {contacts.map(({ id, isDone, fullName, date }) => (
        <li key={id} className={styles.todoItem}>
          <div className={styles.listGroup}>
            {/* {JSON.stringify(date)}{" "} */}
            <label className={styles.checkboxContainer}>
              <input
                className={styles.checkbox}
                type="checkbox"
                checked={isDone}
                onChange={({ target: { checked } }) => {
                  changeIsDone(id, checked);
                }}
              />
              <div className={styles.background}></div>
              <div className={styles.circle}></div>
            </label>
            <span
              className={classNames(styles.todoItemText, {
                [styles.todoItemTextCompleted]:
                  isDone && isDone === true
              })}
            >
              {fullName}
            </span>
            <span>due - {date}</span>
            <button
              className={classNames(null, {
                [styles.removeActiveBtn]: isDone && isDone === true,
                [styles.removeDefaultBtn]: !isDone
              })}
              onClick={() => deleteContactById(id)}
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = ({ contactsList }) => contactsList;
const mapDispatchToProps = (dispatch) => ({
  deleteContactById: (id) => {
    dispatch(deleteContact(id));
  },
  updateContactById: (id, data) => dispatch(updateContact({ id, data })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
