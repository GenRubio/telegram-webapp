export const useFooterHelper = () => {
    const showFooter = () => {
        document.getElementById('footer').style.display = "block";
    }

    const hiddeFooter = () => {
        document.getElementById('footer').style.display = "none";
    }

    return {
        showFooter,
        hiddeFooter
    }
}