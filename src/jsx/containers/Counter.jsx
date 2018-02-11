import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement, incrementAsync } from '../modules/Counter';

const mapStateToProps = (state) => state.counter;

export default connect(mapStateToProps, { increment, decrement, incrementAsync })(Counter);

