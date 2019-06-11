export const ADD_CANDIDATE = 'ADD_CANDIDATE'
export const RESET_CANDIDATES = 'RESET_CANDIDATES'

export function addCandidate({ name, party, img }) {
  return {
    type: ADD_CANDIDATE,
    payload: { name, party, img }
  }
}

export function resetCandidates() {
  return {
    type: RESET_CANDIDATES,
    payload: true,
  }
}
