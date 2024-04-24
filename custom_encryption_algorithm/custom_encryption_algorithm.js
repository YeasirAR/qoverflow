export class CustomEncryptionAlgorithm {
  static key1 =
    "m+sqPDiPWGlGmb8/K9JmE2Zm1bw4qYEiX646+cnY07ibpKz6yPQV4Z2/9yDtJ131";
  static key2 =
    "6ZbtKCuG7q58beeodlJH5BYRNut35UMfj3lG8W9kn/UEKZPLEAecdTV2jPGXBJTq";
  static key3 = "7_10";

  encrypt(text) {
    const [interval, length] = CustomEncryptionAlgorithm.key3
      .split("_")
      .map(Number);
    let paddedText = "";
    for (let i = 0; i < text.length; i++) {
      paddedText += text[i];
      if ((i + 1) % interval === 0) {
        let padding = "";
        for (let i = 0; i < length; i++) {
          padding += String.fromCharCode(Math.floor(Math.random() * 128));
        }
        paddedText += padding;
      }
    }
    let cipherText = "";
    let keyIndex = 0;

    for (let i = 0; i < paddedText.length; i++) {
      const charCode = paddedText.charCodeAt(i);
      const first_shift = CustomEncryptionAlgorithm.key1.charCodeAt(
        keyIndex % CustomEncryptionAlgorithm.key1.length
      );
      const second_shift = CustomEncryptionAlgorithm.key2.charCodeAt(
        first_shift % CustomEncryptionAlgorithm.key2.length
      );
      const newCode = (charCode + second_shift) % 128;
      cipherText += String.fromCharCode(newCode);
      keyIndex++;
    }
    return [paddedText,cipherText];
  }

  decrypt(text) {
    let plainText = "";
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const first_shift = CustomEncryptionAlgorithm.key1.charCodeAt(
        keyIndex % CustomEncryptionAlgorithm.key1.length
      );
      const second_shift = CustomEncryptionAlgorithm.key2.charCodeAt(
        first_shift % CustomEncryptionAlgorithm.key2.length
      );
      const newCode = (charCode - second_shift + 128) % 128;
      plainText += String.fromCharCode(newCode);
      keyIndex++;
    }
    let [interval, length] = CustomEncryptionAlgorithm.key3
      .split("_")
      .map(Number);
    let unpaddedText = "";
    for (let i = 0, j = 0; i < plainText.length; i++) {
      unpaddedText += plainText[i];
      j++;
      if ((j) % interval === 0) {
        i += length;
      }
    }
    return [unpaddedText,plainText];
  }
}
