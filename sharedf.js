function handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    const required = form.querySelectorALL("[required]");
    for (const el of required){
        if(!el.value.trim()){
            el.focus()
            showToast("please complete all required fields");
            return;
        }
    }
    form.reset();
    showToast("Submitted successfully! We'll contact you shortly" );
}
function showToast(msg){
    let t = document.querySelector(".toast");
    if(!t){
        t = document.createElement("div");
        t.className = "toast";
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(()=>t.classList.remove("show"), 2500);
}

window.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll("form.needs-js").forEach(f=>{
        f.addEventListener("submit", handleSubmit);
    });
});