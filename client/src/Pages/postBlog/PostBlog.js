import { useState } from "react";

const AddUser = () => {
  const [data, setData] = useState({
    tit: "",
    message: "",
    image: "",
  });
  const handleChange = (name, message, tit) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value, [message]: value, [tit]: value });
  };
  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("tit", data.tit);
      formData.append("message", data.message);

      const res = await fetch(`http://localhost:5000/api/post`, {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setData({ tit: "", image: "" });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter tit"
          type="text"
          name="name"
          value={data.tit}
          onChange={handleChange("tit")}
        />
        <input
          className="form-control"
          placeholder="Enter message"
          type="text"
          name="name"
          value={data.message}
          onChange={handleChange("message")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      {data.image && (
        <img
          src={URL.createObjectURL(data.image)}
          alt="preview"
          style={{ maxWidth: "100%" }}
        />
      )}
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddUser;
