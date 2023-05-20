import getCar from './car';
import { CarPlay } from './CarTypes';
import Link from 'next/link';

export default async function Home(Car: CarPlay) {
  const plateArray = ['360J', 'APY771', 'W0L0JBF68Y7051756', '11UPL', '12PC', 
                      '11WGR', '12PLT']
  const item = plateArray [Math.floor(Math.random()*plateArray .length)];
 
  const data = await getCar(item);
  const CarData: CarPlay = data;
  return (
    
    <main className="flex min-w-screen flex-col items-center justify-between gap-1">
          <nav className="w-full fixed top-0 z-100 items-center justify-between text-center text-gray-200  bg-gray-900 py-2">

            <span><Link href="/">CarJam API Demo: Refresh for a random plate lookup</Link> 
            </span>
          </nav>    


        <p className="text-3xl left-0 top-0 my-2	mt-24">
        {CarData.idh.vehicle.year_of_manufacture} {CarData.idh.vehicle.make} {CarData.idh.vehicle.model}
       </p>
      
         <p className="text-2xl left-0 top-0 my-2	mt-8">

       {CarData.idh.vehicle.submodel}
       </p>
       
       <ul className="text-1xl left-0 top-0 my-2	mt-8">
        <li>Year: {CarData.idh.vehicle.year_of_manufacture}</li>

         <li>Make: {CarData.idh.vehicle.make}</li>
         
         <li>Model: {CarData.idh.vehicle.model}</li>
         
         <li>Colour: {CarData.idh.vehicle.main_colour}</li>
         
         <li>Second Colour: {CarData.idh.vehicle.second_colour}</li>
         
         <li>Submodel: {CarData.idh.vehicle.submodel}</li>
         
         <li>Body Style: {CarData.idh.vehicle.body_style}</li>
         
         <li>Plate: {CarData.idh.vehicle.plate}</li>
         
         <li>Engine No: {CarData.idh.vehicle.engine_no}</li>
         
         <li>CC rating: {CarData.idh.vehicle.cc_rating}</li>

        </ul>
        <footer className="align-middle fixed bottom-0 left-0 w-full text-center text-gray-200 bg-gray-900 h-10">
            <span><Link href="/">Created by William Mckee for a start-up mobile car-buying service</Link> 
            </span>
          </footer>    
    </main>
    
  )
}
