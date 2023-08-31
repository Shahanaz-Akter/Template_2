// custom collapse Function

// custom collapse Function
const collapseFun = () => {
    const collapseChild = document.querySelector('.collapseChild');

    // Use single equal sign (=) for assignment, not double equal sign (==)
    if (!(collapseChild.classList.contains('d-none'))) {
        collapseChild.classList.add('d-none');
    }
    else {
        collapseChild.classList.remove('d-none');
    }
};




