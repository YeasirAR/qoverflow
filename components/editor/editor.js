import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Editor = () => {
  const [value, setValue] = useState('');
  const modules = {
    toolbar: 
       [
        [{ 'header': '1'}, {'header': '2'},{'header': '3'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ]
    }
    const formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]
    
  return(

    <>
      <><ReactQuill theme="snow" value={value} onChange={setValue}  modules={modules} formats={formats}/></>
      
      {/* html text viewer*/}
      <div>
        <p>
          Html: {value}
        </p>
      </div>
      
      
    </>

  )
}

export default Editor