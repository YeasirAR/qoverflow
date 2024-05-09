Crypto = require("crypto");
export class CustomEncryptionAlgorithm {
  static key1 =
    "*OTC#Y#1kTuU5=_O+ilm3-jzd7G_qb5a|2z1!#oP4?3y$jEYn!F8A0+uJe^iY*L_PN1?8W!dwXGbetk$z#Hvx-M|Ky?NV9xiVe6|u9JN9oI-sbt9wswS*-xPOKI$specJ$FfK$l1!YyISaoPAaNpe$WXc&WHt!V6$01h+Cidk=SgYzj2o&mw=OHnj#%X9c95q+TUp?p@t0^!MeEEkW&YEwM?IXfsZCVk&4dhMy=febmRlIcYp^+0q2=TYm";
  static key2 =
    "4.JKj:>bIPL-fC7*bw9,:3$_;m)5V+4&_ID6X%vylh0{y\fVjDwuYHfgF#YZ1r0LN*9@[3(@j;$,f5;o!rPgdX{1zf~oAi_NLh1V6tDD!m!3r|bnh£rMJ4v+?aHI6?Mmue&Napn382=2t[N%P|$£6b@+YUQwOzxyIZUxmkjZnwv&UGqNI$tJd3FP7PQLsio+dM!^wI_v3Mnz5ZE@YH+g99gj3gFRS+z-#RZ?JQQX$?4$SL@nY!GZ!Tl=4Y";
  static key3 = "9+4_2+7_3+3_1+8";
  encrypt(text) {
    
    const startPadding = Number(CustomEncryptionAlgorithm.key3[0]);
    const endPadding = Number(
      CustomEncryptionAlgorithm.key3[CustomEncryptionAlgorithm.key3.length - 1]
    );
    const key3_interval = [
      Number(CustomEncryptionAlgorithm.key3[2]),
      Number(CustomEncryptionAlgorithm.key3[6]),
      Number(CustomEncryptionAlgorithm.key3[10]),
    ];
    const key3_padding = [
      Number(CustomEncryptionAlgorithm.key3[4]),
      Number(CustomEncryptionAlgorithm.key3[8]),
      Number(CustomEncryptionAlgorithm.key3[12]),
    ];
    const key3_len = 3;
    let paddedText = "";
    for (let i = 0; i < startPadding; i++) {
      paddedText += String.fromCharCode(Crypto.randomBytes(1)[0] % 256);
    }
    let curr_i = 0;
    let curr_pad = 0;
    for (let i = 0; i < text.length; i++) {
      if (curr_i == key3_interval[curr_pad % key3_len]) {
        for (let j = 0; j < key3_padding[curr_pad % key3_len]; j++) {
          paddedText += String.fromCharCode(Crypto.randomBytes(1)[0] % 256);
        }
        curr_pad += 1;
        curr_i = 0;
      }
      paddedText += text[i];
      curr_i += 1;
    }
    for (let i = 0; i < endPadding; i++) {
      paddedText += String.fromCharCode(Crypto.randomBytes(1)[0] % 256);
    }

    let cipherText = "";

    for (let i = 0; i < paddedText.length; i++) {
      const charCode = paddedText.charCodeAt(i);
      const first_shift = CustomEncryptionAlgorithm.key1.charCodeAt(
        i % CustomEncryptionAlgorithm.key1.length
      );
      const second_shift =
        CustomEncryptionAlgorithm.key2.charCodeAt(first_shift);
      const newCode =
        (charCode +
          second_shift +
          first_shift) %
        256;
      cipherText += String.fromCharCode(newCode);
    }
    return [paddedText, cipherText];
  }

  decrypt(text) {
    let plainText = "";

    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i);
      const first_shift = CustomEncryptionAlgorithm.key1.charCodeAt(
        i % CustomEncryptionAlgorithm.key1.length
      );
      const second_shift =
        CustomEncryptionAlgorithm.key2.charCodeAt(first_shift);
      const newCode =
        (charCode -
          second_shift -
          first_shift + 512) %
        256;
      plainText += String.fromCharCode(newCode);
    }
    const startPadding = Number(CustomEncryptionAlgorithm.key3[0]);
    const endPadding = Number(
      CustomEncryptionAlgorithm.key3[CustomEncryptionAlgorithm.key3.length - 1]
    );
    const key3_interval = [
      Number(CustomEncryptionAlgorithm.key3[2]),
      Number(CustomEncryptionAlgorithm.key3[6]),
      Number(CustomEncryptionAlgorithm.key3[10]),
    ];
    const key3_padding = [
      Number(CustomEncryptionAlgorithm.key3[4]),
      Number(CustomEncryptionAlgorithm.key3[8]),
      Number(CustomEncryptionAlgorithm.key3[12]),
    ];
    const key3_len = 3;

    let unpaddedText = "";
    let curr_i = 0;
    let curr_pad = 0;
    for (let i = startPadding; i < plainText.length - endPadding; i++) {
      if (curr_i == key3_interval[curr_pad % key3_len]) {
        i += key3_padding[curr_pad % key3_len];
        curr_pad += 1;
        curr_i = 0;
      }
      unpaddedText += plainText[i];
      curr_i += 1;
    }
    return [unpaddedText, plainText];
  }
}
