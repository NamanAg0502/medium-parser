console.log("Content script is running");

if (window.location.host.includes('medium.com')) {
    console.log("Medium.com detected");

    const addButtonToMedium = () => {
        const button = document.createElement('button');
        button.textContent = 'Read Medium';
        button.style.position = 'fixed';
        button.style.top = '80px';
        button.style.right = '20px';
        button.style.padding = '10px 16px';
        button.style.backgroundColor = '#000';
        button.style.color = '#fff';
        button.style.border = 'none';
        button.style.borderRadius = '8px';
        button.style.cursor = 'pointer';

        button.addEventListener('click', () => {
            const currentURL = window.location.href;
            const newDomain = 'https://readmedium.com/';
            window.location.href = `${newDomain}${currentURL}`;
        });

        document.body.appendChild(button);
        console.log("Button added to the page");
    };

    addButtonToMedium();
} else {
    console.log("This is not a Medium page");
}
