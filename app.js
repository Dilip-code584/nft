const nftCollection = [];

document.getElementById('mintButton').addEventListener('click', () => {
    const characterName = document.getElementById('characterName').value;
    const imageURL = document.getElementById('imageURL').value;

    if (characterName && imageURL) {
        const newNFT = { characterName, imageURL };
        nftCollection.push(newNFT);
        updateNFTList();
        updateStatus(`Minted ${characterName}`);
    } else {
        updateStatus('Please enter both character name and image URL.');
    }
});

document.getElementById('changeImageButton').addEventListener('click', () => {
    const selectedNFTIndex = document.getElementById('nftList').value;
    const newImageURL = document.getElementById('newImageURL').value;

    if (selectedNFTIndex !== '' && newImageURL) {
        nftCollection[selectedNFTIndex].imageURL = newImageURL;
        updateStatus(`Changed image for ${nftCollection[selectedNFTIndex].characterName}`);
    } else {
        updateStatus('Please select an NFT and provide a new image URL.');
    }
});

function updateNFTList() {
    const nftList = document.getElementById('nftList');
    nftList.innerHTML = '';
    nftCollection.forEach((nft, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = nft.characterName;
        nftList.appendChild(option);
    });
}

function updateStatus(message) {
    const status = document.getElementById('status');
    status.textContent = message;
}

