async function PostUser(data) {
    try {
      const response = await fetch(`${process.env.NEXT_URL_API}/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${process.env.NEXT_API_KEY}` 
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}

async function PostFile(data) {
    try {
      const response = await fetch(`${process.env.NEXT_URL_API}/file`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${process.env.NEXT_API_KEY}` 
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
}

export {
    PostUser,
    PostFile
}