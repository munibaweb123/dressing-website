import { shipEngine } from "@/helper/shipEngine";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest) {
  return new Response(JSON.stringify({ message: "shipengine testing" }))
  
}

export async function POST(req: NextRequest) {
  const {shipToAddress,packages}= await req.json();
  try {
    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment:{
        shipTo:shipToAddress,
        shipFrom:{
          name: "ShipEngine",
          phone: "1234567890",
          addressLine1: "3800 N Lamar Blvd",
          cityLocality: "Austin",
          stateProvince: "TX",
          postalCode: "78756",
          countryCode: "US",
          addressResidentialIndicator: "unknown"
        },
        packages:packages,
      },
      rateOptions:{
        carrierIds:[
          process.env.SHIPENGINE_FIRST_COURIER||"",
          process.env.SHIPENGINE_SECOND_COURIER||"",
          process.env.SHIPENGINE_THIRD_COURIER||"",
          process.env.SHIPENGINE_FOURTH_COURIER||"",
        ].filter(Boolean),
      }
    });
    return new Response(JSON.stringify(shipmentDetails),{status:200})

  }catch{
    return new Response(JSON.stringify({ message: "error" }))

  }
}