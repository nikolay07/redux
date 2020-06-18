import { connect } from "react-redux";
import { availableOptionsSelectors } from "./options.selectors";
import Options from "./Options";
import { toogleOption } from "./options.actions";

const mapState = (state) => {
  return {
    options: availableOptionsSelectors(state),
  };
};

const mapDispatch = {
  moveOption: toogleOption,
};

export default connect(mapState, mapDispatch)(Options);
