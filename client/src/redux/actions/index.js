import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const learnsUrl = "http://localhost:5000/learns/";
const userUrl = "http://localhost:5000/auth/";
const profileUrl = "http://localhost:5000/profile/";

export function verify() {
    return (dispatch) => {
        axios.get(profileUrl + "verify")
            .then((response) => {
                let { success, user } = response.data;
                dispatch(logon(success, user));
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

function logon(success, user) {
    return {
        type: "LOGON",
        success,
        user
    }
}
function handleAuthErr(key, errCode) {
    return {
        type: "HANDLE_AUTH_ERR",
        key,
        errCode
    }
}

export function signup(credentials) {
    return (dispatch) => {
        axios.post(userUrl + "signup", credentials)
            .then((response) => {
                let { token, user, success } = response.data;
                localStorage.setItem("token", token);
                dispatch(logon(success, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(handleAuthErr("signup", err.response.status));
            })
    }
}

export function signin(credentials) {
    return (dispatch) => {
        axios.post(userUrl + "login", credentials)
            .then((response) => {
                let { token, user, success } = response.data;
                localStorage.setItem("token", token);
                dispatch(logon(success, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(handleAuthErr("signin", err.response.status));
            })
    }
}

export function logout() {
    localStorage.removeItem("token");
    return {
        type: "LOGOUT"
    }
}

//TODOS
function setLearns(learns) {
    return {
        type: "SET_TODOS",
        learns
    }
}

export function loadLearns() {
    return (dispatch) => {
        axios.get(learnsUrl)
            .then((response) => {
                dispatch(setLearns(response.data));
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function addTodo(learns) {
    return (dispatch) => {
        axios.post(learnsUrl, learns)
            .then((response) => {
                dispatch(loadLearns());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function editTodo(id, learns) {
    return (dispatch) => {
        axios.put(learnsUrl + id, learns)
            .then((response) => {
                dispatch(loadLearns());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function deleteTodo(id) {
    return (dispatch) => {
        axios.delete(learnsUrl + id)
            .then((response) => {
                dispatch(loadLearns());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}
