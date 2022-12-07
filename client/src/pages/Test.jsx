import { Upload } from "@web3uikit/core";
import { useState, useRef, useEffect } from "react";
import React from "react";
//import ipfskey from "ipfs-api/src/key";
import { type } from "os";
import { WriteStream } from "fs";
//import ipfs from "../modules/ipfs";


const nacl = require("tweetnacl");
nacl.util = require("tweetnacl-util");
var { Crypt } = require("hybrid-crypto-js");

//Result of openSSL
const publicKey =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4e3R+O5jcNragqe05vmQmFKzqaGMm25z9moHIhIBv8Fj0SwFF1ZRoA1WeL4PZ1xMDLirn1rR7tcoj5oNKtjd671j4SW7AV0NTv9y76dJlIaYTwyefFIvX40OwULId1xYr55XN2xN85rrQxtRHj5I5AeVDFr+attODqmKSQ3tVSQIDAQAB" +
  "-----END PUBLIC KEY-----";
const privateKey =
  "-----BEGIN PRIVATE KEY-----\n" +
  "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBALh7dH47mNw2tqCp7Tm+ZCYUrOpoYybbnP2agciEgG/wWPRLAUXVlGgDVZ4vg9nXEwMuKufWtHu1yiPmg0q2N3rvWPhJbsBXQ1O/3Lvp0mUhphPDJ58Ui9fjQ7BQsh3XFivnlc3bE3zmutDG1EePkjkB5UMWv5q204OqYpJDe1VJAgMBAAECgYAqzFlGP8VCsV7E/ycN0mGhhAJpjzYRebl+DC43uqWhUn0Qj6YH8XiweLWQMS3Bh+fdQQSrLGBKou32Ti//US6lbZ1k/XVA8b+c41511iVCs+Ez9+8g7213oxbVZTfgpZr/bMOdy6KWQj11h72KSX3SmsnUEYOejGAidKgJEtfL0QJBAOKke8c4mcXlhGz8fqmPjn4ap6F2DwbpkQjGovH5QN51bS7RfjQS+w2KywuusxsuooL+gPH7FATi9bZwU/oah08CQQDQYO15nsXvtyPMdHU1kUmnllX0P0ECAlWpR+eEnn9lZ7+8a3/0lWNB2vZa2df00y+1UD+yRtlEYdupjJT8YbPnAkEAhPZaZ5YdIKx19DptVKyTvAeHMIJCbpu4Kp3eGndQRzI8y6q7j3FTN66lUEU9bkT9sjv9Cfly1SsRW+aqXaASoQJBAIF8yfU6obt9rcQ+VhuMhh2bARy/NdFezAZehVLW/0lveClJEAFX148z1sTL/DPKDCp6jKpm9lpVCSBKGMbgm98CQGiZ8uTrc/7ObWSvSCgBNBbeXFEB97U4ZwXvrDccqeEPL4RhkDNRHuIBeVvc9wXW9lSPeRvcrUQNY6b+hxXAC+0=" +
  "-----END PRIVATE KEY-----";

const Test = () => {
  const ref = useRef(null);
  const [frontIdDocument, setFrontIdDocument] = useState({});
  const [encryptedFile, setencryptedFile] = useState();
  const [decryptedFile, setdecryptedFile] = useState();
  const [ciphertext, setciphertext] = useState();

  const NodeRSA = require("node-rsa");
  const FileSaver = require("file-saver");


  const pubkey = new NodeRSA(publicKey);
  const privkey = new NodeRSA(privateKey);


  async function readContent(event) {

  }


  useEffect(() => {
    console.log("encrypted file changed", encryptedFile)
  }, [encryptedFile])



   // var encryptedfile = new File([file], file.name, {type: file.type});
   // const blobtoencrypt = new Blob([file], {type: file.type});

  

  const downloadDoc = (file) => {
    console.log("Download Set!");
    const a = document.querySelector("#link");

    a.setAttribute("download", file.name );
  }


  const previewFile = (myfile) => {
    const preview = document.querySelector('#specific');
    const reader44 = new FileReader();
  
    reader44.addEventListener("load", () => {
      // convert image file to base64 string

      console.log("original ", myfile);

      preview.src = reader44.result;
    }, false);
  
      reader44.readAsDataURL(myfile);
    
  }

  const downloadEncryption = (myfile) => {
    const reader44 = new FileReader();
  
    reader44.addEventListener("load", () => {
      console.log(reader44.result);

      const encryptedtext = pubkey.encrypt(reader44.result, 'base64'); //encrypts the reader result. (reader44.result returns a URL representing the file's data)
      setciphertext(encryptedtext); 

      const a = document.querySelector("#encrypt");

      //sets the type of the file to octet-stream which converts the file to a binary file and appends the encrypted text.
      a.setAttribute('href', 'data:application/octet-stream,' + encryptedtext);

      //change the extension and sets a download attribute to allow for user to download the encrypted file. 
      a.setAttribute('download', myfile.name + '.encrypted'); 

    }, false);
  
      reader44.readAsDataURL(myfile); //return a URL representing the file's data as a base64 encoded string
  }
  

  

  const downloadDecryption = (filetodecrypt) => { 
    //encryptedfile is uploaded by the user because I have not found a way to set assemble the encryptedFile in the encryption function
    const reader2 = new FileReader();

    reader2.addEventListener("load", () => {

      const decryptedtext = privkey.decrypt(ciphertext); //decrypts the cipher
      const b = document.querySelector("#decrypt");

      //because the plain text is the URL representing the original file's data, decrypting it will give us the URL of the original file data
      b.setAttribute('href', decryptedtext); 

      b.setAttribute('download', filetodecrypt.name.replace('.encrypted','')); //removing the .encrypted extension and downloading the decrypted file
    }, false);

    reader2.readAsText(filetodecrypt);

  }


 


  return (
    <div>
      ENCRYPT
      <Upload value="" onChange={setFrontIdDocument} theme="withIcon" id='myfile' />
      <h1>Upload Pic and Click on button</h1>
      <br />
      <br />
      {/* <button onClick={() => {}}>Decrypt</button> */}
      {/* <p id="image" ref={ref}></p> */}
      {/* <p id="image2" ref={ref}></p> */}
      {/* <a href="" id="link">
        Click to Download encrypted
      </a>
  <br />*/}
       <button onClick={() => {downloadEncryption(frontIdDocument)}}>Click to launch encrypted download function</button> 
       <a href="" id="encrypt">
      Click to Download Encrypted</a><br/>

       <br></br>
      <textarea id="fileContents"></textarea><br></br>
      <textarea id="encryptedContents"></textarea><br></br>
      <textarea id="decryptedContents"></textarea><br></br>
      <button onClick={() => {downloadDecryption(frontIdDocument)}}>Click to launch decrypted download function</button> 

      <a href="" id="decrypt">
      Click to Download Decrypted</a>
      
      <br/>
      <br/><br/>

      <button onClick={() => {previewFile(frontIdDocument)}} >Preview FILE</button><br />
      <img src="" height="200" alt="Image preview" id="specific"/>




      {/* { <button
        onClick={() => {
          myDecrypt(encryptedd);
        }}
      >
        Decrypt Me
      </button> } */}
    </div>
  );
};

export default Test;

//   const readFileDataAsBase64 = async(e) => {
//     return new Promise(async (resolve, reject) => {
//         const reader = new FileReader();

//         reader.onload = (event) => {
//             resolve(frontIdDocument);
//         };

//         reader.onerror = (err) => {
//             reject(err);
//         };

//         reader.readAsDataURL(frontIdDocument);
//     });
// }

//   const e = async () => {
//     console.log(readFileDataAsBase64(frontIdDocument))
//   }

//   function readDoc(file) {
//     //const preview = document.querySelector('#image');
//     const preview2 = document.querySelector("#image2");
//     const el2 = ref.current;
//     const a = document.querySelector("#link");
//     const b = document.querySelector("#link2");

//     console.log(frontIdDocument)
//     //var fileBuffer = Buffer.from(frontIdDocument)
//     //console.log(fileBuffer);

//     //reading file content
//     reader.addEventListener(
//       "load",
//       (event) => {
//         console.log(frontIdDocument)
//         var encrypted = crypt.encrypt(publicKey, reader.result); //encrypts the encrypted with the generated signature and pubkey
//         a.setAttribute("href", "data:application/octet-stream," + encrypted);
//         a.setAttribute("download", file.name + ".encrypted");

//         var clonedFile = new File([file], file.name, {type: file.type});
//         console.log(encrypted);
//       },
//       false
//     );
//     console.log("ENCRYPTED")

//     reader.readAsDataURL(file);

//     /*METADATA OF FILE*/
//     const name = file.name ? file.name : "NOT SUPPORTED";
//     const type = file.type ? file.type : "NOT SUPPORTED";
//     const size = file.size ? file.size : "NOT SUPPORTED";

//     //var decryptedFile = new File([file], decrypted, {type: file.type});
//   }

//   function decrypt(file) {
//     const b = document.querySelector("#link2");

//     //reading file content
//     reader.addEventListener(
//       "load",
//       (event) => {
//         var decrypted = crypt.decrypt(privateKey, reader.result);
//         b.setAttribute("href", decrypted);
//         b.setAttribute("download", file.name.replace(".encrypted", ""));

//       },
//       false
//       );

//       reader.readAsText(file);

//     };

//   //START OF RSA

//   const myEncrypt = (data) => {
//     try {
//       console.log(data);

//       //perform encryption
//       var encrypted = crypt.encrypt(publicKey, data); //signs and encrypts the encrypted with the generated signature and pubkey
//       setEncrypted(encrypted);
//       console.log("----ENCRYPTED----\n", encrypted, typeof encrypted);

//       var ciphered = JSON.parse(encrypted).cipher;
//       console.log("\n\n", ciphered);

//       //perform decryption
//       var decrypted = crypt.decrypt(privateKey, encrypted); //decrypts with privkey
//       console.log("----DECRYPTED----\n", decrypted);

//       /*// //decrypts the signature of the result using the pubkey and compares the obtained hash from the signature to the original hash, returns true if sigs are equal
//       // var verify = crypt.verify(publicKey, decrypted.signature, data);
//       // console.log("----VERIFICATION----\n", verify);
//             // //generate a signature to sign the data
//       // var signature = crypt.signature(privateKey, data);
//       // console.log("----SIGNATURE----\n", signature);*/
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const myDecrypt = (cipher) => {
//     try {
//       //perform decryption
//       var decrypted = crypt.decrypt(privateKey, cipher); //decrypts with privkey

//       console.log("----DECRYPTED----\n", decrypted);
//     } catch (error) {
//       console.log(error);
//     }
//   };

/* Assigning every task in a function

const signData = (text) => {
    setplaintext(text);

    var signature = crypt.signature(privateKey, plaintextt);
    console.log("signature: ", signature);
    setSignature(signature);

    //encrypts it after signing it
    myencrypt(plaintextt, Signature);
  };

  const myencrypt = (text, sig) => {
    try {
      var encrypted = crypt.encrypt(publicKey, text, sig);
      console.log("encrypted: ", encrypted);
      setciphered(encrypted);

      return encrypted;
    } catch (error) {
      console.log(error);
    }
  };

  const mydecrypt = (cipher) => {
    var decrypted = crypt.decrypt(privateKey, cipher);
    console.log("decrypted: ", decrypted);
    setdecryptedd(decrypted);

    //verifying authenticity of ciphered, if true means message came from the right person
    return myverify(decryptedd, plaintextt);
  };

  //to verify data
  const myverify = (decrypted, text) => {
    var verify = crypt.verify(publicKey, decryptedd.signature, text);
    console.log("verify: ", verify);
    return verify;
  };

*/

/*USING CRYPTO MODULE (problem with fixProc file is not updated. Cannot read properties of null)
  const cryptoencrypt = (string) => {
    const encryptedData = crypto.publicEncrypt(
      {
        //key: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4e3R+O5jcNragqe05vmQmFKzqaGMm25z9moHIhIBv8Fj0SwFF1ZRoA1WeL4PZ1xMDLirn1rR7tcoj5oNKtjd671j4SW7AV0NTv9y76dJlIaYTwyefFIvX40OwULId1xYr55XN2xN85rrQxtRHj5I5AeVDFr+attODqmKSQ3tVSQIDAQAB",
        key: publicKey,
      },
      Buffer.from(string, "utf-8")
    );
    const ciphered = encryptedData.toString("base64");
    console.log(encryptedData);
    console.log("encypted data: ", ciphered);

    return ciphered;
  };*/

/*USING TWEETNACL LIBRARY (ENCRYPTION IS DIFFERENT EVERYTIME, AND DECRYPTION RETURNS NULL) 
  const server = nacl.box.keyPair(); //server
  const client = nacl.box.keyPair(); //client

  const clientEncrypting = (string) => {
    //David computes a one time shared key

    const nonce = nacl.randomBytes(24);

    const encrypted = nacl.box(
      nacl.util.decodeUTF8(string),
      nonce,
      server.publicKey,
      client.secretKey
    );

    const message_in_transit = { encrypted, nonce };
    console.log(message_in_transit);
    setmessage_intransit(message_in_transit);
    //console.log("secretkey: ", client.secretKey);
    return message_in_transit;
  };

  const serverDecrypting = (message) => {
    let decoded_message = nacl.box.open(
      message.encrypted,
      message.nonce,
      client.publicKey,
      server.secretKey
    );

    let convertedToString = JSON.stringify(decoded_message);
    //let plain_text = nacl.util.encodeUTF8(decoded_message); //readable
    const utf8 = nacl.util.encodeUTF8(convertedToString);

    //return the plaintext

    console.log(decoded_message, convertedToString, utf8);
    return utf8;
  };*/

// const keys = {
//   privKey: `
//   -----BEGIN RSA PRIVATE KEY-----
//   MIICXQIBAAKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb9I5XRb6khyfD1Yt3YiCgQ
//   WMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76xFxdU6jE0NQ+Z+zEdhUTooNR
//   aY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB
//   AoGAfY9LpnuWK5Bs50UVep5c93SJdUi82u7yMx4iHFMc/Z2hfenfYEzu+57fI4fv
//   xTQ//5DbzRR/XKb8ulNv6+CHyPF31xk7YOBfkGI8qjLoq06V+FyBfDSwL8KbLyeH
//   m7KUZnLNQbk8yGLzB3iYKkRHlmUanQGaNMIJziWOkN+N9dECQQD0ONYRNZeuM8zd
//   8XJTSdcIX4a3gy3GGCJxOzv16XHxD03GW6UNLmfPwenKu+cdrQeaqEixrCejXdAF
//   z/7+BSMpAkEA8EaSOeP5Xr3ZrbiKzi6TGMwHMvC7HdJxaBJbVRfApFrE0/mPwmP5
//   rN7QwjrMY+0+AbXcm8mRQyQ1+IGEembsdwJBAN6az8Rv7QnD/YBvi52POIlRSSIM
//   V7SwWvSK4WSMnGb1ZBbhgdg57DXaspcwHsFV7hByQ5BvMtIduHcT14ECfcECQATe
//   aTgjFnqE/lQ22Rk0eGaYO80cc643BXVGafNfd9fcvwBMnk0iGX0XRsOozVt5Azil
//   psLBYuApa66NcVHJpCECQQDTjI2AQhFc1yRnCU/YgDnSpJVm1nASoRUnU8Jfm3Oz
//   uku7JUXcVpt08DFSceCEX9unCuMcT72rAQlLpdZir876
//   -----END RSA PRIVATE KEY-----`,
//   pubKey: `
//   -----BEGIN PUBLIC KEY-----
//   MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtN
//   FOb9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeucF+S76
//   xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7eibMxZtMlUDHjm4
//   gwQco1KRMDSmXSMkDwIDAQAB
//   -----END PUBLIC KEY-----
//   `

// }

//var str = JSON.stringify(data); //convert object to string
//console.log(typeof str);
//var obj = JSON.parse(str); //convert string back to object
//console.log(obj["1"][2][3]);

/*   AES enc/dec 
 var data = [{ id: 1 }, { id: 2 }];

  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    "secret key 123"
  ).toString();

  var bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  console.log(data, ciphertext, decryptedData);
    */

/*
  //BEGIN RSA String ENCRYPT
  const text = "qusai";
  const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({
    text,
    publicKey:
      "-----BEGIN PUBLIC KEY-----\nMIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgEzCqLqxWSiOTkWFQaPhY6X+qom8\nzzbidCpNu/zxwTieMvnBE4yPCeSRwJMFjJD2UGr7I/WunOsx+rAxYbzoMELw6TdZ\naaKygSLfkncUmbL6MQ1ZCSQQR6weaQj8VeYKNaA3QSqJYXCRPky6LI/o73brTCpE\nsWuVWp577q2PbTDbAgMBAAE=\n-----END PUBLIC KEY-----",
  });
  console.log("ENTERRRRRRRRRRRRRRRRRRRRRR", encryptedText);
  const privateKey = `-----BEGIN RSA PRIVATE KEY-----
  MIICWwIBAAKBgEzCqLqxWSiOTkWFQaPhY6X+qom8zzbidCpNu/zxwTieMvnBE4yP
  CeSRwJMFjJD2UGr7I/WunOsx+rAxYbzoMELw6TdZaaKygSLfkncUmbL6MQ1ZCSQQ
  R6weaQj8VeYKNaA3QSqJYXCRPky6LI/o73brTCpEsWuVWp577q2PbTDbAgMBAAEC
  gYAdokTrlk4aZx32nuRhdUE4M2H5POgugyxfrJT3qQl0Zza8zvpSGGK0WESlPc4v
  pLgVJRGT5q5z6l6iqN3XxTfkI2LpvoaJzkS7Ow6ODkSfnoaeE5LsBA19BYGGgtw5
  uD4c7YBVJoEWZelSgsfSJdUpq/4YIBDSETA2aXWuC32l4QJBAJjciW9COFow7mH7
  lWveyrBGjGbisv/A9OzJAsjzsgqudvTMCFUrQgRcRlof45TPQzvlCerNg9/Q/Q3W
  oUvjYXECQQCAjVSlzYWtFovvG306VXvhjgR4W5D1Eg1havbeJpdQPgulyPnyBCDR
  6XUeGyH8fTaT0ByDxRqiQnk2r5UuZ5ELAkEAhMF7pqG3OTUnwvbxJTbfh0ot46jc
  1ltpGz/T6Fwk8zvj2eRdFEK2Wf0dqGXri7CZbqoS+9Yywq3JKDyP5s16MQJAI04t
  dEfosavijK3BC9dUaZMGeUO0oQnvMNUerc5tejVAH6z9sFEf7mauqrEK+XwuFBRw
  8GOet/eHsNQyJYd+FwJAPDgogfNfjBV6bQT2UQwHdfzKG1Jfcs5Pz/fLMljsa67I
  osWRyvZU4dRMwmNpo+m9YyKHDuQ/NwwMBhQtYlkzDw==
  -----END RSA PRIVATE KEY-----`;
     const decryptedText = encryptRsa.decryptStringWithRsaPrivateKey({
       text: encryptedText,
       privateKey: privateKey,
     });*/

//   // To export the public key and write it to file:
//   const exportedPublicKeyBuffer = keys.pubKey.export({
//     type: "pkcs1",
//     format: "pem",
//   });

