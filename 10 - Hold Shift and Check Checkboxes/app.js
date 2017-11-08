const checkboxes = document.querySelectorAll('.item input[type="checkbox"]');
let lastChecked;
function handleCheck(e) {
    let between = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(chbox => {
            if (chbox === this || chbox === lastChecked) {
                between = !between;
                console.log(between);
            }
            if (between) {
                chbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(chbox => {
    chbox.addEventListener('click', handleCheck);
}, this);