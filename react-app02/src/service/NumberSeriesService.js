
class NumberSeriesService{
    generateSeries(lb,ub){
        return new Promise((resolve,reject) => {
            if(lb>=ub) {
                reject("Invalid Boundaries!");
            }else{
                let result=[];

                let n = lb;
                let handler = setInterval(()=>{
                    result.push(n);
                    n++;
                    if(n>ub){
                        clearInterval(handler);
                        resolve(result);
                    }
                },500);
            }
        });
    }
}

export default NumberSeriesService;