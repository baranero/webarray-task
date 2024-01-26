function createThreadCard(container, text, backgroundColor, borderColor) {
    let threatCard = document.createElement('div');
    threatCard.innerText = text;
    threatCard.className = 'w-max border text-center text-[13.6px] leading-[23.1px] py-[23px] rounded-[42.4px] px-[17px] mt-[6px] mx-[2px] pt-[3.39px] pb-[2.5px]';
    threatCard.style.backgroundColor = backgroundColor;
    threatCard.style.borderColor = borderColor;
    container.appendChild(threatCard);

}

export default createThreadCard;