async function DeleteFile(id) {
    // console.log(id)
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/file/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${process.env.NEXT_PUBLIC_API_KEY}`
            },
        });
        const result = await response.json();
        console.log(result)
        return {result}
    } catch (error) {
        console.error("Error:", error);
        return {error}
    }
}

export { DeleteFile }