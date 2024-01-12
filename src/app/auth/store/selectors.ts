import { createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

// selectors allows to get our actions & reducers into our component
//created a selector to select a single property from our state
export const selectFeature = (state: {auth: AuthStateInterface}) => state.auth

export const selectIsSubmitting = createSelector(
  selectFeature,
  (state) => state.isSubmitting
)
