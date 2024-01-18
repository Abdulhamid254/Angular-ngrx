import { ActionReducer, MemoizedSelector, createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";

 const initialState: AuthStateInterface = {
   isSubmitting: false,
   isLoading: false,
   currentUser: undefined,
   validationErrors: null
 }



 const authFeature = createFeature({
   name: 'auth',
   reducer: createReducer(
     initialState,
     on(authActions.register, (state) => ({...state, isSubmitting: true, validationErrors: null})),
     on(authActions.registerSuccess, (state, actions) => ({...state, isSubmitting: false,
     currentUser:actions.currentUser})),
     on(authActions.registerFailure, (state,action) => ({...state, isSubmitting: false, validationErrors: action.errors,})),
   ),
 });


 export const
 {
  name: authFeatureKey,
  reducer: authReducer,
  selectIsSubmitting,
  selectIsLoading,
  selectCurrentUser,
  selectValidationErrors,
} = authFeature


 // below is another way of doing it

// const usersFeature = myCreateFeature({
//   name: 'Users',
//   reducer: createReducer({
//     selectedUser: null as string | null,
//     users: [] as string[],
//   }),
// })

// usersFeature.selectSelectedUser

// declare function myCreateFeature<Name extends string, State> (config: {
//   name: Name,
//   reducer: ActionReducer<State>
// }): {
//   // defining strongly ttyped keys for selectors as string literals = here we using generics to  infer names as string literals
//   [Key in Name as `select${Capitalize<Key>}State`] : MemoizedSelector<Object,State>
// } & {
//   [Key in keyof State as `select${Capitalize<Key & string>}`] : MemoizedSelector<Object,State[Key]>
// };
