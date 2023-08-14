// functions to open or hide the add-todo modal and update-todo modal
export const openOrHideModal = () => {
    const modal=document.querySelector(".modal")
    modal.classList.toggle("show");
}

export const openOrHideEditModal=()=>{
    const editModal=document.querySelector(".edit-modal")
    editModal.classList.toggle("show-edit-modal");
}


