document.getElementById('av_file').addEventListener('change', (e)=>{
	var image = document.getElementById('useravatar');
	let mail = document.getElementById('email').value
	const file = e.target.files[0];
	  const reader = new FileReader();
	  reader.onloadend = () => {
		const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
		image.src = `data:image/png;base64,${base64String}`
	  };
	  reader.readAsDataURL(file);
  })