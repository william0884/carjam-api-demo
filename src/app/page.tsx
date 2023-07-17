"use client"
import React, { useState } from 'react';
type CarData = {
  idh: {
    plate: string;
    query_type: string;
    created: number;
    is_trade_plate: boolean;
    odometer_history: any[];
    header: {
      not_found: string;
      not_assigned: boolean;
      errors: {
        [key: string]: string;
      };
      not_available: boolean;
      is_trade_plate: boolean;
    };
    vehicle: {
      vehicle_system_id: string;
      year_of_manufacture: string;
      make: string;
      model: string;
      submodel: string;
      body_style: string;
      vehicle_type: string;
      vin: string;
      chassis: string;
      engine_no: string;
      cc_rating: number;
      power: number;
      main_colour: string;
      second_colour: string;
      reported_stolen: string;
      country_of_origin: string;
      assembly_type: string;
      gross_vehicle_mass: number;
      reliable_odometer: string;
      maximum_rated_towed_mass_for_unbraked_trailer: number;
      maximum_rated_towed_mass_for_braked_trailer: number;
      tare_weight: number;
      no_of_axles: number;
      axle_type: string;
      front_axle_group_rating: number;
      rear_axle_group_rating: number;
      date_of_first_registration_in_nz: number;
      cause_of_latest_registration: string;
      subject_to_wof: string;
      subject_to_wof_inspection: string;
      subject_to_cof: string;
      subject_to_cof_inspection: string;
      subject_to_ruc: string;
      date_of_last_registration: number;
      imported_damaged: string;
      registered_overseas: string;
      number_of_owners: null;
      no_of_seats: number;
      fuel_type: string;
      alternative_fuel_type: string;
      inspection_agent: string;
      wheelbase: number;
      vehicle_usages: VehicleUsage[];
      vehicle_usage: string;
      registration_status: string;
      cancellation_reason_code: string;
      previous_country_of_registration: string;
      year_of_first_registration_overseas: number;
      month_of_first_registration_overseas: number;
      day_of_first_registration_overseas: number;
      cancellation_date_of_registration: boolean;
      plate: string;
      replacement_plate: string;
      plate_type: string;
      plates: Plate[];
      date_of_latest_wof_inspection: string;
      result_of_latest_wof_inspection: string;
      expiry_date_of_last_successful_wof: string;
      date_of_latest_cof_inspection: number;
      result_of_latest_cof_inspection: string;
      expiry_date_of_last_successful_cof: number;
      inspections: Inspection[];
      licences: Licence[];
      continuous_licence: string;
      licence_type: string;
      licence_expiry_date: number;
      date_of_issue_for_latest_licence: number;
      time_of_issue_for_latest_licence: string;
      inconsistent_odometer: string;
      latest_odometer_reading: number;
      latest_daily_usage: number;
      reported_stolen_nzta: string;
    };
  };
};

type VehicleUsage = {
  vechile_usage_code: string;
  vehicle_usage_code: string;
  effective_date: number;
};

type Plate = {
  plate_status: string;
  plate_type: string;
  registration_plate: string;
  effective_date: number;
};

type Inspection = {
  latest: string;
  type: string;
  date: number;
  result: string;
  expiry_date: number;
  btn: string
}


export default function MyForm() {
  const carjamApi = process.env.CARJAM_APIKEY_TEST;

  const [formData, setFormData] = useState({
    plate: '',
  });

  const [carData, setCarData] = useState<CarData | null>(null);
  const [numberPlateSubmitted, setNumberPlateSubmitted] = useState(true); // New state variable


  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    const res = await fetch(
      //`https://test.carjam.co.nz/api/car/?plate=${formData.plate}&key=CD14D0371AE1CA3E3486045951C4274F5DD305E8&f=json`,
      `https://carjam.co.nz/api/car/?plate=${formData.plate}&key=B5C51A708B81214CDC6FB0033741458B2121A461=json`,

      { cache: 'no-store' }
    );
    const data = await res.json();
    console.log('API response:', data);

    setCarData(data);
    setNumberPlateSubmitted(false);

    // Reset the form data after submission
    setFormData({
      plate: '',
    });
  };

  return (
    <main>
      <form className='mt-15' onSubmit={handleSubmit}>
        <label htmlFor="plate">Plate:</label>
        <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="plate"
          name="plate"
          value={formData.plate}
          onChange={handleChange}
        />
        <input type="submit" value="Submit" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />

        </form>

      {carData && carData.idh && (
        <div>
                  <p className="text-3xl left-0 top-0 my-2	mt-24">
        {carData.idh.vehicle.year_of_manufacture} {carData.idh.vehicle.make} {carData.idh.vehicle.model}
       </p>
      
         <p className="text-2xl left-0 top-0 my-2	mt-8">

       {carData.idh.vehicle.submodel}
       </p>
       
       <ul className="text-1xl left-0 top-0 my-2	mt-8">
        <li>Year: {carData.idh.vehicle.year_of_manufacture}</li>

         <li>Make: {carData.idh.vehicle.make}</li>
         
         <li>Model: {carData.idh.vehicle.model}</li>
         
         <li>Colour: {carData.idh.vehicle.main_colour}</li>
         
         <li>Second Colour: {carData.idh.vehicle.second_colour}</li>
         
         <li>Submodel: {carData.idh.vehicle.submodel}</li>
         
         <li>Body Style: {carData.idh.vehicle.body_style}</li>
         
         <li>Plate: {carData.idh.vehicle.plate}</li>
         
         <li>Engine No: {carData.idh.vehicle.engine_no}</li>
         
         <li>CC rating: {carData.idh.vehicle.cc_rating}</li>

         <li>Stolen?: {carData.idh.vehicle.reported_stolen}</li>

         <li>Vehicle Type: {carData.idh.vehicle.vehicle_type}</li>

         <li>Assembly Type: {carData.idh.vehicle.assembly_type}</li>

         <li>Country of Origin: {carData.idh.vehicle.country_of_origin}</li>

         <li>Gross Vehicle Mass: {carData.idh.vehicle.gross_vehicle_mass}</li>

         <li>Tare Weight: {carData.idh.vehicle.tare_weight}</li>

        </ul>
        </div>
        

        
      )}
      {!numberPlateSubmitted && ( // Render the number plate form if numberPlateSubmitted is false

<form className='mt-15'>
        <label htmlFor="car">Is this your car?</label><br />
        <input type="submit" value="Yes, Submit" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
        <input type="submit" value="No, enter plate again" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />

        </form>

)}

      <p>Some example plates: '360J', 'APY771', 'W0L0JBF68Y7051756', '11UPL', '12PC', 
                      '11WGR', '12PLT', '100LW', 'ARM407', '7A897161098401439',
                    '10EDVL', '7A5AAASAVUST74169', '1174H', '7AT06606X10817474',
                  'MAAH9000298391027','ASP247'</p>
    </main>
  );
}