import { ActionReducer, MemoizedSelector, createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { register } from "./actions";

 const initialState: AuthStateInterface = {
   isSubmitting: false,
 }

 const authFeature = createFeature({
   name: 'auth',
   reducer: createReducer(
     initialState,
     on(register, (state) => ({...state, isSubmitting: true}))
   ),
 })

 export const {name: authFeatureKey, reducer: authReducer} = authFeature


// const usersFeature = myCreateFeature({
//   name: 'Users',
//   reducer: createReducer({
//     selectedUser: null as string | null,
//     users: [] as string[],
//   }),
// })

// // usersFeature.selectUsers

// declare function myCreateFeature<Name extends string, State> (config: {
//   name: Name,
//   reducer: ActionReducer<State>
// }): {
//   // defining strongly ttyped keys for selectors as string literals = here we using generics to  infer names as string literals
//   [Key in Name as `select${Capitalize<Key>}State`] : MemoizedSelector<Object,State>
// } & {
//   [Key in keyof State as `select${Capitalize<Key & string>}`] : MemoizedSelector<Object,State[Key]>
// };
