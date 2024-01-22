function Button(text) {
    const button = document.createElement('button');
    button.className = 'mt-10 w-full text-center leading-4 py-[23px] px-[119.5px] rounded-[20px] bg-[#3482FF] text-white';
    button.textContent = text;
    return button;
}

export default Button;