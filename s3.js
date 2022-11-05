$( document ).ready(function() {
    $("#uploadForm").submit(function() {
    var bucket = new AWS.S3({params: {Bucket: 'bucket-fdw/prueba'}});
    var uploadFiles = $('#upFile')[0];
    var upFile = uploadFiles.files[0];
    if (upFile) {
    var uploadParams = {
        Key: upFile.name, 
        ContentType:
        upFile.type, 
        Body: upFile};
    bucket
    .upload(uploadParams)
    .on('httpUploadProgress', function(evt) {})
    .send(function(err, data) {
    $('#upFile').val(null);
    var pr = document.getElementById('Alert_success');
    if(err == null){
        pr.innerHTML = `
        <br><br>
        <center><div class="alert alert-success alert-dismissible fade show" role="alert" style:"width: 560px">
        <strong>el archivo se ha cargado con exito!</strong>
        <button> type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"</button>
        </div></center>`;       
    }else{
        pr.innerHTML = `
        <br><br>
        <center><div class="alert alert-danger alert-dismissible fade show" role="alert" style:"width: 560px">
        <strong>Error en la carga del archivo</strong>
        <button> type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"</button>
        </div></center>`; 
    }
    $("#showMessage").show();
    });
    }
    return false;
    });
    });