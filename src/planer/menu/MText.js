



export class MText  {
    constructor(par, fun) {         
        this.type="MText";
        var self=this;
        this.par=par;
        this.fun=fun;
        this.param=this.par.param;
        this.dCont1=new DCont(); 
        this.par.dCont.add(this.dCont1)
        this.otstup=this.param.otstup
        this._active=false;

        

        



        this.init=function(){
            
            if(this.dCont!=undefined)return
            this.dCont = new DCont();
            this.dCont.x=64+5*4 
            this.dCont.y=5
            this.panel =new DPanel(this.dCont);

            new DLabel(this.panel, 5,5,"пока тексты не делал")
        }



    
        var w,h,s;
        this.sizeWin = function(_w,_h,_s){  
            if(_w){
                w= _w;
                h= _h; 
                s= _s              
            }         
        }
    }

    set active(value) {       
        if (this._active != value) {
            this._active = value;
            if(this._active==true){
                this.init()               
                this.dCont1.add(this.dCont)
            }else{               
                this.dCont1.remove(this.dCont)
            } 
        }
    }
    get active() {
        return this._active;
    }

    set index(value) {       
        if (this._index != value) {
            this.olIndex=this._index;
            this._index = value;
            this.gallery.index=this._index
            this.openIndex(this._index,this.gallery.array[this._index].object)
            this.testIndex()
        }
    }
    get index() {
        return this._index;
    }
}




//достроеный класс галерий
export class GalleryXZ extends DGallery {
    constructor(dCont, x, y, fun) { 
        super(dCont, x, y, fun); 

        this.createZamen=function(){ 
            var r=new BoxXZ(this.content, 0, 0, this.downBtn, this.intText, this);  
            r.whPic=this.whPic; 
            r.finalLink=this.finalLink       
            return r
        }      
    }
}






export function BoxXZ(_cont, _x, _y, _fun,_intText, par) {
    DBox.call(this, _cont, _x, _y, _fun);
    this.type = 'BoxXZ';
    var self = this;


    var b,link,ooo;
    // Добавление картинки и текста, пошаговая загрузка.
    this.startLoad = function (_obj) {  

        this.object=_obj
        ooo=mhbd.getKeyId(_obj.key,_obj.id)
       
        link=mhbd.getLink(ooo.icon)
        this.image.link = link;
        this.image.visible = true;
        self.funLoad();


        this.objText.ru=_obj.name;    
    };

     if(dcmParam.mobile==false){
        this.panel.div.removeEventListener("mouseout", this.mouseOut);
        this.image.image.removeEventListener("mouseout", this.mouseOut);

        this.panel.div.removeEventListener("mouseover", this.mouseOver);
        this.image.image.removeEventListener("mouseover", this.mouseOver);
       
    }

    this.funOut=undefined
    this.funOver=undefined
    this.mouseOver = function (e) {        
        self.boolOut = false;
        if(self._activ==false){
            if(self.color1_1==null)self.panel.color1=dcmParam.compToHexArray(dcmParam.hexDec(self._color1), -30);
            else self.panel.color1=self.color1_1
        }
        else {
            if(self.color_1==null)self.panel.color1=dcmParam.compToHexArray(dcmParam.hexDec(self._color), -30);
            else self.panel.color1=self.color_1
        } 
                      
        if(self.funOver==undefined) self.funOver=window.mCPodskazka.sobOver
        self.funOver(this);
        
    };

    this.mouseOut = function (e) {        
        if(self.funDragOwer!=undefined) {
            self.funDragOwer(self);
            return
        }
        self.finalColor() 
       
        if(self.funOut==undefined) self.funOut=window.mCPodskazka.sobOut
        self.funOut(this);
    }
    this.finalColor = function () {        
        if(self._activ==false)self.panel.color1=self._color1;
        else self.panel.color1=self._color;
    }

    if(dcmParam.mobile==false){
        this.panel.div.addEventListener("mouseout", this.mouseOut);
        this.image.image.addEventListener("mouseout", this.mouseOut);

        this.panel.div.addEventListener("mouseover", this.mouseOver);
        this.image.image.addEventListener("mouseover", this.mouseOver);
        window.mCPodskazka.setBuuton(self, {ru:"xzsdfsfsfsdfsdfsdf",en:"xsdfsdfsdfsdfsdfz"})
        
      

    }

}

BoxXZ.prototype = Object.create(DBox.prototype);
BoxXZ.prototype.constructor = BoxXZ;
Object.defineProperties(BoxXZ.prototype, {
 
});