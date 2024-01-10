import ConvertApi from 'convertapi-js'
let convertApi = ConvertApi.auth('BgdoMLQuAAq8pa4b')

async function convetir({ url }) {
    let params = convertApi.createParams()
    params.add('file', new URL(url));
    params.add('ScaleImage', 'true')
    params.add('ScaleProportions', 'true')
    params.add('StoreFile', 'false')
    
    let result = await convertApi.convert('docx', 'pdf', params)
    return { result }
}


export { convetir }
