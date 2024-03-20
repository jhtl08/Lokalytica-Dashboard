import Navbar from "@/components/dashboard/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import styles from "@/components/dashboard/dashboard.module.css";
import Footer from "@/components/dashboard/footer/footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
