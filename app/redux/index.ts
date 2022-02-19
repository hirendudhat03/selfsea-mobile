import { TypedUseSelectorHook, useSelector } from 'react-redux';
import rootReducer from './reducers';

export type RootState = ReturnType<typeof rootReducer>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
