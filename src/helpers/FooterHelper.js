export const useFooterHelper = () => {
    const showFooter = () => {
        let footer = document.getElementById('footer');
        if (footer) {
            footer.style.display = "block";
            let separator = document.getElementById('separator');
            if (separator){
                separator.style.height = "40px";
            }
        }
    }

    const hiddeFooter = () => {
        let footer = document.getElementById('footer');
        if (footer) {
            footer.style.display = "none";
            let separator = document.getElementById('separator');
            if (separator){
                separator.style.height = "90px";
            }
        }
    }

    return {
        showFooter,
        hiddeFooter
    }
}