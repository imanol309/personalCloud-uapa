async function GetFiles() {
    const response = await fetch(`${process.env.NEXT_URL_API}/file`);
    const files = await response.json();
    console.log(files);
}

async function GetFilesId(id) {
    const response = await fetch(`${process.env.NEXT_URL_API}/file:${id}`);
    const fileId = await response.json();
    console.log(fileId);
}

export {
    GetFiles,
    GetFilesId
}