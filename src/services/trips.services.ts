import { Request, Response } from 'express';
import Trip from 'models/trip.model';
import { MongoDatabase, Collections} from 'database/db'
import HttpError from 'exceptions/HttpException';
import { asyncRunner } from 'utils/async';

export default class TripsService{

     getAllTrips = async(req: Request, res: Response) => {
         console.log('trips service line 10')
        return asyncRunner(req, res, async(req: Request, res: Response, db: MongoDatabase)=>{

            const { originCity, destinyCity, date } = req.query;

            console.log(originCity + "-"+ destinyCity + "-" + date );

            const trips = await db.getDocuments(Collections.Trips, { originCity, destinyCity, date });

            if(!trips){
                console.log('its going on for now');
                throw new HttpError(409, `There is not a trip that holds those requirements`);
            }
            res.send(trips);
        });
     };


    // GetTripDetailed





}