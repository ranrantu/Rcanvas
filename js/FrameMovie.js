function FrameMovie(frameList){

	var isArray = Array.isArray||Object.prototype.toString.call(arg) === "[object Array]";

	if(isArray(frameList)&&frameList.length){
		this.frameList = frameList;
	}else{
		this.frameList = [];
	}

	if(!config) config = {}; 
	
	this.frameNow = 0;

	this.isPlay = !0;

	this._timer = 0;

	this._fps =22;

	this._moment = 1000/this._fps;
}

FrameMovie.prototype.render = function (deltaTime){
	if(this.isPlay){

		this._timer+=deltaTime;

		if(this._timer>this._moment&&this.frameNow<this.frameList.length){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.drawImage(this.frameList[this.frameNow],0,0);
			if((process[pindex]!=undefined)&&(this.frameNow>process[pindex])){
				pindex++;
			}
			this.frameNow++;
			this._timer = this._timer%this._moment;
		}

	}
}