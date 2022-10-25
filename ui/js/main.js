$(document).ready(function(){
    const modalTitle = $(".modal_title")
    $("#add-btn").click(() => {
        modalTitle.html("Thêm hồ sơ cán bộ, giáo viên")
        $("#modal-add").show()
        $("#input-teacher-code").focus()
    })
    $("#toolbar-btn-more").click(function() {
        $(this).children(".multi-delete").toggleClass("hide")
    })
})