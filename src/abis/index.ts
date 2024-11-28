import { ethers } from "ethers";
import ERC20 from './ERC20.json';
import ERC712 from './ERC721.json';
import ERC1155 from './ERC1155.json';

export const ERC20Interface = new ethers.Interface(ERC20);
export const ERC721Interface = new ethers.Interface(ERC712);
export const ERC1155Interface = new ethers.Interface(ERC1155);
