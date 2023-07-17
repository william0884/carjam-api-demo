"use client"
import getCar from './car';
import Link from 'next/link';
import React, { useState } from 'react';



type CarPlay = {
  idh: Idh;
}

type Idh = {
  plate:            string;
  query_type:       string;
  created:          number;
  is_trade_plate:   boolean;
  odometer_history: any[];
  header:           Header;
  vehicle:          Vehicle;
}

type Header = {
  not_found:      string;
  not_assigned:   boolean;
  errors:         Errors;
  not_available:  boolean;
  is_trade_plate: boolean;
}

type Errors = {
  "58146": string;
}

type Vehicle = {
  vehicle_system_id:                             string;
  year_of_manufacture:                           string;
  make:                                          string;
  model:                                         string;
  submodel:                                      string;
  body_style:                                    string;
  vehicle_type:                                  string;
  vin:                                           string;
  chassis:                                       string;
  engine_no:                                     string;
  cc_rating:                                     number;
  power:                                         number;
  main_colour:                                   string;
  second_colour:                                 string;
  reported_stolen:                               string;
  country_of_origin:                             string;
  assembly_type:                                 string;
  gross_vehicle_mass:                            number;
  reliable_odometer:                             string;
  maximum_rated_towed_mass_for_unbraked_trailer: number;
  maximum_rated_towed_mass_for_braked_trailer:   number;
  tare_weight:                                   number;
  no_of_axles:                                   number;
  axle_type:                                     string;
  front_axle_group_rating:                       number;
  rear_axle_group_rating:                        number;
  date_of_first_registration_in_nz:              number;
  cause_of_latest_registration:                  string;
  subject_to_wof:                                string;
  subject_to_wof_inspection:                     string;
  subject_to_cof:                                string;
  subject_to_cof_inspection:                     string;
  subject_to_ruc:                                string;
  date_of_last_registration:                     number;
  imported_damaged:                              string;
  registered_overseas:                           string;
  number_of_owners:                              null;
  no_of_seats:                                   number;
  fuel_type:                                     string;
  alternative_fuel_type:                         string;
  inspection_agent:                              string;
  wheelbase:                                     number;
  vehicle_usages:                                VehicleUsage[];
  vehicle_usage:                                 string;
  registration_status:                           string;
  cancellation_reason_code:                      string;
  previous_country_of_registration:              string;
  year_of_first_registration_overseas:           number;
  month_of_first_registration_overseas:          number;
  day_of_first_registration_overseas:            number;
  cancellation_date_of_registration:             boolean;
  plate:                                         string;
  replacement_plate:                             string;
  plate_type:                                    string;
  plates:                                        Plate[];
  date_of_latest_wof_inspection:                 string;
  result_of_latest_wof_inspection:               string;
  expiry_date_of_last_successful_wof:            string;
  date_of_latest_cof_inspection:                 number;
  result_of_latest_cof_inspection:               string;
  expiry_date_of_last_successful_cof:            number;
  inspections:                                   Inspection[];
  licences:                                      Licence[];
  continuous_licence:                            string;
  licence_type:                                  string;
  licence_expiry_date:                           number;
  date_of_issue_for_latest_licence:              number;
  time_of_issue_for_latest_licence:              string;
  inconsistent_odometer:                         string;
  latest_odometer_reading:                       number;
  latest_daily_usage:                            number;
  reported_stolen_nzta:                          string;
}

type Inspection = {
  latest:      string;
  type:        string;
  date:        number;
  result:      string;
  expiry_date: number;
  btn:         string;
}

type Licence = {
  number:             string;
  licence_type:       string;
  continuous_licence: string;
  expiry_date:        number;
  issue_datetime:     number;
}

type Plate = {
  plate_status:       string;
  plate_type:         string;
  registration_plate: string;
  effective_date:     number;
}

type VehicleUsage = {
  vechile_usage_code: string;
  vehicle_usage_code: string;
  effective_date:     number;
}




export default async function Home(props) {

  const [plate, setPlate] = useState('')


  //const plateArray = ['360J', 'APY771', 'W0L0JBF68Y7051756', '11UPL', '12PC', 
  //                    '11WGR', '12PLT', '100LW', 'ARM407', '7A897161098401439',
  //                  '10EDVL', '7A5AAASAVUST74169', '1174H', '7AT06606X10817474',
  //                'MAAH9000298391027','ASP247']
  //const item = plateArray [Math.floor(Math.random()*plateArray .length)];
 
  //onst data = await getCar(item);
  //const CarData: CarPlay = data;
  

  const handleSubmit = async (e) => {
    props.handleSubmit(plate)

  }

  return (
    
    <main className="flex min-w-screen flex-col items-center justify-between gap-1">
          <nav className="w-full fixed top-0 z-100 items-center justify-between text-center text-gray-200  bg-gray-900 py-2">

            <span><Link href="/">CarJam API Demo: Refresh for a random plate lookup</Link> 
            </span>
          </nav>    


          <form className='mt-15' onSubmit={handleSubmit}>
      <h1> Our Form </h1>
      <label htmlFor="plate">Number plate:</label>
      <input type="text" value={plateValues.plate} onChange={(e) => setPlateValues({ ...plateValues, plate: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

      <input type="submit" value="Submit" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
    </form>

        <footer className="align-middle fixed bottom-0 left-0 w-full text-center text-gray-200 bg-gray-900 h-10">
            <span><Link href="/">Created by William Mckee for a start-up mobile car-buying service</Link> 
            </span>
          </footer>    
    </main>
    
  )
}
