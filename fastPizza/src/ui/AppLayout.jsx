import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import '../styles/ui.css';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="app-layout">
      {isLoading && <Loader />}

      <Header />

      <div className="app-content-scroll">
        <main className="app-main">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
