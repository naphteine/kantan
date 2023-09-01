import Header from "../../components/Header";

export default function New() {
  return (
    <>
      <Header />
      <h1>Add New</h1>
      <input placeholder="task name" type="text" />
      <button>Add</button>
    </>
  );
}
