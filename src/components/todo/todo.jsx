import { useEffect, useState } from "react";
import axios from "axios";

function Todo() {
  const [inputvalues, setInputValue] = useState({});
  const [todoValue, setTodoValueGet] = useState([]);
  const [editactive, setEditActive] = useState(false);
  const [ editValue , setEditValue] = useState({});
  console.log(editValue , "editValue")

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputvalues,
      [name]: value,
    });
  };

  const handleremove = async (e) => {
    await axios
      .get("http://127.0.0.1:8000/api/v1/todoget", {
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        setTodoValueGet(res?.data?.data);
      });
  };

  useEffect(async () => {
    handleremove();
  }, []);

  const handleSubmitValue = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://127.0.0.1:8000/api/v1/todoadd", {
          title: inputvalues?.title,
          description: inputvalues?.description,
        })
        .then((res) => console.log(res));
      handleremove();
    } catch {
      console.log("error");
    }
  };

  const handleRemove = async (value) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/v1/tododelete/${value?._id}`
      );
      handleremove();
    } catch {
      console.log("error");
    }
  };

  const handleEdit = async (e) => {
    const { name, value } = e.target;
    setEditValue({
      ...editValue,
      [name]: value,
    });
  }

  const handleEditValue = async (values) => {
    console.log(values , "edit value");
    setEditActive(true);
  };

  const handleSaveValue = async (values) => {
    console.log(values , "change value");
    setEditActive(false);

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

      <div>get todo value</div>

      <div>
        {todoValue?.length > 0 ? (
          todoValue?.map((todoValue) => {
            return (
              <>
                {" "}
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    padding: "15px",
                  }}
                >
                  <input  type="text" value={todoValue?.title} name="title" onChange={handleEdit} />
                  <input  type="text" value={todoValue?.description} name="description " onChange={handleEdit} />
                  {editactive === true ? (
                    <>
                      <button
                        type="submit"
                        onClick={() => handleSaveValue(todoValue)}
                      >
                        save
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        type="submit"
                        onClick={() => handleEditValue(todoValue)}
                      >
                        edit
                      </button>
                    </>
                  )}

                  <button
                    type="submit"
                    style={{
                      backgroundColor: "#ff3f3f",
                    }}
                    onClick={() => handleRemove(todoValue)}
                  >
                    remove
                  </button>
                </div>
              </>
            );
          })
        ) : (
          <>
            <h1>add todo here </h1>
          </>
        )}
      </div>
    </>
  );
}

export default Todo;
