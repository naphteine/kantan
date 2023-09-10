import { cookies } from "next/headers";
import Header from "../components/Header";

export default async function Home() {
  const cookie = cookies().get("pb_auth");

  let username = "";

  if (cookie) {
    const { model } = JSON.parse(cookie.value);
    username = model.username;
  }

  return (
    <>
      <Header />
      Username: {username}
      <h1>Home Page</h1>
    </>
  );
}

/*
const initialList = [
  {
    id: 1,
    text: "Mark me done!",
    done: false,
  },
];
*/

/*
  const [data, setData] = useState(initialList);
  const [inputData, setInputData] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setData([...data, { id: Math.random(), text: inputData, done: false }]);
    setInputData("");
  }

  function handleDelete(id: number) {
    const newList = data.filter((item) => item.id !== id);
    setData(newList);
  }
  */

/*
  return (
    <>
      <main className={styles.main}>
        <div className={styles.search}>
          <div className={styles.search_wrap}>
            <RiSearchLine className={styles.icon} />
            <input placeholder="Search for tasks" />
          </div>
        </div>

        <span onClick={() => setShowModal(true)} className={styles.new}></span>

        <ul className={styles.list}>
          {data.map((e) => {
            return (
              <li key={e.id} className={styles.item}>
                <label className={styles.container}>
                  {e.text}
                  <input type="checkbox" />
                  <span className={styles.checkmark}></span>
                </label>
                <div
                  className={styles.remove}
                  onClick={() => handleDelete(e.id)}
                >
                  <CiCircleRemove size={32} />
                </div>
              </li>
            );
          })}
        </ul>

        {showModal && (
          <Modal title="Add new task" onClose={() => setShowModal(false)}>
            <input
              type="text"
              value={inputData}
              onChange={(e) => {
                setInputData(e.currentTarget.value);
              }}
            ></input>
            <button onClick={handleClick}>Done</button>
          </Modal>
        )}
      </main>
    </>
  );
  */
