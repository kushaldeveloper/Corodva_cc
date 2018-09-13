document.addEventListener("deviceready", onDeviceReady,false);
		function onDeviceReady() {
		alert("Device is starting");
		cameraTakePicture();
		//batteryStatus();
		}
		function cameraTakePicture() { 
		alert('camera is starting');
		alert('camera:' + navigator.camera);
		alert('camera:' + navigator.camera.getPicture);
					   navigator.camera.getPicture(onSuccess, onFail, {  
						  quality: 50, 
						  destinationType: Camera.DestinationType.DATA_URL 
					   });  
					   
					   function onSuccess(imageData) { 
					   alert('sucess');
						  var image = document.getElementById('myImage'); 
						  image.src = "data:image/jpeg;base64," + imageData; 
					   }  
					   
					   function onFail(message) { 
						  alert('Failed because: ' + message); 
					   } 
					
					}
		