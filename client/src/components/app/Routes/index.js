import AppLayout from '../AppLayout';
import { Router } from '@reach/router';
import Dashboard from '../../../screens/App/Dashboard';
import Settings from '../../../screens/App/Settings';
import ProjectAdd from '../../../screens/App/ProjectAdd';
import UserSettings from '../../../screens/App/UserSettings';
import { useRouter } from 'next/router';

const Routes = () => {
  const router = useRouter();

  //check token expires time on private routes
  const isTokenValid = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expiresIn'));
    return new Date().getTime() < expiresAt;
  };

  const PrivateRoute = ({ component: Component, location, ...rest }) => {
    if (!isTokenValid()) {
      router.push('/login');
      return null;
    } else {
      return <Component {...rest} />;
    }
  };

  return (
    <AppLayout>
      <Router>
        {/*<PrivateRoute path="/app" component={Dashboard}/>*/}
        <Dashboard path='/app' />
        <Settings path='/app/settings' />
        <ProjectAdd path='/app/ProjectAdd' />
        <UserSettings path='/app/UserSettings' />
      </Router>
    </AppLayout>
  );
};

export default Routes;
