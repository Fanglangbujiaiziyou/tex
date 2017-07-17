var radom=[1,2,3,4];
var inputs=[2,4,1,5];
function data(radom,inputs){
    let numa=0;
    let numb=0;
    for(let i=0;i<radom.length;i++){
        for(let j=0;j<inputs.length;j++){
          if(radom[i]==inputs[j]&&i===j){
                numa++;
            }
            else if(radom[i]==inputs[j]&&i!=j){
                numb++;
          }
         else continue;

        }
    }
    return{
        numa:numa,
        numb:numb
    }
}
