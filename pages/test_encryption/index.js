import { useState } from "react";
import { useEffect } from "react";
import { CustomEncryptionAlgorithm } from "@/custom_encryption_algorithm/custom_encryption_algorithm";
import { set } from "mongoose";
Crypto = require("crypto");

const Func = () => {
  const [paddedText, setPaddedText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [originalText, setOriginalText] = useState("");
  const [unpaddedText, setUnpaddedText] = useState("");
  const [text, setText] = useState(
    "This is a Secret message! It will be encrypted and decrypted using a custom algorithm."
  );

  useEffect(() => {
    // let textt = "This is a Secret message! It will be encrypted and decrypted using a custom algorithm.";
    // const blockSize = 32;
    // const paddingLength = blockSize - (textt.length % blockSize);
    // const padd = textt + String.fromCharCode(paddingLength).repeat(paddingLength);
    // console.log("Padded Text: "+padd);
    // console.log("Original Text: "+textt.length);
    // console.log("Padded Text: "+padd.length);

    let key1 = "";
    let key2 = "";
    for (let i = 0; i < 256; i++) {
      key1 += String.fromCharCode(Crypto.randomBytes(1)[0] % 256);
      key2 += String.fromCharCode(Crypto.randomBytes(1)[0] % 256);
    }
    console.log("Key1: " + key1);
    console.log("Key2: " + key2);
    const ENCR = new CustomEncryptionAlgorithm(key1, key2);
    const encrypt = ENCR.encrypt;
    const decrypt = ENCR.decrypt;
    // const text = "This is a Secret message! It will be encrypted and decrypted using a custom algorithm.";
    const [paddedText, encryptedText] = encrypt(text);
    const [unpaddedText, decryptedText] = decrypt(encryptedText);
    setEncryptedText(encryptedText);
    setDecryptedText(decryptedText);
    setPaddedText(paddedText);
    setOriginalText(text);
    setUnpaddedText(unpaddedText);
    console.log(encryptedText);
    console.log(decryptedText);
  }, [text]);

  return (
    <div>
      <div className="flex justify-center items-center">
        <label className="block text-sm font-medium text-gray-700 mr-4">
          Plain Text
        </label>
        <div className="mt-1">
          <input
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <h1 className="text-center">Original Text: {originalText}</h1>
      <h1 className="text-center">Padded Text: {paddedText}</h1>
      <h1 className="text-center">Encrypted Text: {encryptedText}</h1>
      <h1 className="text-center">Decrypted Text: {decryptedText}</h1>
      <h1 className="text-center">Unpadded Text: {unpaddedText}</h1>
    </div>
  );
};

export default Func;
