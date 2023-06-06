import React, { useContext } from 'react';
import './styles/PhotoInput.css';
import CVContext from '../CVContext';

function PhotoInput() {
	const onUpload = (file) => {
		setPhotoUrl(URL.createObjectURL(file));
	};

	const { photoUrl, setPhotoUrl } = useContext(CVContext);

	return (
		<div className="photo-input">
			<h4>Upload your photo</h4>
			<input
				type="file"
				multiple={false}
				accept="image/jpeg, image/png, image/jpg"
				onChange={(e) => onUpload(e.target.files[0])}
			></input>
			<img className="photo-preview" src={photoUrl} alt="" />
		</div>
	);
}

export default PhotoInput;
