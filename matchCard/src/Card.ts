class Card extends egret.Sprite{

	private _faceID:string;
	private _backID:string;
	private _faceImg:egret.Bitmap;
	private _backImg:egret.Bitmap;
	private _isface:boolean=false;
	private _mask:egret.Shape;
	private _speed=0.1;
	private _isdeal=false;

	public constructor(_faceID:string,_backID:string) {
		super();
		this.width=120;
		this.height=168;
		this.anchorOffsetX=this.width/2;
		this._faceID=_faceID;
		this._backID=_backID;
		this.draw();
	}

	public get faceID():string{
		return this._faceID;
	}

	public get isface():boolean{
		return this._isface;
	}

	public get isdeal():boolean{
		return this._isdeal;
	}

	public set isdeal(value:boolean){
		this._isdeal=value;
	}

	public init():void{
		this._isface=true;
		this.reverse();
	}

	private draw():void{
		let faceTxtr:egret.Texture = RES.getRes(this._faceID);
       	this._faceImg= new egret.Bitmap(faceTxtr);
		this._faceImg.width=this.width;
		this._faceImg.height=this.height;
		
		let backTxtr:egret.Texture = RES.getRes(this._backID);
       	this._backImg= new egret.Bitmap(backTxtr);
		this._backImg.width=this.width;
		this._backImg.height=this.height;

		this.addChild(this._backImg);
	}

	public reverse():void{
		this._isface=!this._isface;	
		egret.startTick(this.enterFrameHandler,this);
	}


	private enterFrameHandler():boolean{
		
		this.scaleX-=this._speed;
		if(Math.abs(this.scaleX)<0.1){	
			if(!this._isface){
				if(this.getChildIndex(this._faceImg)!=-1){
					this.removeChild(this._faceImg);
				}
				this.addChild(this._backImg);
			}else{
				if(this.getChildIndex(this._backImg)!=-1){
					this.removeChild(this._backImg);
				}
				this.addChild(this._faceImg);
			}
			this._speed=-0.1;
		}
		if(this.scaleX==1){
			egret.stopTick(this.enterFrameHandler,this);
			this._speed=0.1;
		}
		
		return true;
	}
	
}