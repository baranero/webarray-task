function Button(text) {
    const button = document.createElement('button');
    button.className = 'w-full text-center leading-4 py-[23px] rounded-[20px] bg-[#3482FF] text-white';
    button.textContent = text;
    return button;
}

export default Button;