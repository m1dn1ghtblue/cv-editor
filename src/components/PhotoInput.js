import React, { useContext } from 'react';
import './styles/PhotoInput.css';
import CVContext from '../CVContext';

function PhotoInput() {
	const onUpload = (file) => {
		console.dir(file);
		setPhotoUrl(URL.createObjectURL(file));
	};

	const { photoUrl, setPhotoUrl } = useContext(CVContext);

	return (
		<div className="photo-input">
			{photoUrl == null ? <p>Upload photo</p> : <img className="photo-preview" src={photoUrl} alt="" />}
			<input
				type="file"
				multiple={false}
				accept="image/jpeg, image/png, image/jpg"
				onChange={(e) => onUpload(e.target.files[0])}
			></input>
		</div>
	);
}

export default PhotoInput;
