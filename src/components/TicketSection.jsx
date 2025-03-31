import "../css/Ticket2.css";
import { Link } from "react-router-dom";

const TicketSection = () => {
  return (
    <>
      <div className="ticket-container">
        <div className="ticket">
          <img className="ticket-image" src="/images/Ticket.png" alt="Ticket" />
          <Link to="/comingsoon" className="custom-button translate-y-[100%]">
            <span className="text">Book Now →</span>
            <img src={"/arrow.svg"} alt="Arrow" className="arrow-icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TicketSection;
