



function person(){
    let that = this ;
    this.age = 0 ;
    
    
    setInterval(function(){
        that.age++;
        console.log(that.age);

    },1000);
}
let user = new person();