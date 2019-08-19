# Vox-Reader-JS
 A small library for reading vox file format, allows you to get colors, vertices and so on...

###Preparation for parsing, goal: get buffer vox file
```js
  var input = document.getElementsByTagName("input")[0];
  
  input.oninput = (e) => {
			var files = e.target.files,
				reader = new FileReader();
        
        reader.onload = () => {
          //Reads a vox file
          var vox = new VoxReader();
          vox.progressEvents = true;
          vox.read(reader.result).then((data)=>{
            //Builds an array of vertices and colors
            data.voxeles.Poligonalise().then(data => {
              if(data.type === "progress"){
                //data - is an object of progress, with calculated percentages, and the total and current number of elements
              }else if(data.type === "result"){
                //data - is a vertices and vertices color data
              }
            })
          });
        };

        reader.readAsArrayBuffer(files[0]);
		}
```
##Or remote file

```js
var blob = null;
var xhr = new XMLHttpRequest(); 
xhr.open("GET", "URL"); 
//set a responce type
xhr.responseType = "blob";

xhr.onload = function() {
    reader = new FileReader();
        
    reader.onload = () => {
      //Reads a vox file
      var vox = new VoxReader();
      vox.progressEvents = true;
      vox.read(reader.result).then((data)=>{
        //Builds an array of vertices and colors
        data.voxeles.Poligonalise().then(data => {
          if(data.type === "progress"){
            //data - is an object of progress, with calculated percentages, and the total and current number of elements
          }else if(data.type === "result"){
            //data - is a vertices and vertices color data
          }
        })
      });
    };

    reader.readAsArrayBuffer(xhr.response);
}
xhr.send();
```
