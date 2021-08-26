import axios from 'axios'

const SENT_MESSAGE = 'SENT_MESSAGE'
const defaultState = {}

export const sentMessage = (status) => ({
    type: SENT_MESSAGE,
    status,
})

export const sendMessage = (message) => async (dispatch) => {
    const { data } = await axios.post('api/contact', message)
    dispatch(sentMessage(data))
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case SENT_MESSAGE:
            return action.status
        default:
            return state
    }
}
