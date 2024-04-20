import { use, useState } from "react"
import { useEffect } from "react"
import {CustomEncryptionAlgorithm} from "@/custom_encryption_algorithm/custom_encryption_algorithm"

const Func = () => {
    const [encryptedText, setEncryptedText] = useState("");
    const [decryptedText, setDecryptedText] = useState("");
    const [originalText, setOriginalText] = useState("");
    useEffect(() => {
        const ENCR = new CustomEncryptionAlgorithm();
        const encrypt = ENCR.encrypt;
        const decrypt = ENCR.decrypt;
        const text = "#$&*$@ This is a Secret message!##@$@)("        
        const encryptedText = encrypt(text);
        const decryptedText = decrypt(encryptedText);
        setEncryptedText(encryptedText);
        setDecryptedText(decryptedText);
        setOriginalText(text);
        console.log(encryptedText); 
        console.log(decryptedText); 
          
    }, [])
    
  return <div>
        <h1 className="text-center">Original Text: {originalText}</h1>
        <h1 className="text-center">Encrypted Text: {encryptedText}</h1>
        <h1 className="text-center">Decrypted Text: {decryptedText}</h1>

  </div>
}

export default Func