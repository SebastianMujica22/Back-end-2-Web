import App from 'app';
import UsersRoute from 'routes/users.route';
import TripsRoute from 'routes/trips.route';

const app = new App([new UsersRoute(), new TripsRoute]);

app.listen();
