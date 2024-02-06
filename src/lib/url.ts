export function getUrl(){

    if(process.env.VERCEL_URL){
        return `https://${process.env.VERCEL_URL}`
    }
    return 'http://localhost:3000'

}