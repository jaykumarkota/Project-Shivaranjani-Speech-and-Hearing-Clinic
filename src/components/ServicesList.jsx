import '../styles/components/ServicesList.css';
import { assets } from '../assets/assets';
function ServicesList() {

  return (
    <section className="services-list container">
      <div className="service col1"><img className="services-list-img" src={assets.hearing_services_list} alt='' /></div>
      <div className="service col2"><img className="services-list-img" src={assets.hearing_services_list} alt='' /></div>
      <div className="service col3"><img className="services-list-img" src={assets.hearing_services_list} alt='' /></div>
    </section>
  );
}
export default ServicesList