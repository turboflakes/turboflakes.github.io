const generateId = () => Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000

export const notifications = (state = [], action) => {
  if (action.error) {
    if (action.error.errors) {
      const errors = action.error.errors.map(msg => {
        return {msg, id: generateId(), severity: "error", delay: 6000}
      })
      return [...state, ...errors]
    }
    return [...state, {msg: action.error, id: generateId(), severity: "error", delay: 6000}]
  }
  switch (action.type) {
    case "CLEAR_STORE":
    case "CLEAR_NOTIFICATIONS":
      return []
    case "REMOVE_NOTIFICATION":
      return state.filter(alert => alert.id !== action.id)
    case "ADD_NOTIFICATION_ERROR":
      return [...state, {
        ...action.notification,
        id: generateId(),
        delay: 12000
      }]
    case "ADD_NOTIFICATION_INFO":
      return [...state, {
        ...action.notification,
        id: generateId(),
        delay: 12000
      }]
    case "ADD_NOTIFICATION_SUCCESS":
      return [...state, {
        ...action.notification,
        id: generateId(),
        delay: 24000
      }]
    default:
      return state
  }
}
