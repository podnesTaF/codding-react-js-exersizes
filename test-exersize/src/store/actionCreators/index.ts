import {AuthActionCreators} from './auth-creator';
import {EventActionCreators} from './event-creator';

export default {
    ...AuthActionCreators,
    ...EventActionCreators
}