import React, { useState } from 'react';

import UploadDropzone from './upload-dropzone';
import UploadInput from './upload-input';

export default () => {
  const [fileInput = [], setFileInput] = useState();
  const [fileDrop = [], setFileDrop] = useState();

  return (
    <>
      <header>
        <h1>Examples</h1>
      </header>
      <main>
        <section>
          <h2>Via plain html5 input:</h2>
          <UploadInput
            onSelect={files => {
              setFileInput(Array.from(files));
              console.log(files);
            }}
          />
          <ul>
            {fileInput.map(i => (
              <li>{i.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Via react-dropzone:</h2>
          <UploadDropzone
            onDrop={files => {
              setFileDrop(Array.from(files));
              console.log(files);
            }}
          />
          <ul>
            {fileDrop.map(i => (
              <li>{i.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <p>more to come...</p>
        </section>
      </main>
    </>
  );
};
