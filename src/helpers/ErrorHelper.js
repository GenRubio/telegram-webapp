export const useErrorHelper = () => {
    const errorHandler = (data) => {
        if (import.meta.env.VITE_APP_MODE != 'local') {
            window.location = import.meta.env.VITE_REDIRECT_URL
        }
        else {
            console.log(data)
        }
    }
    return {
        errorHandler
    }
}