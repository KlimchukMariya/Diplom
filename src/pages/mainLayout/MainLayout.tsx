 
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
 
import styles from "./styles.module.css"
import Footer from "../../Components/Footer/footer";
import { Provider } from 'react-redux';
import  store  from '../../store'

// const MainLayout = () => {
//   return (
//    <>
//       <Header />
//          <div className={`container ${styles['container--section']}`}>
//          <Navigation />
//                <div>
//                   <Outlet />
//                </div>
//          </div>
//           <Footer />
//    </>
//   );
// };

// export default MainLayout;

const MainLayout = () => {
  return (
    <Provider store={store}>
      <>
      
        <Header />
        <div className={styles.page}> 
        <Outlet />  
          </div>
        <Footer />
      
      </>
    </Provider>
  );
};
export default MainLayout
 