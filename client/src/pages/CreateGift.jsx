import { useState } from "react";
import "./CreateGift.css";

const CreateGift = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = year + "-" + month + "-" + day;

  const [gift, setGift] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audience: "",
    image: "",
    description: "",
    submittedby: "",
    submittedon: currentDate,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setGift((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const createGift = async (event) => {
    event.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gift),
    };
    const response = await fetch("http://localhost:3001/gifts", options);
    window.location = "/";
  };

  //   const createGift = async (event) => {
  //     event.preventDefault(); // Prevent form from submitting normally

  //     // Create the options object with method, headers, and body
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json", // Specify the content type as JSON
  //       },
  //       body: JSON.stringify(gift), // Convert the gift object to a JSON string
  //     };

  //     try {
  //       // Make the POST request to the /gifts endpoint with the options
  //       const response = await fetch("http://localhost:3001/gifts", options);

  //       // Check if the request was successful
  //       if (response.ok) {
  //         // If the request was successful, redirect to the homepage
  //         window.location = "/";
  //       } else {
  //         // Handle errors, if any
  //         console.error("Failed to create gift", response.statusText);
  //       }
  //     } catch (error) {
  //       // Handle any unexpected errors
  //       console.error("Error creating gift:", error);
  //     }
  //   };

  return (
    <div className="CreateGift">
      <center>
        <h2>Add a Gift</h2>
      </center>
      <form>
        <label>Name</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={gift.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Description</label>
        <br />
        <textarea
          rows="5"
          cols="50"
          id="description"
          name="description"
          value={gift.description}
          onChange={handleChange}
        ></textarea>
        <br />
        <label>Image URL</label>
        <br />
        <input
          type="text"
          id="image"
          name="image"
          value={gift.image}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Price Point</label>
        <br />
        <input
          type="text"
          id="pricepoint"
          name="pricepoint"
          value={gift.pricepoint}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Audience</label>
        <br />
        <input
          type="text"
          id="audience"
          name="audience"
          value={gift.audience}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Submitted By</label>
        <br />
        <input
          type="text"
          id="submittedby"
          name="submittedby"
          value={gift.submittedby}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" onClick={createGift} />
      </form>
    </div>
  );
};

export default CreateGift;
