//Viết chương trình nhập vào một số bất kỳ lớn hơn 0. Tính tổng các phần tử từ 1 đến số vừa nhập vào.
function  getSum() {
    let getimport=parseInt(document.getElementById('import').value);
    let sum=0;
    let i=1;
    if(getimport>0){
        // for (i=1; i <= getimport; i++){
        //     sum +=i;
        // }
        // document.getElementById('display').value=sum;
        //<------------------------------------------->
        // while(i<=getimport){
        //     sum +=i;
        //     i++;
        // }document.getElementById('display').value=sum;
        // <------------------------------------------->
        do{
          sum += i;
          i++;
        }while(i<=getimport);
        document.getElementById('display').value=sum;
        }else{
            alert("xin loi! ban hay nhap lai.")


    }
}