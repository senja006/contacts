// https://github.com/danialfarid/angular-file-upload
app.factory('fileUploader', ['$upload', '$rootScope', function($upload, $rootScope){
	return {
		upload: function(file) {
			if(file.length < 1) return;
            console.log('загрузка');
			$upload.upload({
                url: 'upload/uploadFile.php',
                file: file
            })
            .success(function (response) {
            	var nameImg = response.name;
                $rootScope.contactToEdit.srcUploadImg = 'upload/img/' + nameImg;
            });
		},
	}
}]);