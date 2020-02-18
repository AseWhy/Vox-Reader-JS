
"strict mode"

/*
    GitHub: https://github.com/AseWhy/Vox-Reader-JS
*/

class VoxReader {};

(function(){
    const Default = {
        palette: new Uint8Array([255,255,255,255,255,255,204,255,255,255,153,255,255,255,102,255,255,255,51,255,255,255,0,255,255,204,255,255,255,204,204,255,255,204,153,255,255,204,102,255,255,204,51,255,255,204,0,255,255,153,255,255,255,153,204,255,255,153,153,255,255,153,102,255,255,153,51,255,255,153,0,255,255,102,255,255,255,102,204,255,255,102,153,255,255,102,102,255,255,102,51,255,255,102,0,255,255,51,255,255,255,51,204,255,255,51,153,255,255,51,102,255,255,51,51,255,255,51,0,255,255,0,255,255,255,0,204,255,255,0,153,255,255,0,102,255,255,0,51,255,255,0,0,255,204,255,255,255,204,255,204,255,204,255,153,255,204,255,102,255,204,255,51,255,204,255,0,255,204,204,255,255,204,204,204,255,204,204,153,255,204,204,102,255,204,204,51,255,204,204,0,255,204,153,255,255,204,153,204,255,204,153,153,255,204,153,102,255,204,153,51,255,204,153,0,255,204,102,255,255,204,102,204,255,204,102,153,255,204,102,102,255,204,102,51,255,204,102,0,255,204,51,255,255,204,51,204,255,204,51,153,255,204,51,102,255,204,51,51,255,204,51,0,255,204,0,255,255,204,0,204,255,204,0,153,255,204,0,102,255,204,0,51,255,204,0,0,255,153,255,255,255,153,255,204,255,153,255,153,255,153,255,102,255,153,255,51,255,153,255,0,255,153,204,255,255,153,204,204,255,153,204,153,255,153,204,102,255,153,204,51,255,153,204,0,255,153,153,255,255,153,153,204,255,153,153,153,255,153,153,102,255,153,153,51,255,153,153,0,255,153,102,255,255,153,102,204,255,153,102,153,255,153,102,102,255,153,102,51,255,153,102,0,255,153,51,255,255,153,51,204,255,153,51,153,255,153,51,102,255,153,51,51,255,153,51,0,255,153,0,255,255,153,0,204,255,153,0,153,255,153,0,102,255,153,0,51,255,153,0,0,255,102,255,255,255,102,255,204,255,102,255,153,255,102,255,102,255,102,255,51,255,102,255,0,255,102,204,255,255,102,204,204,255,102,204,153,255,102,204,102,255,102,204,51,255,102,204,0,255,102,153,255,255,102,153,204,255,102,153,153,255,102,153,102,255,102,153,51,255,102,153,0,255,102,102,255,255,102,102,204,255,102,102,153,255,102,102,102,255,102,102,51,255,102,102,0,255,102,51,255,255,102,51,204,255,102,51,153,255,102,51,102,255,102,51,51,255,102,51,0,255,102,0,255,255,102,0,204,255,102,0,153,255,102,0,102,255,102,0,51,255,102,0,0,255,51,255,255,255,51,255,204,255,51,255,153,255,51,255,102,255,51,255,51,255,51,255,0,255,51,204,255,255,51,204,204,255,51,204,153,255,51,204,102,255,51,204,51,255,51,204,0,255,51,153,255,255,51,153,204,255,51,153,153,255,51,153,102,255,51,153,51,255,51,153,0,255,51,102,255,255,51,102,204,255,51,102,153,255,51,102,102,255,51,102,51,255,51,102,0,255,51,51,255,255,51,51,204,255,51,51,153,255,51,51,102,255,51,51,51,255,51,51,0,255,51,0,255,255,51,0,204,255,51,0,153,255,51,0,102,255,51,0,51,255,51,0,0,255,0,255,255,255,0,255,204,255,0,255,153,255,0,255,102,255,0,255,51,255,0,255,0,255,0,204,255,255,0,204,204,255,0,204,153,255,0,204,102,255,0,204,51,255,0,204,0,255,0,153,255,255,0,153,204,255,0,153,153,255,0,153,102,255,0,153,51,255,0,153,0,255,0,102,255,255,0,102,204,255,0,102,153,255,0,102,102,255,0,102,51,255,0,102,0,255,0,51,255,255,0,51,204,255,0,51,153,255,0,51,102,255,0,51,51,255,0,51,0,255,0,0,255,255,0,0,204,255,0,0,153,255,0,0,102,255,0,0,51,255,238,0,0,255,221,0,0,255,187,0,0,255,170,0,0,255,136,0,0,255,119,0,0,255,85,0,0,255,68,0,0,255,34,0,0,255,17,0,0,255,0,238,0,255,0,221,0,255,0,187,0,255,0,170,0,255,0,136,0,255,0,119,0,255,0,85,0,255,0,68,0,255,0,34,0,255,0,17,0,255,0,0,238,255,0,0,221,255,0,0,187,255,0,0,170,255,0,0,136,255,0,0,119,255,0,0,85,255,0,0,68,255,0,0,34,255,0,0,17,255,238,238,238,255,221,221,221,255,187,187,187,255,170,170,170,255,136,136,136,255,119,119,119,255,85,85,85,255,68,68,68,255,34,34,34,255,17,17,17,255,0,0,0,0])
    }

    let decVert = null,
        toWords = null,
        red = null,
        readLength = null;

    // ========================= classes ========================= //

    class VoxelData{
        constructor(x,y,z,c){
            this.x = x;
            this.y = y;
            this.z = z;
            this.color = c;
        }
    }

    class ChunckData{
        constructor(c,cl,ch,cnl){
            this.name = c;
            this.content = cnl;
            this.children = ch
            this.contentLength = cl
        }
    }

    class Voxel32Array {
        constructor(meta){
            this.data = [],
            this.bitmap = null,
            this.inited = false,
            this.meta = meta;
        }
        PutVoxel(x,y,z,c){
            if(!(x >= 0 && z >= 0 && y >= 0) || !(x < this.meta.size.x && z < this.meta.size.z && y < this.meta.size.y)){
                throw "Out of range!";
                return;
            }

            this.data.push(new VoxelData(x, y, z, c));

            if(this.bitmap[x] === undefined)
                this.bitmap[x] = [];
            if(this.bitmap[x][y] === undefined)
                this.bitmap[x][y] = [];

            this.bitmap[x][y][z] = c;
        }
        Poligonalise(res){
            if(window.Worker){
                let host = new Worker(URL.createObjectURL(new Blob([`
                    self.addEventListener('message', (e) => {
                        (`+decVert.toString()+`)(e.data.palette, e.data.bitmap, e.data.data, e.data.offset, e.data.size, (data) => {
                            self.postMessage({
                                type: "result",
                                data: data
                            });
                        }, (data) => {
                            self.postMessage({
                                type: "progress",
                                data: data
                            });
                        });
                });`])));

                host.postMessage({
                    bitmap: this.bitmap,
                    data: this.data,
                    size: this.meta.voxelSettings.size,
                    offset: this.meta.voxelSettings.offset,
                    palette: this.meta.voxelSettings.palette
                });
                host.onmessage = (data) => {
                    if(data.data.type === "result"){
                        res(data.data);
                    }else if(data.data.type === "progress"){
                        if(this.meta.reader.progressEvents)
                            res(data.data);
                    }
                }
            }else{
                 decVert(this.meta.voxelSettings.palette,
                                          this.bitmap,
                                          this.data,
                                          this.meta.voxelSettings.offset,
                                          this.meta.voxelSettings.size,
                                          (data) => {
                                            res({
                                                type: "result",
                                                data: data
                                            })
                                          })
            }
        }
    }

    class DVoxMeta{
        constructor(version, reader){
            this.version = version || 0x0;
            this.size=  {
                    x: 0x0,
                    y: 0x0,
                    z: 0x0
                };
            this.voxelSettings = {
                    size: {
                        x: 0x1,
                        y: 0x1,
                        z: 0x1
                    },
                    offset: {
                        x: 0x0,
                        y: 0x0,
                        z: 0x0
                    },
                    palette: Default.palette
                };
            this.voxeles = new Voxel32Array(this, reader);
            this.inited = false;
            this.chuncks = [];
            this.reader = reader;
        }
    }

    // ======================= functions =========================== //

    decVert = (palette, bitmap, data, offset, size, res, progress) => {
        let start = Date.now(),
            grid = [],
            colors = [],
            opacity_map = [],
            color = new Uint8Array(4),
            last_i = 0,
            dec = 0;

        for(let i = 0, len = data.length;i < len;i++){
            color[0] = palette[data[i].color * 4];
            color[1] = palette[data[i].color * 4 + 1];
            color[2] = palette[data[i].color * 4 + 2];
            color[3] = palette[data[i].color * 4 + 3];

            if(progress && (dec = Math.round(100 * (i / len))) !== last_i){
                progress({
                    per: dec,
                    index: i,
                    of: len
                });
                last_i = dec;
            }

            //Left
            if( bitmap[data[i].x-1] === undefined ||
                bitmap[data[i].x-1][data[i].y] === undefined ||
                bitmap[data[i].x-1][data[i].y][data[i].z] === undefined){
                    grid.push(
                        offset.x + data[i].x * size.x, data[i].y * size.y + size.y + offset.y, data[i].z * size.z + offset.z,
                        offset.x + data[i].x * size.x, data[i].y * size.y + offset.y, data[i].z * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x, data[i].y * size.y + size.y + offset.y, data[i].z * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x, data[i].y * size.y + offset.y, data[i].z * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x, data[i].y * size.y + size.y + offset.y, data[i].z * size.z + offset.z,
                        offset.x + data[i].x * size.x, data[i].y * size.y + offset.y, data[i].z * size.z + offset.z
                    );

                    colors.push(color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF);
                                
                    opacity_map.push(color[3],color[3],color[3],color[3],color[3],color[3]);
            }
            //Right
            if( bitmap[data[i].x+1] === undefined ||
                bitmap[data[i].x+1][data[i].y] === undefined ||
                bitmap[data[i].x+1][data[i].y][data[i].z] === undefined){
                    grid.push(
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + offset.y, data[i].z  * size.z + offset.z,
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + size.y + offset.y, data[i].z  * size.z + offset.z,
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + offset.y, data[i].z  * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + size.y + offset.y, data[i].z  * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + offset.y, data[i].z  * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + size.y + offset.y, data[i].z  * size.z + offset.z
                    );

                    colors.push(color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF);

                    opacity_map.push(color[3],color[3],color[3],color[3],color[3],color[3]);
            }
            //Bottom
            if( bitmap[data[i].x][data[i].y-1] === undefined || 
                bitmap[data[i].x][data[i].y-1][data[i].z] === undefined){
                    grid.push(
                        offset.x + data[i].x * size.x, data[i].y * size.y + offset.y, data[i].z  * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + offset.y, data[i].z * size.z + offset.z,
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + offset.y, data[i].z * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x + size.x, data[i].y * size.y + offset.y, data[i].z * size.z + offset.z,
                        offset.x + data[i].x * size.x, data[i].y * size.y + offset.y, data[i].z * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x, data[i].y * size.y + offset.y, data[i].z * size.z + offset.z
                    );

                    colors.push(color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF);

                    opacity_map.push(color[3],color[3],color[3],color[3],color[3],color[3]);
            }
            //Top
            if( bitmap[data[i].x][data[i].y+1] === undefined ||
                bitmap[data[i].x][data[i].y+1][data[i].z] === undefined){
                    grid.push(
                        offset.x + data[i].x * size.x, size.y + data[i].y  * size.y + offset.y,  data[i].z * size.z + offset.z,
                        offset.x + data[i].x * size.x, size.y + data[i].y  * size.y + offset.y, size.z + data[i].z * size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x, size.y + data[i].y  * size.y + offset.y,  data[i].z * size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x, size.y + data[i].y  * size.y + offset.y, size.z + data[i].z * size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x, size.y + data[i].y  * size.y + offset.y,  data[i].z * size.z + offset.z,
                        offset.x + data[i].x * size.x, size.y + data[i].y  * size.y + offset.y, size.z + data[i].z * size.z + offset.z
                    );

                    colors.push(color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF);

                    opacity_map.push(color[3],color[3],color[3],color[3],color[3],color[3]);
            }
            //Front
            if( bitmap[data[i].x][data[i].y][data[i].z-1] === undefined){
                    grid.push(
                        offset.x + data[i].x * size.x, data[i].y * size.y + offset.y, data[i].z* size.z + offset.z,
                        offset.x + data[i].x * size.x, size.y + data[i].y * size.y + offset.y, data[i].z * size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x,  data[i].y * size.y + offset.y, data[i].z * size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x, size.y + data[i].y * size.y + offset.y, data[i].z * size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x,  data[i].y * size.y + offset.y, data[i].z * size.z + offset.z,
                        offset.x + data[i].x * size.x, size.y + data[i].y * size.y + offset.y, data[i].z * size.z + offset.z
                    );

                    colors.push(color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF);

                    opacity_map.push(color[3],color[3],color[3],color[3],color[3],color[3]);
            }
            //Back
            if( bitmap[data[i].x][data[i].y][data[i].z+1] === undefined){
                    grid.push(
                        offset.x + data[i].x * size.x, size.y + data[i].y * size.y + offset.y,  data[i].z * size.z + size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x, data[i].y * size.y + offset.y,  data[i].z * size.z + size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x, size.y + data[i].y * size.y + offset.y,  data[i].z * size.z + size.z + offset.z,
                        offset.x + size.x + data[i].x * size.x, data[i].y * size.y + offset.y,  data[i].z * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x, size.y + data[i].y * size.y + offset.y,  data[i].z * size.z + size.z + offset.z,
                        offset.x + data[i].x * size.x,  data[i].y * size.y + offset.y,  data[i].z * size.z + size.z + offset.z
                    );

                    colors.push(color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF,
                                color[0] / 0xFF, color[1] / 0xFF, color[2] / 0xFF);

                    opacity_map.push(color[3],color[3],color[3],color[3],color[3],color[3]);
            }
            
        }

        res({
            geometry: new Float32Array(grid),
            colors: new Float32Array(colors),
            opacity: opacity_map,
            voxeles: data.length,
            ticks: (Date.now() - start)
        });
    }

    toWords = (buffer) => {
        let ret = "";
        for(let i = 0;i < buffer.length;i++){
            ret += String.fromCharCode(buffer[i]);
        }
        return ret;
    }
    
    red = (array, s) => {
        let subarray = [];
        for (let i = 0; i <Math.ceil(array.length/s); i++){
            subarray[i] = array.slice((i*s), (i*s) + s);
        }
        return subarray;
    }

    readLength = (array) => {
        let buffer = [],
            item = null;
        for(let i = 0;i < array.length;i++){
            item = array[array.length - i - 1].toString(16);
            buffer.push(item.length < 2 ? "0" + item : item);
        }
        return parseInt(buffer.join(""), 16);
    }

    // ===================== body ============================= //


    VoxReader.prototype.new = (x, y, z) => {
        let meta = new DVoxMeta(150, this);
        meta.size.x = x;
        meta.size.y = y;
        meta.size.z = z;
        meta.offset.x = x/2;
        meta.offset.y = y/2;
        meta.offset.z = z/2;
        return meta;
    }

    VoxReader.prototype.SpecialBlockLength = {
        RGBA: 0x400
    }

    /**
     * 0 - x,
     * 1 - y,
     * 2 - z 
     * =================== *
     * here: 
     * =================== *
     * x -> x
     * y -> z
     * z -> y
     */

    VoxReader.prototype.invertVertices = {
        x: 0, 
        y: 2,
        z: 1
    }

    VoxReader.prototype.progressEvents = false;
    VoxReader.prototype.useDefaultPalette = false;

    VoxReader.prototype.read = function(result){
        try {
            if(typeof result !== "Uint8Array")
                result = new Uint8Array(result);
        }catch {
            throw "Error"
        }
        
        return new Promise((resolve, reject) => {
            if(result.slice(0, 4).join("") !== "86798832"){
                throw "Is not a VOX signature!"
            }else {
                let meta = new DVoxMeta(readLength(result.slice(4, 8)), this),
                    b_id = null,
                    content = null,
                    children = null,
                    read_content = null;

                for(let i = 8;i < result.length;){
                    b_id = toWords(result.slice(i, i + 4));
                    content = this.SpecialBlockLength[b_id] || readLength(result.slice(i + 4, i + 8));
                    children = readLength(result.slice(i + 8, i + 12));
                    i += 12;
                    read_content = result.slice(i, i+content);
                    i += content;

                    meta.chuncks.push(new ChunckData(b_id, content, children, read_content));

                    switch(b_id){
                        case "SIZE":
                            if(!meta.inited){
                                let size = red(read_content, 4);
                                meta.size.x = this.invertVertices.x === 0 ? readLength(size[0]) : (this.invertVertices.x === 1 ? readLength(size[1]) : readLength(size[2]));
                                meta.size.y = this.invertVertices.y === 0 ? readLength(size[0]) : (this.invertVertices.y === 1 ? readLength(size[1]) : readLength(size[2]));;
                                meta.size.z = this.invertVertices.z === 0 ? readLength(size[0]) : (this.invertVertices.z === 1 ? readLength(size[1]) : readLength(size[2]));;
                                meta.voxelSettings.offset = {
                                    x: -(meta.size.x / 2),
                                    y: -(meta.size.y / 2),
                                    z: -(meta.size.z / 2)
                                }
                                meta.voxeles.bitmap = [[]];
                                meta.inited = true;
                            }
                        continue;
                        case "XYZI":
                            if(!meta.voxeles.inited ){
                                let x = 0,
                                    y = 0,
                                    z = 0,
                                    c = 0;

                                for(let j = 0;j < read_content.length;j+=4){
                                    x = this.invertVertices.x === 0 ? read_content[j] : (this.invertVertices.x === 1 ? read_content[j+1] : read_content[j+2]);
                                    y = this.invertVertices.y === 0 ? read_content[j] : (this.invertVertices.y === 1 ? read_content[j+1] : read_content[j+2]);
                                    z = this.invertVertices.z === 0 ? read_content[j] : (this.invertVertices.z === 1 ? read_content[j+1] : read_content[j+2]);
                                    c = read_content[j+3];

                                    if(!(x >= 0 && z >= 0 && y >= 0) || !(x < meta.size.x && z < meta.size.z && y < meta.size.y))
                                        continue;
                                        meta.voxeles.data.push(new VoxelData(x, y, z, c));

                                    if(meta.voxeles.bitmap[x] === undefined)
                                        meta.voxeles.bitmap[x] = [];
                                    if(meta.voxeles.bitmap[x][y] === undefined)
                                        meta.voxeles.bitmap[x][y] = [];

                                    meta.voxeles.bitmap[x][y][z] = c;
                                }

                                meta.voxeles.inited = true;
                            }
                        break;
                        case "RGBA":
                            if(!this.useDefaultPalette){
                                meta.voxelSettings.palette = read_content;
                            }
                        break;
                        default:
                        break;
                    }

                };

                resolve(meta);
            }
        })
    }
})()
