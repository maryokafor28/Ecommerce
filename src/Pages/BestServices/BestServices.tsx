import "./BestServices.css";
import { Service1, Service2, Service3 } from "../../icons/icons";

const services = [
  {
    id: 1,
    icon: Service1,
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    id: 2,
    icon: Service2,
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    id: 3,
    icon: Service3,
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];

function BestServices() {
  return (
    <div className="services-container">
      <p className="services-subtitle">Featured Products</p>
      <h2 className="services-title">THE BEST SERVICES</h2>
      <p className="services-description">
        Problems trying to resolve the conflict between
      </p>

      <div className="services-grid">
        {services.map(({ id, icon: Icon, title, description }) => (
          <div key={id} className="service-card">
            <Icon className="service-icon" />
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestServices;
