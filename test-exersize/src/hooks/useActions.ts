import {useAppDispatch} from "./useAppDispatch";
import actionCreators from "../store/actionCreators";
import {bindActionCreators} from "redux";

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(actionCreators, dispatch);
}