
export default async function getCar(numPlate: String) {

    const carjamApi = process.env.CARJAM_APIKEY;



    const res = await fetch(`https://test.carjam.co.nz/api/car/?plate=${numPlate}&key=${carjamApi}&f=json`, { cache: 'no-store' })
    return res.json()
}