
const NFTs = [];


function mintNFT(id, artStyle, bgColor, hasAccessories, uniqueTrait, creator) {
    const NFT = {
        "id": id,
        "artStyle": artStyle,
        "bgColor": bgColor,
        "hasAccessories": hasAccessories,
        "uniqueTrait": uniqueTrait,
        "creatorId": creator
    };
    NFTs.push(NFT);
    console.log("\nNFT with ID " + id + " minted \n")
}


function listNFTs() {
    let counter = 0;
    console.log(`
---------------------------------------
   Displaying all the available NFTs
---------------------------------------
`);

    while (counter < NFTs.length) {
        console.log("-----NFT present at " + (counter + 1) + " location with ID " + NFTs[counter].id + "-----")
        console.log("Art Style : " + NFTs[counter].artStyle);
        console.log("Backgorund Color : " + NFTs[counter].bgColor);
        console.log("Has Accessories : " + (NFTs[counter].hasAccessories ? "Yes" : "No"));
        console.log("Unique Trait: " + NFTs[counter].uniqueTrait);
        console.log("Created ID : " + NFTs[counter].creatorId);
        console.log("\n");
        counter++;
    }
}


function getTotalSupply() {
    console.log("Total number of NFTs created are :: " + (NFTs.length))
}


mintNFT("ff25f6", "Modern", "Transparent", 0, "Funny", "668b12");
mintNFT("037c5b", "Classic", "Red", 1, "Wings", "10ae53");
mintNFT("9c0b0f", "Modern", "Yellow", 0, "Always Serious", "857ab2");
mintNFT("ac0482", "Classic", "White", 1, "Big Nose", "a484a7");
listNFTs();
getTotalSupply();
