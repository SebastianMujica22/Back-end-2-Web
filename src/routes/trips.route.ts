import { Router } from 'express';
import Route from 'interfaces/routes.interface';
import TripsService from 'services/trips.services';


class TripsRoute implements Route{
    public path = '/trips';
    public router = Router();
    public tripsService = new TripsService();

    constructor(){
        this.initializeRoutes();
    }

    private initializeRoutes(){
        this.router.get(this.path, this.tripsService.getAllTrips);
    }
}

export default TripsRoute;