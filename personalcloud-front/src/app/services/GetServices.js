"use server";
async function GetFiles() {
    const response = await fetch(`${process.env.NEXT_URL_API}/file`, {
        headers: {
            "Content-Type": "application/json",
            'api_key': `${process.env.NEXT_API_KEY}`
        },
    });
    const files = await response.json();
    console.log(files);
    return { files }

}

async function GetFilesId(id) {
    const response = await fetch(`${process.env.NEXT_URL_API}/file/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${process.env.NEXT_API_KEY}`
        },
    });
    const fileId = await response.json();
    console.log(fileId);

    return { fileId }
}

export {
    GetFiles,
    GetFilesId
}