import { use, useState } from "react";
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
  useEffect(() => {
    let key1 = "";
    let key2 = "";
    for (let i = 0; i < 256; i++) {
      key1 += String.fromCharCode(Crypto.randomBytes(1)[0] % 256);
      key2 += String.fromCharCode(Crypto.randomBytes(1)[0] % 256);
    }
    console.log(key1);
    console.log(key2);
    const ENCR = new CustomEncryptionAlgorithm();
    const encrypt = ENCR.encrypt;
    const decrypt = ENCR.decrypt;
    const text =
      "This is a Secret message! It will be encrypted and decrypted using a custom algorithm.";
    const [paddedText, encryptedText] = encrypt(text);
    const [unpaddedText, decryptedText] = decrypt(encryptedText);
    setEncryptedText(encryptedText);
    setDecryptedText(decryptedText);
    setPaddedText(paddedText);
    setOriginalText(text);
    setUnpaddedText(unpaddedText);
    console.log(encryptedText);
    console.log(decryptedText);
  }, []);

  return (
    <div>
      <h1 className="text-center">Original Text: {originalText}</h1>
      <h1 className="text-center">Padded Text: {paddedText}</h1>
      <h1 className="text-center">Encrypted Text: {encryptedText}</h1>
      <h1 className="text-center">Decrypted Text: {decryptedText}</h1>
      <h1 className="text-center">Unpadded Text: {unpaddedText}</h1>
    </div>
  );
};

export default Func;
