async function PostUser(data) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `${process.env.NEXT_PUBLIC_API_KEY}` 
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
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/file`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${process.env.NEXT_PUBLIC_API_KEY}`
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