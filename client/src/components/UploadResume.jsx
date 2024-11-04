import React, { useState } from 'react';
import axios from 'axios';

const UploadResume = () => {
    const [file, setFile] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    async function handleUploadResume(event) {
        event.preventDefault();
        
        if (!file) return;

        const url = `${import.meta.env.VITE_SERVER_URL}/api/resume`;
        const formData = new FormData();
        formData.append('file', file);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
            onUploadProgress: function(progressEvent) {
                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                setUploadProgress(percentCompleted);
            }
        };

        try {
            const response = await axios.post(url, formData, config);
            console.log(response.data);

            // Reset form and upload progress after successful upload
            setFile(null);
            setUploadProgress(0);
            alert("Resume uploaded successfully!");
        } catch (error) {
            console.error("Error uploading file: ", error);
        }
    }

    return (
        <div className="my-16 text-center shadow-xl w-fit mx-auto md:p-10 p-5 rounded-xl" data-aos="zoom-in">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Don't see the right role?
            </h2>
            <p className="mb-4">
                Send us your resume, and we'll reach out if something opens up!
            </p>
            <form className='flex flex-col gap-3' onSubmit={handleUploadResume}>
                <input
                    type="file"
                    accept=".pdf"
                    onChange={handleChange}
                    className="file-input file-input-bordered file-input-primary w-full"
                    required
                />
                <button type='submit' className="btn btn-primary" disabled={!file}>
                    Submit Your Resume
                </button>
            </form>
            {uploadProgress > 0 && (
                <progress className="progress w-full" value={uploadProgress} max="100">
                    {uploadProgress}%
                </progress>
            )}
        </div>
    );
}

export default UploadResume;
