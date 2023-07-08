import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import Modal from "../components/Modal";

const inter = Inter({ subsets: ["latin"] });

const initialList = [
  {
    id: 1,
    text: "Mark me done!",
    done: false,
  },
];

export default function Home() {
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

  return (
    <>
      <Head>
        <title>Kantan! Task and Time Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.search}>
          <div className={styles.search_wrap}>
            <RiSearchLine className={styles.icon} />
            <input placeholder="Search for tasks" />
          </div>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <label className={styles.container}>
              Keman çal
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
          <li className={styles.item}>
            <label className={styles.container}>
              Kantan kodla
              <input type="checkbox" />
              <span className={styles.checkmark}></span>
            </label>
          </li>
        </ul>

        <span onClick={() => setShowModal(true)} className={styles.new}></span>

        {showModal && (
          <Modal title="sex" onClose={() => setShowModal(false)}>
            Hello
          </Modal>
        )}
        {/* <h2>New To-do</h2>
        <input
          type="text"
          value={inputData}
          onChange={(e) => {
            setInputData(e.currentTarget.value);
          }}
        ></input>
        <button onClick={handleClick}>Add new to-do</button>

        <hr />

        <h2>To-do List</h2>
        <ul>
          {data.map((e) => {
            return (
              <li key={e.id}>
                {e.text} <button onClick={() => handleDelete(e.id)}>X</button>
              </li>
            );
          })}
        </ul> */}
      </main>
    </>
  );
}
