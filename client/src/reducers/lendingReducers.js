import { lendingActions } from "../lib/lendingData";

export const lendingReducer = function reducer(state, action) {
  if (action.type === lendingActions.STEP_CHANGE) {
    const currentStep = action.data.stepname;

    return { ...state, currentStep: currentStep };
  }

  if (action.type === lendingActions.NEXT_STEP) {
    const currentStep = state.currentStep;
    const steps = state.steps;

    const currentIndex = steps.indexOf(currentStep);
    const nextIndex = currentIndex + 1;

    if (nextIndex >= steps.length) return state;

    return { ...state, currentStep: steps[nextIndex] };
  }

  if (action.type === lendingActions.PREV_STEP) {
    const currentStep = state.currentStep;
    const steps = state.steps;

    const currentIndex = steps.indexOf(currentStep);
    const prevIndex = currentIndex - 1;

    if (prevIndex < 0) return state;

    return { ...state, currentStep: steps[prevIndex] };
  }

  return state;
};
