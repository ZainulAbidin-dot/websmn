import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) => {
  return (
    <div>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className={`alert alert-${alert.alertType}`}>
            {alert.msg}
          </div>
        ))}
    </div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
  // msg: PropTypes.string.isRequired,
  // alertType: PropTypes.string.isRequired,
  // id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
  // msg: state.alert.msg,
  // alertType: state.alert.alertType,
  // id: state.alert.id,
});

export default connect(mapStateToProps)(Alert);
