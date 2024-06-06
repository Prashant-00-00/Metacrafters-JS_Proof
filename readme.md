# Create a NFTs Collection

This code provides a simple system for managing a collection of NFTs. It allows you to mint new NFTs with various attributes, view existing NFTs in the collection, and get the total number of NFTs created.

## Functionality

* **Minting NFTs:** The `mintNFT` function creates a new NFT object with specified properties and adds it to the `NFTs` array.
* **Listing NFTs:** The `listNFTs` function iterates through the `NFTs` array and displays each NFT's details in a user-friendly format.
* **Getting Total Supply:** The `getTotalSupply` function retrieves the current number of NFTs in the collection.


## Code Breakdown

The code consists of three main functions:

**mintNFT(id, artStyle, bgColor, hasAccessories, uniqueTrait, creator)**: This function takes various arguments to define the properties of a new NFT and adds it to the NFTs array.
**listNFTs()**: This function iterates through the NFTs array and prints details about each NFT to the console in a clear format.
**getTotalSupply()**: This function simply retrieves the length of the NFTs array, representing the total number of NFTs created.
