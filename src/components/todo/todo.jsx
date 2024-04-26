import { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [inputvalues, setInputValue] = useState("");
  const [todoValue, setTodoValueGet] = useState([]);
  console.log(todoValue, "todoValue");
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputvalues,
      [name]: value,
    });
  };

  useEffect(async () => {
    await axios
      .get("http://127.0.0.1:8000/api/v1/todoget", {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        setTodoValueGet(res?.data);
      });
  }, []);

  const handleSubmitValue = async (e) => {
    e.preventDefault();
    const userData = {
      email: inputvalues.email,
      password: inputvalues.password,
    };
    axios
      .post("http://127.0.0.1:8000/api/v1/todoadd", {
        userData,
      })
      .then((res) => console.log(res));
  };

  return (
    <>
      <div>todo app</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "15px",
        }}
      >
        <input
          name="title"
          type="text"
          placeholder="add title"
          onChange={handleInputValue}
        />
        <input
          name="description"
          type="text"
          placeholder="add description"
          onChange={handleInputValue}
        />

        <button type="submit" onClick={handleSubmitValue}>
          add todo
        </button>
      </div>
      {/* {todoValue?.map((item, index) => {
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "15px",
          }}
        >
          <input
            name="title"
            type="text"
            placeholder="add title"
            value={item?.title}
            onChange={handleInputValue}
          />
          <input
            name="description"
            type="text"
            placeholder="add description"
            value={item?.description}
            onChange={handleInputValue}
          />

          <button type="submit" onClick={handleSubmitValue}>
            remove
          </button>
        </div>;
      })} */}
    </>
  );
}

export default Todo;
