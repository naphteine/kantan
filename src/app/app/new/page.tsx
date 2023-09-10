import Header from "../../../components/Header";
import { newTask } from "../../actions";
export default function New() {
  return (
    <>
      <Header />
      <h1>Add New</h1>

      <form action={newTask}>
        <input placeholder="task name" name="task" type="text" />
        <button>Add</button>
      </form>
    </>
  );
}
