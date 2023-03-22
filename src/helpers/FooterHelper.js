export const useFooterHelper = () => {
    const showFooter = () => {
        let footer = document.getElementById('footer');
        if (footer) {
            footer.style.display = "block";
        }
    }

    const hiddeFooter = () => {
        let footer = document.getElementById('footer');
        if (footer) {
            footer.style.display = "none";
        }
    }

    return {
        showFooter,
        hiddeFooter
    }
}