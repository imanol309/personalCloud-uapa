// "use server";
async function GetFiles() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/file`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${process.env.NEXT_PUBLIC_API_KEY}`
        },
    });
    const files = await response.json();
    console.log(files);
    return { files }

}

async function getDataFileForUser(id) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/users/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${process.env.NEXT_PUBLIC_API_KEY}`
        },
    });
    const fileId = await response.json();
    // console.log(fileId);

    return { fileId }
}

export {
    GetFiles,
    getDataFileForUser
}