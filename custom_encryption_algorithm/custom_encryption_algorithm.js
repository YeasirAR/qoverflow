export class CustomEncryptionAlgorithm {
    static key = "Z4v0dKEN9oFMToryW2MTSf+yV+JPX+pAAR5MgfKYrGH/Mjfw+m72QA==";
    encrypt(text) {
        let cipherText = "";
        let keyIndex = 0;
      
        for (let i = 0; i < text.length; i++) {
          const charCode = text.charCodeAt(i);
          const shift = CustomEncryptionAlgorithm.key.charCodeAt(keyIndex % CustomEncryptionAlgorithm.key.length);
          const newCode = (charCode + shift) % 128;
          cipherText += String.fromCharCode(newCode);
          keyIndex++;
        }
        return cipherText;
    }

    decrypt(text) {
        let plainText = "";
        let keyIndex = 0;
      
        for (let i = 0; i < text.length; i++) {
          const charCode = text.charCodeAt(i);
          const shift = CustomEncryptionAlgorithm.key.charCodeAt(keyIndex % CustomEncryptionAlgorithm.key.length);
          const newCode = (charCode - shift + 128) % 128; 
          plainText += String.fromCharCode(newCode);
          keyIndex++;
        }
      
        return plainText;
    }
}