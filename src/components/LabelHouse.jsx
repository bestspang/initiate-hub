import PropTypes from "prop-types";
import { cn } from "../utils";

const LabelHouse = ({ label, className }) => {
  return <p className={cn("text-house", className)}>{label}</p>;
};

LabelHouse.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LabelHouse;
