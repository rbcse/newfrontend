import { useState } from 'react';
import axios from "axios";
import '../styles/upload.css';
const BASE_URL = import.meta.env.REACT_APP_BASE_URL;
function Upload() {

    const [subject, setSubject] = useState("");
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [showPopup, setPopup] = useState(false);

    const submitFile = async () => {
        const token = localStorage.getItem("token");
        const formData = new FormData();
        formData.append("subject", subject);
        formData.append("file", file);
        const response = await axios.post(`${BASE_URL}/submitfile`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': token
            }
        });
        setMessage(response.data.message);
        setPopup(true);
    }

    const closePopup = () => {
        setPopup(false);
    }

    return <div className="upload-big-container">
        <div className="upload-container">

            <div className="image-section">
                <img src="../../notes.jpg" alt="" />
            </div>
            <div className="text-section">
                {showPopup && (
                    <div className="upload-message">
                        <img id="tick" src="../../tickimage.webp" alt="Success" />
                        <p>{message}</p>
                        <img onClick={closePopup} id="close" src="../../close.png" alt="Close" />
                    </div>
                )}
                <h1>Upload your <span>Notes</span></h1>
                <select name="" id="" onChange={(e) => setSubject(e.target.value)}>
                    <option value="Choose Subject">Choose Subject</option>
                    <option value="Database management system">Database management system</option>
                    <option value="Operating System">Operating System</option>
                    <option value="Computer Networks">Computer Networks</option>
                    <option value="Object oriented technology">Object oriented technology</option>
                </select>
                <input onChange={(e) => setFile(e.target.files[0])} type="file" accept='application/pdf' name="" id="" className='file-input' />
                <button onClick={submitFile}>Upload Notes</button>
            </div>
        </div>
    </div>
}

export default Upload;