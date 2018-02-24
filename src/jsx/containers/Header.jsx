import { connect } from 'react-redux';
import Header from '../components/Header';
import { onToggleOpen } from '../modules/Header';

const mapStateToProps = (state) => state.header;

export default connect(mapStateToProps, {onToggleOpen})(Header);

