const inputs = document.querySelectorAll(".controls input");

function handleChange() {
    const suffix = this.dataset.sizing || ""; //linked to data-sizing attribute in input tag
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(function(input) {
    input.addEventListener("change", handleChange);
    //input.addEventListener("mousemove", handleChange);
});